import {Link, useNavigate} from "react-router-dom";
import './Navbar.css'
import {useEffect, useState} from 'react';




function Navbar(){
    const [login, setLogin] = useState(false);

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token){
            setLogin(true)
        }else{
            setLogin(false)
        }
    }, [login])

    if(login){
        return(
            <div className="navbar">
                <Link to='/' className="logo"></Link>
                <input type="text" className="inputNavbar"/>
                <Link to="/shoppingcard" className="icon-shopping-card"></Link>
                <Link to="/profil" className="icon-account"></Link>
            </div>
            
        ) 
    }else{
        return(
            <div className="navbar">
                <Link to='/' className="logo"></Link>
                <input type="text" className="inputNavbar"/>
                <Link to="/shoppingcard" className="icon-shopping-card"></Link>
                <Link to="/login" className="icon-account"></Link>
            </div>
            
        )
    }
}

export default Navbar;