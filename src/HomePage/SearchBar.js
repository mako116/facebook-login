import React from 'react'
import searchLogo from './small.png'
import photos from './photo.png'
const SearchBar = () => {
  return (
    <div>
      <div className="SearchBar">
        <img src={searchLogo} alt="" />
        <div class="topbar_search">
              <i class="fa fa-search"></i>
          <input type="text" placeholder="Search" />
         </div>
         <div className="photos">
            <img src={photos} alt="" />
         </div>
      </div>
    </div>
  )
}

export default SearchBar
