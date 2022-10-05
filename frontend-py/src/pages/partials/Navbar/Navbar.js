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

    const refresh = ()=>{
        window.reload()
    }

    if(login){
        return(
            <div className="navbar">
                <Link to='/' className="logo"></Link>
                <input type="text" className="inputNavbar"/>
                <Link to="/client/shoppingcard" className="icon-shopping-card" onClick={refresh}></Link>
                <Link to="/client/profil" className="icon-account"></Link>
            </div>
            
        ) 
    }else{
        return(
            <div className="navbar">
                <Link to='/' className="logo"></Link>
                <input type="text" className="inputNavbar"/>
                <Link to="/client/shoppingcard" className="icon-shopping-card"></Link>
                <Link to="/client/login" className="icon-account"></Link>
            </div>
            
        )
    }
}

export default Navbar;