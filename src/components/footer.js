import React from 'react'
import { Link } from 'react-router-dom'
// import './index.css' 
const Footer = () => {
  return (
    <div className='footer'>
      <h3>FACEBOOK</h3>
      <Link><span><i className="fa fa-instagram"></i></span></Link>
      <Link><span><i className="fa fa-telegram"></i></span></Link>
      <Link><span><i className="fa fa-facebook"></i></span></Link>
      <Link><span><i className="fa fa-whatsapp"></i></span></Link>
      <Link><div className='divs'></div></Link>
    </div>
  )
}

export default Footer
