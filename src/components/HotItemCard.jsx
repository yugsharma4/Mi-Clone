import React from 'react'
import '../styles/HotItemCard.css';

const HotItemCard = ({name,price,image,index}) => {
  return (
    
    <div className='HotItemCard'>
        <img src={image} alt="img" />
        <p>{name}</p>
        <span>{price}</span>
    </div>
  )
}

export default HotItemCard