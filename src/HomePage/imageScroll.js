import React from 'react'
import ImageSlider from './ImageSlider'
 
const ImageScroll = () => {
  const slides=[
    {url: 'http://localhost:3000/unsplash_763-mBawsfg',title: 'beach'},
    {url: 'http://localhost:3000/unsplash_3402kvtHhOo',title: 'boat'},
    {url: 'http://localhost:3000/unsplash_sh3LSNbyj7k',title: 'forest'},
    {url: 'http://localhost:3000/imaged',title: 'city'},
    {url: 'http://localhost:3000/unsplash_763-mBawsfg',title: 'italy'},
    
  ]
  
  const ContainerStyles = {
      width: '500px',
      height: '280px',
      margin: '0 auto',
     }
   
 
    return (
      <div>
        <div style={ContainerStyles}>
        <ImageSlider   slides={slides}/>
        </div>
      </div>
  )
}

export default ImageScroll
