import React from 'react'

const Home = () => {
  return (
    <>
     <main>
   <section>
     <div>
        <h1>Discover Premium Products</h1>
        <p>Curated collection of elegant, high-quality items for the discerning taste</p>
    </div>
   </section>

   <section>
    <div>
    <h2>Featured Collections</h2>
    <p>Handpicked items that define elegance and quality</p>
    </div>

    <div> 
        <aside>
            <div>
                 <div  className='border' 
           style={{
            backgroundImage: `url("https://simple-e-commerce-nu.vercel.app/products/watch.jpg")`,
            height: '300px',
     width: '100%',
       backgroundSize: 'cover',
       backgroundPosition: 'center'

           }}
           >
            
           </div>
            </div>
            <div>
              <h3>Minimalist Watch</h3>
            <p>Elegent analog watch with a clean dial and leather strap</p>
            </div>
           <article>
             <h4>$149.99</h4>
            <button>View</button>
           </article>
        </aside>

           <aside>
          <div className='border'>
                 <div  className='border' 
           style={{
            backgroundImage: `url("https://simple-e-commerce-nu.vercel.app/products/scarf.jpg")`,
            height: '300px',
     width: '100%',
       backgroundSize: 'cover',
       backgroundPosition: 'center'

           }}
           >
            
           </div>
          </div>
          <div> 
             <h3>Silk Scarf</h3>
            <p>Premium hand woven silk scarf with artistic pattern</p>
            </div>
            <article>
              <h4>$89.99</h4>
            <button>View</button>
            </article>
        </aside>

           <aside style={{
           }} className='border'>
           <div>
              <div  className='border' 
           style={{
            backgroundImage: `url("https://simple-e-commerce-nu.vercel.app/products/earbuds.jpg")`,
            height: '300px',
     width: '100%',
       backgroundSize: 'cover',
       backgroundPosition: 'center'

           }}
           >
            
           </div>
           </div>
            <div>
              <h3>Premium Wireless Earbuds</h3>
            <p>High-quality wireless earbuds with noise cancellation</p>
            </div>
           <article>
             <h4>$199.99</h4>
            <button>View</button>
           </article>
        </aside>
   
           <aside>
         <div>
           <div  className='border' 
           style={{
            backgroundImage: `url("https://simple-e-commerce-nu.vercel.app/products/wallet.jpg")`,
            height: '300px',
     width: '100%',
       backgroundSize: 'cover',
       backgroundPosition: 'center'

           }}
           >
            
           </div>
         </div>
           <div>
             <h3>Leather Wallet</h3>
            <p>Handcrafted genuine leather wallet withRFID protection</p>
           </div>
            <article>
              <h4>$59.99</h4>
            <button>View</button>
            </article>
        </aside>

           <aside>
           <div>
                <div  className='border' 
           style={{
            backgroundImage: `url("https://simple-e-commerce-nu.vercel.app/products/sunglasses.jpg")`,
            height: '300px',
     width: '100%',
       backgroundSize: 'cover',
       backgroundPosition: 'center'

           }}
           >
            
           </div>
           </div>
           <div>
             <h3>Designer Sunglasses</h3>
            <p>UV-protected sunglasses with polarized lenses</p>
           </div>
           <article>
             <h4>$129.99</h4>
            <button>View</button>
           </article>
        </aside>

           <aside>
          <div>
   <div  className='border' 
           style={{
            backgroundImage: `url("https://simple-e-commerce-nu.vercel.app/products/coffee-maker.jpg")`,
            height: '300px',
     width: '100%',
       backgroundSize: 'cover',
       backgroundPosition: 'center'

           }}
           >
            
           </div>
          </div>
         <div>
             <h3>Premium Coffee Maker</h3>
            <p>Mordern coffee maker with programmable brewing options</p>
         </div>
            <article>
              <h4>$299.99</h4>
            <button>View</button>
            </article>
        </aside>

    </div>
   </section>

   </main>
   
   <footer>
        <div>
          <h4>Luxe</h4>
        <p>Premium products for modern living</p>
        </div>

    <div className='footer-col-2'>
      <a>Abouts</a>
        <a>Contacts</a>
        <a>Privacy</a>
    </div>
    </footer>
    <footer>
      <div>
 <p>@2026Luxe.All rights reserved</p>
  </div>
    </footer>

    </>
  )
}

export default Home