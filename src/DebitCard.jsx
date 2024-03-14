import React from 'react'

const DebitCard = ({textColor, color1, color2, name, logo, text, price, priceGoal, priceTime}) => {
  return (
    <div className='debit-card' style={{ background: `linear-gradient(45deg, ${color1}, ${color2})`}}>
      <div className="upper-part">
        <div>
          <p style={{ color: textColor}} className='name'>{name}</p>
          <p style={{ color: textColor}} className='text'>{text}</p>
        </div>
        <img src={logo} alt={`${name} logo`} />
      </div>
      <div className="bottom-part">
        <div className='price'>
          <p style={{ color: textColor}}>${price}</p>
          <div>
            <p style={{ color: textColor}}>${priceGoal}</p>
            <p style={{ color: textColor}}>{priceTime}</p>
          </div>
        </div>
        <div className="bar">
        <div className="line" style={{backgroundColor: color1, opacity:0.5}}>
        </div>
        <div className="progress" style={{width: (price/priceGoal) * 100 + '%'}}></div>
        </div>
      </div>
    </div>
  )
}

export default DebitCard;