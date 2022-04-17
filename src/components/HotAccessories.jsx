import React from 'react';
import HotItemCard from './HotItemCard.jsx'
import '../styles/HotAccessories.css'

const HotAccessories = ({music, musicCover, smartDevice, smartDeviceCover,home, homeCover, lifestyle,lifestyleCover, mobileAccessories, mobileAccessoriesCover}) => {
    // console.log(music, musicCover)
  return (
    <div className='HotAccessories'>
        <div>
            <img src={musicCover || smartDeviceCover  || homeCover || lifestyleCover || mobileAccessoriesCover} alt="Cover" />
        </div>

        {/* ----2nd  */}
        <div>
            {music && music.map((item, index) => {
                return <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
            })}

            {home && home.map((item, index) => {
                return <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
            })}

            {lifestyle && lifestyle.map((item, index) => {
                return <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
            })}

             {mobileAccessories && mobileAccessories.map((item, index) => {
                return <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
            })}

            {smartDevice && smartDevice.map((item, index) => {
                return <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
            })}

            <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />
        </div>
    </div>
  )
}

export default HotAccessories