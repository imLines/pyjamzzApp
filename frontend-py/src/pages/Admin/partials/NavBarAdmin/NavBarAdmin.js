import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import logoPY from '../../../../images/logoPY.png';
import './NavBarAdmin.css'

function NavBarAdmin(){
   

    return(
        <>
            <header>
                <img src={logoPY}/>
                <h2>Admin Workspace</h2>
                    <h3>Pyjam'Zz v1.0</h3>
                    <Link to="/admin/profil" className='nav-item'>Profil Admin</Link>
            </header>
            <nav>
                <Link to='/admin/clientèle' className='nav-item'>Clientèle</Link>
                <Link to='/admin/produits' className='nav-item'>Produits</Link>
                <Link to='/admin/commandes' className='nav-item'>Commandes</Link>
                <Link to='/admin/livraisons' className='nav-item'>Livraison</Link>
            </nav>
        </>
    )
}

export default NavBarAdmin;