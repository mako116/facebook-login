import React from 'react'
import Footered from './footer'
 import Input from './input'
import Logo from './logo'
import './main.css'
const Board = () => {
  return (
    <div className='board'>
      <Logo/>
      <Input/>
      <Footered/>
    </div>
  )
}

export default Board
