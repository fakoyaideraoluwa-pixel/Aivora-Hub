import React from 'react'

const Scarf = () => {
  return (
    <>
             <div  className='border' 
           style={{
            backgroundImage: `url("https://simple-e-commerce-nu.vercel.app/products/scarf.jpg")`,
            height: '300px',
     width: '30%',
       backgroundSize: 'cover',
       backgroundPosition: 'center'

           }}
           >
            
           </div>
          
          <div> 
             <h3>Silk Scarf</h3>
            <p>Premium hand woven silk scarf with artistic pattern</p>
            </div>
            <article>
              <h4>$89.99</h4>
            <button>View</button>
            </article>
    </>
  )
}

export default Scarf