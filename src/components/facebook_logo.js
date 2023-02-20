import React from 'react'
import facebook from './Vector.png'
import { Link } from 'react-router-dom'
// import './index.css'
const Facebooklogo = () => {
    return (
    <div className='facebook'>
    <Link to="/login">
      <img src={facebook} alt=''/>
      </Link>
      <div className='textsdot'>
        <h3>facebook</h3>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default Facebooklogo
