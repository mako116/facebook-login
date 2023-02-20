import React from 'react'
import { Link } from 'react-router-dom'
const Footered = () => {
  return (
    <div className='Footered'>
   
      <span>sign up for  <Link to="/register">facebook</Link></span>
     
      <p>Need help</p>
      <div className='ridge'></div>
    </div>
  )
}

export default Footered
