import {Routes, Route, Outlet} from 'react-router-dom';


import Navbar from './pages/partials/Navbar/Navbar';
import Banner from './pages/partials/Banner/Banner';
import React from 'react';

import Footer from './pages/partials/Footer/Footer';


function Customer(){

    return ( 
        <div className='app'>

            <Navbar/>
            <Banner/>
            <Outlet/>
          {/* <Footer/> */}
        </div>
      );
}

export default Customer;