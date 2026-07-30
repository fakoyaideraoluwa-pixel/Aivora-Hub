import React from 'react'

const Watch = () => {
  return (
    <>
            <div  className='border' 
           style={{
            backgroundImage: `url("https://simple-e-commerce-nu.vercel.app/products/watch.jpg")`,
            height: '300px',
     width: '30%',
       backgroundSize: 'cover',
       backgroundPosition: 'center'

           }}
           >
            
           </div>
            
            <div>
              <h3>Minimalist Watch</h3>
            <p>Elegent analog watch with Link clean dial and leather strap</p>
            </div>
           <article>
             <h4>$149.99</h4>
            <button>View</button>
           </article>
           
    </>
  )
}

export default Watch