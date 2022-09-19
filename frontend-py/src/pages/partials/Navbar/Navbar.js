import {Link, useNavigate} from "react-router-dom";
import './Navbar.css'




function Navbar(){

    return(
     
        
        <div className="navbar">
            <Link to='/' className="logo"></Link>
            <input type="text" className="inputNavbar"/>
            <Link to="/shoppingcard" className="icon-shopping-card"></Link>
            <Link to="/login" className="icon-account"></Link>
        </div>
        
    )
}

export default Navbar;