import React from 'react'
import image from '../../../facebookapp/src/components/Vector.png'
const HeadLogo = () => {
  return (
    <div className='Headlogo'>
      <img src={image} alt=''/>
      <div className='dates'> 
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

export default HeadLogo
