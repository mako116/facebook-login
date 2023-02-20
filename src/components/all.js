import React from 'react'
import Facebooklogo from './facebook_logo'
import Footer from './footer'
import Login from './Login'
import './index.css'
 const All = () => {
  return (
    <div className='all'>
      <Login/>
      <Facebooklogo/>
      <Footer/>
    </div>
  )
}

export default All
