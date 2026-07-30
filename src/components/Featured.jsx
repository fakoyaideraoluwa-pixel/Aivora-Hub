import React from 'react'

const Featured = () => {
    const products =[
        {
            id:1,
            name:'Smart TV',
            price:'$500'
        },
        {
            id:2,
            name:'Blender',
            price:'$80'
        },
             {
            id:3,
            name:'Microwave',
            price:'$200'
        }
    ]
  return (
    <div className='featured'>
       <h1>Featured products</h1>
       <div className="products">
        {products.map((product)=>(
            <div key={product.id} className='product-card'>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button>View product</button>
            </div>
        ))}
       </div>
    </div>
  )
}

export default Featured