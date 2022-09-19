import './Banner.css';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';


function Banner(){
    const [hamburger, setHamburger] = useState('hamburger hamburger-close');
    const [navLink, setNavLink] = useState('items-container close')


    function changeNav(){
        if(hamburger == 'hamburger hamburger-close' && navLink == "items-container close"){
            setNavLink('items-container open')
            setHamburger('hamburger hamburger-open')
        }else{
            setNavLink('items-container close')
            setHamburger('hamburger hamburger-close')
        }
    }


    return(
        <div className="banner" >
            <button className={hamburger} onClick={changeNav}></button>
            <ul className={navLink}>
                <li><Link to="/about">A propos</Link></li>
                <li><Link >Nouveauté</Link></li>
                <li>Nos produits</li>
                <li>Aide</li>
            </ul>
        </div>
    )
};
export default Banner;