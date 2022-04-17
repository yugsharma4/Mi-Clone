import React from 'react'
import '../styles/NavCard.css'

const NavCard = ({name, price, image}) => {
  return (
    <div className='NavCard'>
        <img src={image} alt="nav card" />
        <p>{name}</p>
        <span>{price}</span>
    </div>
  )
}

export default NavCard