import React from 'react'



const Star = ({isFilled, onClick}) => {
  return (
    <div className="card--info">
      <img  className="card--favorite" src={isFilled} onClick={onClick} alt="" />
      
    </div>
  )
}

export default Star