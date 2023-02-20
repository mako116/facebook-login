import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from '../pages/Home';
import HomeRun from '../pages/HomeRun';
import Login from '../pages/Login';
import Register from '../pages/Register';

const MyRoutes = () => {
    return (
        <Router>
        <Routes>
            <Route path='/' exact element={<Home />}></Route>
            <Route path='/login' exact element={<Login />}></Route>
            <Route path='/register' exact element={<Register/>}></Route>
            <Route path='/homeRun' exact element={<HomeRun/>}></Route>
        </Routes>
            
        </Router>
    );
};

export default MyRoutes;