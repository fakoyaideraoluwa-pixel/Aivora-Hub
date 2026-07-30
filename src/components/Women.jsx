import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react'
import "./Product.css"
const Women = () => {    
     const [womenclothes, setclothm]=useState([])
     
         useEffect(()=>{
             fetch("/All.json")
             .then((res)=>res.json())
             .then((data)=>setclothm(data.womenclothes))
             .catch((error) => console.error("Error fetching products:", error));
         },[]);

         const [womenbags, setbag]=useState([])
     
         useEffect(()=>{
             fetch("/All.json")
             .then((res)=>res.json())
             .then((data)=>setbag(data.womenbags))
             .catch((error) => console.error("Error fetching products:", error));
         },[]);

         
         const [womenshoes, setshoe]=useState([])
     
         useEffect(()=>{
             fetch("/All.json")
             .then((res)=>res.json())
             .then((data)=>setshoe(data.womenshoes))
             .catch((error) => console.error("Error fetching products:", error));
         },[])
             const navigate = useNavigate()
         

  return (
    <>
              <button
        onClick={()=>navigate(-1)}
        className='btn btn-dark'
        style={{
            display:'inline-flex',
            alignItems:'center',
            justifyContent:'center',
            padding:'6px 14px',
            margin:'12px 0 5px 15px',
            border:'none',
            borderRadius:'6px',
            width:'fit-content',
            transition:'0.3s ease'
        }}>
        Back</button>
    
      <div className='products'>
            <h1 className='women'>Women's Fashion</h1>
        
        <div className='product-grid'>
        {
            womenclothes.length===0?(
                <p>Loading products...</p>
            ):(
               womenclothes.map((item)=>
                           <div key={item.id} className="card">
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                             <p className="price">${item.price}</p>
                               
                            <Link to={`/details/${item.id}`} className="view-btn">
                              View
                            </Link>
                </div>
                )
            )
        }
        </div>
    
        </div>

         <div className='products'>
        
        <div className='product-grid'>
        {
            womenbags.length===0?(
                <p>Loading products...</p>
            ):(
               womenbags.map((item)=>
                           <div key={item.id} className="card">
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                             <p className="price">${item.price}</p>
                               
                            <Link to={`/details/${item.id}`} className="view-btn">
                              View
                            </Link>
                </div>
                )
            )
        }
        </div>
    
        </div>

         <div className='products'>
        
        <div className='product-grid'>
        {
            womenshoes.length===0?(
                <p>Loading products...</p>
            ):(
               womenshoes.map((item)=>
                           <div key={item.id} className="card">
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                             <p className="price">${item.price}</p>
                               
                            <Link to={`/details/${item.id}`} className="view-btn">
                              View
                            </Link>
                </div>
                )
            )
        }
        </div>
    
        </div>
    
    </>
  )
}

export default Women