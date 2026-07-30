import React from 'react'
import { useFormik } from 'formik'
import { useState } from 'react'
const Ai = () => {
    const [man,setMan]=useState()
    const mu = useFormik({
        initialValues : ({
            first : "",
            last : "",
        }),
        onSubmit : (values)=>{
            // alert(values)
            setMan(values)
              alert(man)  
            
        },
        validate : (values)=>{
            let errors = {}
        if(values.first === ""){
            errors.first="u dey go nah"
        }
    }})
  return (
    <>
    <h1>form</h1>
        <form onSubmit={mu.handleSubmit}>
                   <input type="text" 
            placeholder='firstname'
            onChange={mu.handleChange}
            onBlur={mu.handleBlur}
            name='first' />
<button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default Ai
