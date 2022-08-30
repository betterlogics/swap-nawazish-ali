import React from 'react'
import "./Footer.css"
import { BsTwitter } from 'react-icons/bs'
import { FaTelegramPlane } from 'react-icons/fa'
import {AiFillRedditCircle } from 'react-icons/ai'
import {AiOutlineInstagram } from 'react-icons/ai'
import {AiFillGithub } from 'react-icons/ai'
import {FaDiscord } from 'react-icons/fa'
import {BsMedium } from 'react-icons/bs'
import {TbWorld} from 'react-icons/tb'
import {AiOutlineArrowRight} from 'react-icons/ai'

function Footer() {
  return (
    <div className='Main_footer'>
        <div className="container-fluid fc">
            <div className="row footer_row">
                <div className="col-md-3 p-0">
                    <h6 className='footer_head'>about</h6>
                    <a href="#"  className='foo_con'> <p  > Contant</p></a>
                    <a href="#"  className='text-white as'> <p>Brand</p></a> 
                    <a href="#" className='text-white as'>  <p >Blog</p></a>
                    <a href="#"  className='text-white as'>  <p>Community</p></a>
                    <a href="#"  className='text-white as'>  <p>Litepaper</p></a>
                    <a href="#" className='text-white as'>  <p >—</p></a>
                    <a href="#" className='text-white as'> <p >Online Store</p></a>
                    <div className="row m-0 p-0 justify-content-center align-items-center">
                        <div className="col-md-4 d-flex">
                           <span> <BsTwitter className='footer_icon text-white ms-5'></BsTwitter></span> 
                           <span> <FaTelegramPlane className='footer_icon text-white ms-2'></FaTelegramPlane></span> 
                           <span> <AiFillRedditCircle className='footer_icon text-white ms-2'></AiFillRedditCircle></span> 
                           <span> <AiOutlineInstagram className='footer_icon text-white ms-2'></AiOutlineInstagram></span> 
                           <span> <AiFillGithub className='footer_icon text-white ms-2'></AiFillGithub></span> 
                           <span> <FaDiscord className='footer_icon text-white ms-2'></FaDiscord></span> 
                           <span> <BsMedium className='footer_icon text-white ms-2'></BsMedium></span> 
                            

                        
                        </div>

                    </div>
                </div>
                <div className="col-md-3">
                    <h6 className='footer_head'>help</h6>
                    <a href="#"  className='text-white as'>  <p>Customer Support</p></a>
                    <a href="#" className='text-white as'>   <p >Troubleshooting</p></a>
                    <a href="#" className=' as text-white'>  <p >Guides</p></a> 

                </div>
                <div className="col-md-3">
                    <h6 className='footer_head'>DEVELOPERS</h6>
                    <a href="#"className='text-white as'> <p> Documentation </p></a>
                    <a href="#"className='text-white as'> <p> Bug Bounty </p></a>
                    <a href="#"className='text-white as'> <p> Audits </p></a>
                    <a href="#"className='text-white as'> <p> Careers </p></a>
                    
                </div>
                <div className="col-md-3">
                    <h6 className='text-white'>pancakeswap</h6>
                </div>
                
            </div>
        </div>
      <div className="line"></div>
     
      <div className="container">
        <div className="row mt-4 justify-content-between ">
          <div className="col-lg-3 col-12 xcv">
            <div className="ss">
            <div className="asdf d-flex">
            <svg viewBox="0 0 24 24" color="backgroundAlt" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-8a800401-0 kukNmq"><path d="M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z"></path><path d="M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z"></path><path d="M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z"></path><path d="M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z"></path><path d="M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z"></path><path d="M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"></path><path d="M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z"></path><path d="M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z"></path></svg>
            <svg viewBox="0 0 24 24" color="backgroundAlt" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-8a800401-0 kukNmq"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.1534 13.6089L4.15362 13.61C4.77322 16.8113 7.42207 19.3677 10.647 19.8853L10.6502 19.8858C13.0412 20.2736 15.2625 19.6103 16.9422 18.2833C11.3549 16.2878 7.9748 10.3524 9.26266 4.48816C5.69846 5.77194 3.35817 9.51245 4.1534 13.6089ZM10.0083 2.21054C4.76622 3.2533 1.09895 8.36947 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C13.8512 22.4311 17.0955 21.1608 19.2662 18.8587C19.2765 18.8478 19.2866 18.837 19.2968 18.8261C19.4385 18.6745 19.5757 18.5184 19.7079 18.3581C19.7105 18.355 19.713 18.3519 19.7156 18.3487C19.8853 18.1426 20.0469 17.9295 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C19.5114 16.8796 19.1602 16.8209 18.817 16.7452C18.7964 16.7406 18.7758 16.736 18.7552 16.7313C18.6676 16.7114 18.5804 16.6903 18.4938 16.6681C18.4919 16.6676 18.4901 16.6672 18.4882 16.6667C13.0234 15.2647 9.72516 9.48006 11.4542 4.03417C11.4549 4.03214 11.4555 4.03012 11.4562 4.0281C11.4875 3.92954 11.5205 3.83109 11.5552 3.73278C11.5565 3.72911 11.5578 3.72543 11.5591 3.72175C11.6768 3.38921 11.8136 3.05829 11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C11.1954 2.04379 10.924 2.06848 10.6561 2.10368C10.6517 2.10427 10.6472 2.10486 10.6428 2.10545C10.4413 2.13221 10.2418 2.16492 10.0446 2.2034C10.0325 2.20576 10.0204 2.20814 10.0083 2.21054Z"></path></svg>
          
            </div>
            </div>
            
          </div>

          <div className="col-lg-3">
          <div className="iooo ms-5"><span> <TbWorld className='text-white'></TbWorld>
            <span className='text-white ms-2 fs-6'>Em</span></span></div>
          </div>
          <div className="col-lg-3">
            <svg viewBox="0 0 96 96" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-8a800401-0 igZcUN"><circle cx="48" cy="48" r="48" fill="url(#paint0_linear_10493)"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M47.858 79.875c-9.342-.007-16.866-2.249-22.124-6.275-5.321-4.075-8.144-9.857-8.144-16.4 0-6.304 2.817-10.85 6.004-13.923 2.497-2.408 5.253-3.95 7.172-4.838a99.818 99.818 0 01-1.46-4.876c-.648-2.41-1.284-5.237-1.284-7.309 0-2.452.535-4.915 1.977-6.829 1.523-2.021 3.816-3.104 6.574-3.104 2.156 0 3.986.8 5.42 2.179 1.369 1.318 2.28 3.07 2.91 4.895 1.106 3.208 1.537 7.238 1.657 11.26h2.643c.12-4.022.551-8.052 1.657-11.26.63-1.825 1.541-3.577 2.91-4.895 1.434-1.38 3.264-2.18 5.42-2.18 2.758 0 5.051 1.084 6.574 3.105 1.442 1.914 1.977 4.377 1.977 6.83 0 2.071-.636 4.898-1.284 7.308a99.707 99.707 0 01-1.46 4.876c1.919.888 4.675 2.43 7.172 4.838 3.187 3.073 6.004 7.619 6.004 13.923 0 6.543-2.823 12.325-8.144 16.4-5.257 4.026-12.782 6.268-22.124 6.275h-.047z" fill="#633001"></path><path d="M36.573 18.653c-4.04 0-5.9 3.045-5.9 7.256 0 3.347 2.16 10.05 3.048 12.66.199.587-.114 1.23-.686 1.458-3.238 1.29-12.794 6.012-12.794 16.828 0 11.393 9.711 19.983 27.619 19.997h.043c17.908-.014 27.619-8.604 27.619-19.997 0-10.816-9.556-15.539-12.794-16.828a1.176 1.176 0 01-.686-1.458c.887-2.61 3.048-9.313 3.048-12.66 0-4.211-1.86-7.256-5.9-7.256-5.816 0-7.266 8.322-7.37 17.254a1.084 1.084 0 01-1.074 1.08h-5.73c-.59 0-1.067-.484-1.074-1.08-.103-8.932-1.553-17.254-7.369-17.254z" fill="#D1884F"></path><path d="M47.903 73.202c-13.158 0-27.64-7.115-27.662-16.326v.043c0 11.403 9.727 19.997 27.662 19.997s27.661-8.594 27.661-19.997v-.043c-.022 9.21-14.503 16.326-27.661 16.326z" fill="#FEDC90"></path><path d="M40.592 54.047c0 3.11-1.455 4.73-3.25 4.73-1.794 0-3.249-1.62-3.249-4.73 0-3.11 1.455-4.73 3.25-4.73 1.794 0 3.249 1.62 3.249 4.73zM61.712 54.047c0 3.11-1.455 4.73-3.25 4.73-1.794 0-3.248-1.62-3.248-4.73 0-3.11 1.454-4.73 3.249-4.73 1.794 0 3.25 1.62 3.25 4.73z" fill="#633001"></path><defs><linearGradient id="paint0_linear_10493" x1="48" y1="0" x2="48" y2="96" gradientUnits="userSpaceOnUse"><stop stop-color="#53DEE9"></stop><stop offset="1" stop-color="#1FC7D4"></stop></linearGradient></defs></svg>  
            <span className='text-white ms-2'>$4.111</span>
          </div>
          <div className="col-lg-3">
            <button className='ffff'>BUY CAKE <AiOutlineArrowRight className='text-white'></AiOutlineArrowRight></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
