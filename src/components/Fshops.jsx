import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Fshops = () => {
    const [menclothes, setclothm]=useState([])

    useEffect(()=>{
        fetch("/mencloth.json")
        .then((res)=>res.json())
        .then((data)=>setclothm(data.menclothes))
        .catch((error) => console.error("Error fetching products:", error));
    },[])

  return (
    <>
    <div className='menclothes'>
        <h1 className='men'></h1>
    
    <div className='product-grid'>
    {
        menclothes.length===0?(
            <p>Loading products...</p>
        ):(
            menclothes.map((menpro)=>
            <div key={menpro.id} className="card">
             <img src={menpro.image} alt={menpro.name} />
             <h3>{menpro.name}</h3>
              <p className="price">${menpro.price}</p>
                
             <Link to={`/menclothes/${menpro.id}`} className="view-btn">
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

export default Fshops