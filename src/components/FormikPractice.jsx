import React from 'react'
import { Field, useFormik } from 'formik'
import * as yup from 'yup'
// import { useState } from 'react'

const FormikPractice = () => {
// const [val, setvalu]=useState([])
    let formik = useFormik(
      {
        initialValues:({
            firstname:"",
            lastname:"",
            email:"",
            password:""
        }),


        onSubmit : (values)=>{
                 
           
          // val.map(( user=>(
          //     <div>
          //       <p>{user.firstname}</p>
          //       <p>{user.lastname}</p>
          //       <p>{user.password}</p>
          //       <p>{user.email}</p>
               
          //     </div>
          //   )))
          
            console.log(values);
            // setvalu(values)
            // console.log(formik);
            
            
        },
        //    validate : (values) =>{
        //   let errors ={}
        //   if (values.firstname=='') {
        //     errors.firstname="This Field cannot be empty"
        //   } else if(values.firstname.length<2){
        //     errors.firstname="Characters must be more than 2"
        //   } else if(values.firstname.length >15){
        //     errors.firstname="Characters must not be more than 15"
        //   }

        //     if (values.lastname=='') {
        //     errors.lastname="This Field cannot be empty"
        //   } else if(values.lastname.length<2){
        //     errors.lastname="Characters must be more than 2"
        //   } else if(values.lastname.length >15){
        //     errors.lastname="Characters must not be more than 15"
        //   }

        //     if (values.email=='') {
        //     errors.email="This Field cannot be empty"
        //   } else if(values.email.length<2){
        //     errors.email="Email is not valid"
        //   } else if(!values.email.includes('@')){
        //     errors.email="Email must include '@'" 
        //   } else if(values.email.length >24){
        //     errors.email="Characters must not be more than 24"
        //   }

          
        //     if (values.password=='') {
        //     errors.password="This Field cannot be empty"
        //   } else if(values.password.length<5){
        //     errors.password="Characters must be more than 5"
        //   } else if(values.lastname.length >15){
        //     errors.password="Characters must not be more than 15"
        //   }

        //   return errors;
        // }

        validationSchema:yup.object({
          firstname:yup.string().required('this input is required')
          .min(3,'characters must at least be upto 3')
          .max(15,'chracters must not be longer than 15')
        })

    
    })

    
      
  return (
    <div>
        <h1>Formik</h1>

     <formik>
         <form onSubmit={formik.handleSubmit}>

            <Field
             type="text" 
            placeholder='firstname'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name='firstname' />
            {/* <p>{formik.errors.firstname}</p> */}
            {formik.touched.firstname&&formik.errors.firstname?(<small>{formik.errors.firstname}</small>):''}

              <Field
               type="text" 
            placeholder='lastname'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name='lastname' />
            <p>{formik.errors.lastname}</p> <br /> 

              <Field
               type="email" 
            placeholder='email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name='email' /> 
            <p>{formik.errors.email}</p>
            <br /> 

              <Field
               type="password" 
            placeholder='password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name='password' />
            <p>{formik.errors.password}</p>

            <button type='submit'>Submit</button>
            
    
         
        </form>
     </formik>

            
    </div>
  )
}

export default FormikPractice