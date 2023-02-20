import React from 'react'
import image from '../../../facebookapp/src/components/Vector.png'
// import './main.css'
const Logo = () => {
  return (
    <div className='logo'>
      <img src={image} alt=''/>
      <div className='datad'> 
        <select name='language' id='language'>
          <option value="">- Change</option>
          <option value="English"> English</option>
          <option value="igbo">igbo</option>
        </select>
        <label>change</label>
      </div>
    </div>
  )
}

export default Logo
