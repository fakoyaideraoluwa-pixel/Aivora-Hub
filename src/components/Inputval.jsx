import React,  {useState}  from 'react'

const Inputval = () => {

    const[name, setName]= useState('Odun')
    const[newname, setnewName]= useState('')


    const changeName =()=>{
        setName(newname)
    }
  return (
    <>
    <div>
        <h1>Welcome {name}</h1>
        <input type="text"
        placeholder='Enter your name'
         onChange={(e)=>setnewName(e.target.value)}/>
         <button onClick={changeName}>Change Name</button>
    </div>
    </>
  )
}

export default Inputval