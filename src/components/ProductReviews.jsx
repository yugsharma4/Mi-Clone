import React from 'react'
import ProductReviewCard from './ProductReviewsCard.jsx'
import '../styles/ProductReviews.css'

const ProductReviews = ({ProductReviews}) => {
  return (
    <div className='ProductReviews'>
        {
            ProductReviews.map((item, index) => {
                return (
                    <ProductReviewCard key={item.image} price={item.price} name={item.name} image={item.image} review={item.review} index={index} />
                );
            })
        }
    </div>
  )
}

export default ProductReviews