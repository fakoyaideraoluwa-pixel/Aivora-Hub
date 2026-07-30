import React from 'react'

const CardChild = ({bgColor, color, Cardnumber, CardDetails, CardAction, anyfunction} ) => {
  return (
    <div className={bgColor}>
      
        <h1>{Cardnumber}</h1>
        <h2>{CardDetails}</h2>
        <button className={color} onClick={anyfunction}>{CardAction}</button>
    </div>
  )
}

export default CardChild