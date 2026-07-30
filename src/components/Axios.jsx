import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const Axios = () => {
    let endPoint="https://jsonplaceholder.typicode.com/users"



    const [allUser, setallUser]=useState([])
    const [loading,setLoading]=useState(true)
    const [isLoading,setisLoading]=useState(true)


      useEffect(() => {
        
          axios.get(endPoint).then((response)=>{
            console.log(response.data);
            
         setallUser(response.data)
          setLoading(false)
         setisLoading(false)
        
          }) 
      }, [])


      
       const showData =()=>{
       
        
        
        
       }



    
    

  return (
    <div>
      
      <h1>Axios components</h1>
      <button onClick={showData}>Show Data</button>


      { 
           loading?(


          <>
          <p>loading...</p>
          
          </>


        ):(

            <>
        {
          isLoading?(<p>loaaading...</p>) :(

        allUser.map((user)=>(

            <>
          <div>
            <h2>{user.name}</h2>
            <p>{user.username}</p>
            <p>{user.email}</p>
            </div>    

            </>
        )))
        } 
         </>
        )
      }
    </div>
  )
}

export default Axios