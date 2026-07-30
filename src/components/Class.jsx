import { useState } from 'react'


const Class = () => {


  const [user,setUser] = useState([

    {
         sn:'user-1',
         name:'Mr.Ola',
         age:25,
        class:'Teacher'
    },
        {
       sn:'user-2',
       name:'Aisha',
        age:12,
        class:'React'
    },
       {
        sn:'user-3',
       name:'Lukmon',
        age:16,
        class:'React'
    },
       {
        sn:'user-4',
       name:'Muhammed',
        age:17,
        class:'React'
    },
    {
        sn:'user-5',
       name:'Mubarak',
        age:22,
        class:'React'
    }

    ]
)
const [loading,setLoading]=useState(true)
 function load() {
  setLoading(false)
 }
  return (
    <>

    <button onClick={load}>click here</button>
      
      {
        loading?(
          <>
          <p>loading...</p>
          
        
          
          </>
        ):(
        <>  
        
 <table cellPadding={'5px'} cellSpacing={'5px'} border={'2px'}>
            <tr>
              <th>Users</th>
                
              <th>Names</th>
           
              <th>Age</th>
              
                <th>Class</th>
               </tr>
              

                {user.map((use,us)=>(
      <>
       
       <tr>
        <td>{use.sn}</td>
        <td>{use.name}</td>
        <td>{use.age}</td>
        <td>{use.class}</td>

       </tr>
          
      </>

    

    ))}
          </table>
          </>
        )
      }
        



    </>

  )}

export default Class