import { Link, useNavigate, Outlet } from "react-router-dom";
import {useEffect, useState} from 'react';


import Infos from "./Infos/Infos";
import Orders from "./Orders/Orders";

function Profil(){
    const [login, setLogin] = useState(false);

    const navigate = useNavigate();

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
            <>
                <div>
                    <h3>Profil</h3>
                    <div>
                        <ul>
                            <li><Link to="/profil/infos">Mes infos</Link></li>
                            <li><Link to="/profil/orders">Mes commandes</Link></li>
                            <li><Link to="/profil/mycontacts">Mes échanges avec Pyjam'Zz</Link></li>
                            <li><Link to="/profil/wishlist">Ma liste d'envies</Link></li>
                        </ul>
                    </div>
                </div>
                <Outlet/>
            </>
        )
    }else{
        navigate('/login');
    }
}

export default Profil