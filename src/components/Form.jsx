import React, { useState } from 'react'

const Form = () => {

     const [firstname,setfirstname]=useState('')
    const [lastname,setlastname]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
 

    
    
    const submit = (e) =>{
        e.preventDefault()
       console.log(firstname, lastname, email, password);
       
 
        
        
    }

      // setfirstname('')
      //   setlastname('')
      //   setemail('')
      //   setpassword('')

  return (
    <>
    <form onSubmit={submit}>
    <input type="text" name="" id="" 
    placeholder='firstname'
    onChange={(e)=>setfirstname(e.target.value)}/>
    <br /><br />

     <input type="text" name="" id="" 
    placeholder='lastname'
    onChange={(e)=>setlastname(e.target.value)}/>
    <br /><br />

     <input type="email" name="" id="" 
    placeholder='email'
    onChange={(e)=>setemail(e.target.value)}/>
    <br /><br />

     <input type="password" name="" id="" 
    placeholder='password'
    onChange={(e)=>setpassword(e.target.value)}/>

    <button>Submit</button>
    <br /><br />

    <h1>{firstname} {lastname}</h1>
    <p>{email}</p>
    </form>





    </>
  )
}

export default Form