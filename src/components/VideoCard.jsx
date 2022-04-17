import React from 'react'
import '../styles/VideoCard.css'
import { playButton } from '../icons/icons'

const VideoCard = ({name, image}) => {
  return (
    <div className='VideoCard' style={{backgroundImage:`url(${image})`}}>
        <a href="#">{playButton}</a>
        <p>{name}</p>
    </div>
  )
}

export default VideoCard