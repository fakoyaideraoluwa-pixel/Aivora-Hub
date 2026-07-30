import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Electronics = () => {
   const [electronics, setelect]=useState([])
  
      useEffect(()=>{
          fetch("/All.json")
          .then((res)=>res.json())
          .then((data)=>setelect(data.electronics))
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
        <h1 className='electron'>Gadgets</h1>
    
    <div className='product-grid'>
    {
        electronics.length===0?(
            <p>Loading products...</p>
        ):(
            electronics.map((item)=>
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

export default Electronics