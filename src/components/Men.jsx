import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
const Men = () => {
  
      const [menclothes, setclothm]=useState([])
         
             useEffect(()=>{
                 fetch("/All.json")
                 .then((res)=>res.json())
                 .then((data)=>setclothm(data.menclothes))
                 .catch((error) => console.error("Error fetching products:", error));
             },[]);
    
             const [menbags, setbag]=useState([])
         
             useEffect(()=>{
                 fetch("/All.json")
                 .then((res)=>res.json())
                 .then((data)=>setbag(data.menbags))
                 .catch((error) => console.error("Error fetching products:", error));
             },[]);
    
             
             const [menshoes, setshoe]=useState([])
         
             useEffect(()=>{
                 fetch("/All.json")
                 .then((res)=>res.json())
                 .then((data)=>setshoe(data.menshoes))
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
            <h1 className='men'>Men's Fashion</h1>
        
        <div className='product-grid'>
        {
            menclothes.length===0?(
                <p>Loading products...</p>
            ):(
               menclothes.map((item)=>
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
            menbags.length===0?(
                <p>Loading products...</p>
            ):(
               menbags.map((item)=>
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
            menshoes.length===0?(
                <p>Loading products...</p>
            ):(
               menshoes.map((item)=>
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

export default Men