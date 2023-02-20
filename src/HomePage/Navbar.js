import React from 'react'
 const Navbar = () => {
  return (
    <div>
      <div className='NavbarLogo'>
      <p>facebook</p>
      <div className="double">
       <i className='fa fa-search'></i>
       <i class="fa fa-facebook-messenger" aria-hidden="true"></i>
       </div>
            </div>
      <div className='HomeBar'>
      <i className='fa fa-home'></i>
      <i className="fa fa-caret-right"></i>      
      <i className="fa fa-users"></i>
      <i className="fa fa-user-circle-o"></i>
      <i className="fa fa-bell"></i>
      <i class="fa fa-align-justify"></i>
      </div>
    </div>
  )
}

export default Navbar
