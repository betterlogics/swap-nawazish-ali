import React from 'react'
import "./Sub.css"
import {Link} from 'react-router-dom'

function Sub() {
  return (
    <div className='Sub_mainbg'>
    <div className="sub_nav ">
        <ul className='d-flex justify-content-center pt-3 pb-3 sub_ul'>
            <li><a href=""> <Link to = 'swap'> Swap</Link></a></li>
            <li><a href="">Limit</a></li>
            <li><a > <Link to ='liq'> Liquidity </Link></a></li>
        </ul>
    </div>
      
    </div>
  )
}

export default Sub
