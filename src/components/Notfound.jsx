import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'

const Notfound = () => {
  
    const navigate=useNavigate()
    const [time, setTime]=useState(3)
    useEffect(()=>{
      setTimeout(() => {
        navigate('/home')
      }, 3000);

    //   setInterval(() => {
    //   setTime(time-1)
    //  }, 1000);
    })

    
     


        
    
  return (
    <div>
        <h1>Page not found</h1>
    </div>
  )
}

export default Notfound