import React, { useState } from 'react'

const Ass = () => {

    const [task,setTask]=useState([])
  const[newtask,setnewtask]=useState('')



  const AddTask =()=>{

        if(newtask!==' '){
        {setnewtask(task=>[...task])}
       
    }

     setTask(newtask)
  }

  return (
    <>
    
    <input type="text" 
    placeholder='add todo'
    value={task}
  onChange={(e)=>setTask(e.target.value)}/>

   <button onClick={AddTask}>Add</button>

   
           <ul>
        <li>{task}</li>
    </ul>
    
  
    
 

    </>
  )
}

export default Ass