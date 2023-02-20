import React from 'react';
import All from '../components/all';
import Facebooklogo from '../components/facebook_logo';
import Footer from '../components/footer';
import Login from '../components/Login';
import './index.css'


const Home = () => {
    return (
        <div className='box'>
      {/* <Login/>
      <Facebooklogo/>
      <Footer/> */}
      <All/>
    </div>
    );
};

export default Home;