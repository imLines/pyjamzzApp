import {Routes, Route, Outlet} from 'react-router-dom';


import NavbarAdmin from './pages/Admin/partials/NavBarAdmin/NavBarAdmin';
import Banner from './pages/partials/Banner/Banner';
import React from 'react';



function Admin(){

    return ( 
        <div className='app'>

            <NavbarAdmin/>
            <Outlet/>
        </div>
      );
}

export default Admin;