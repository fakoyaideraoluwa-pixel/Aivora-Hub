import React, { useState } from 'react'
import CardChild from './CardChild'

const Cardparent = () => {
  const [number,setnumber] =useState(0);
const [sad,setSad]= useState()
  const show=()=>{
    setnumber(sad)
    
  }
  return (
    <div>
            <p className={"bg-white card m-2 p-3 "}>{number}</p>
            <input type="number" onChange={(e)=>setSad(e.target.valueAsNumber)}/>
<button onClick={show}>set</button>
        <div className={'d-flex col'}>
         
            <CardChild 
            Cardnumber={' card-1'}
            CardDetails={'This is card one'}
            CardAction={'Increase'}
            bgColor={"bg-warning card m-5 p-3 "}
            color={'btn btn-outline-info'}
            anyfunction={()=>setnumber(number+1)}            
              />

                <CardChild 
            Cardnumber={' card-2'}
            CardDetails={'This is card two'}
            CardAction={'Decrease'}
            bgColor={"bg-info card m-5 p-3"}
             color={'btn btn-outline-primary'}
             anyfunction={()=>setnumber(number-1)}             
              />

            <CardChild 
            
            Cardnumber={'Card-3'}
            CardDetails={'This is card three'}
            CardAction={'Reset'}
            bgColor={"bg-danger card m-5 p-3"}
            color={'btn btn-outline-secondary'}
            anyfunction={()=>setnumber(0)}            
              />
        </div>
    </div>
  )
}

export default Cardparent