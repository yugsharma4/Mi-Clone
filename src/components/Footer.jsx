import React from 'react'
import {youtubeIcon, twitterIcon, instagramIcon, facebookIcon, repeatIcon, shieldIcon, mapIcon} from '../icons/icons';
import '../styles/Footer.css'
import '../styles/PreFooter.css'


const Footer = ({footer}) => {
  return (
      <>
        <div className='PreFooter'>
            <div>
                {repeatIcon}
                <p><b>Hassle-free replacement</b> <br /> 10-day easy replacement policy on mi.com</p>
            </div>

            <div>
                {shieldIcon}
                <p><b>100% secure payments</b> <br /> We support Cards, Wallets, EMI and COD</p>
            </div>

            <div>
                {mapIcon}
                <p><b>Vast service network</b> <br /> 1000 Mi service-centers across 600 cities</p>
            </div>
        </div>
        <div className="PreFooter2">
             <div> <p>LET'S STAY IN TOUCH</p><span>Get updates on sales specials and more</span></div>

             <div>
                 <div>
                     <input type="email" name="email" placeholder="Enter Email Address" />
                     <button>›</button>
                 </div>
                 <span>Thanks. You're on our email list for special offers.</span>
             </div>

             <div>
                    <p>FOLLOW MI</p>
                    <span>We want to hear from you!</span>
             </div>

             <div>
                {facebookIcon} {youtubeIcon} {instagramIcon} {twitterIcon} 
             </div>
        </div>
    {/* Footer part */}
        <div className='Footer'>
            <div>
                <p>SUPPORT</p>

                {
                    footer.support.map((item, index) => {
                        return (
                            <a href={item.url} key={item.url}> {item.name}</a>
                        );
                    })
                }
            </div>

            <div>
                 <p> SHOP AND LEARN</p>
                  {footer.shopAndLearn.map((item,index)=>(
                         <a key={item.url} href={item.url}>{item.name} </a>

                      ))}

                  </div>
                  <div>
                   <p> RETAIL STORE</p>
                    {footer.retailStore.map((item,index)=>(
                         <a key={item.url} href={item.url}>{item.name}</a>

                      ))}
                  </div>

                  <div>
                           <p>  ABOUT</p>
                             {footer.aboutUS.map((item,index)=>(
                         <a key={item.url} href={item.url}>{item.name}</a>

                      ))}
                  </div>

                  <div>
                 <p> CONTACT US</p>
                  {footer.contactUs.map((item,index)=>(
                         <a key={item.url} href={item.url}>{item.name}</a>

                      ))}
                  </div>

                  <div>
                      <div>Chat with our Virtual AI Bot(24/7 Live Agent Support)</div><button>CHAT NOW</button>
                  </div>
        </div>
        <div className="footerBorder">
       <div> Copyright © 2010 - 2021 Xiaomi. All Rights Reserved</div>
        </div>
    </>
  )
}

export default Footer