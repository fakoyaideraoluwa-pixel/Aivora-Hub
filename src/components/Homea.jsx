import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate} from 'react-router-dom'
const Homea = () => {

   const [appliances, setapp]=useState([])

    useEffect(()=>{
        fetch("/All.json")
        .then((res)=>res.json())
        .then((data)=>setapp(data.appliances))
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
    
    <div className='appliance'>
        <h1 className='app'>Home Appliances</h1>
    
    <div className='product-grid'>
    {
        appliances.length===0?(
            <p>Loading products...</p>
        ):(
            appliances.map((item)=>
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

export default Homea