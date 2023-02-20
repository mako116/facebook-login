import React from 'react'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import './HomePage.css'
import ImageScroll from './imageScroll'
const Hompage = () => {
  return (
    <div className='HomeWork'>
      <Navbar/>
      <SearchBar/>
      <ImageScroll/>
    </div>
  )
}

export default Hompage
