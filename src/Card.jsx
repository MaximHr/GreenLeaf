import React from 'react'

const Card = ({img, title, text, anim, delay}) => {
  return (
    <div className='card' style={delay ? {animation: anim + ' ' + delay} : {animation: anim}}>
      {img}
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default Card;