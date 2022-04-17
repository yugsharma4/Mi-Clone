import React from 'react'
import '../styles/Videos.css'
import VideoCard from './VideoCard.jsx'

const Videos = ({videos}) => {
  return (
    <div className='Videos'>
        {
            videos.map((item,index) => {
                return (
                    <VideoCard key={item.image} name={item.name} image={item.image} index={index}/>
                );
            })
        }
    </div>
  )
}

export default Videos