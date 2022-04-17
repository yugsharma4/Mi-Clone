import React from 'react'
import '../styles/ProductReviewsCard.css'

const ProductReviewsCard = ({name,price,image,review,index}) => {
  return (
    <div className='ProductReviewsCard'>
        <img src={image} alt="review card" />
        <h5>{review}</h5>
        <span>{name}</span>
        <b>{price}</b>
    </div>
  )
}

export default ProductReviewsCard