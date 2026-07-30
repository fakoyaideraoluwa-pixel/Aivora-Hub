import React from 'react'
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Cosmestics = () => {    
     const [womencosmestics, setskin]=useState([])
     
         useEffect(()=>{
             fetch("/All.json")
             .then((res)=>res.json())
             .then((data)=>setskin(data.womencosmestics))
             .catch((error) => console.error("Error fetching products:", error));
         },[]);

         const [mencosmestics, setcare]=useState([])
     
         useEffect(()=>{
             fetch("/All.json")
             .then((res)=>res.json())
             .then((data)=>setcare(data.mencosmestics))
             .catch((error) => console.error("Error fetching products:", error));
         },[]);

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
            <h1 className='women'>Women's Cosmestics</h1>
        
        <div className='product-grid'>
        {
            womencosmestics.length===0?(
                <p>Loading products...</p>
            ):(
               womencosmestics.map((item)=>
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
            <h1 className='women'>Men's Cosmestics</h1>
        
        <div className='product-grid'>
        {
            mencosmestics.length===0?(
                <p>Loading products...</p>
            ):(
               mencosmestics.map((item)=>
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

export default Cosmestics