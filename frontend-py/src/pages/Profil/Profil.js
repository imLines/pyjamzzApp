import { Link, useNavigate, Outlet } from "react-router-dom";
import {useEffect, useState} from 'react';



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
                            <li><Link to="/client/profil/infos">Mes infos</Link></li>
                            <li><Link to="/client/profil/orders">Mes commandes</Link></li>
                            <li><Link to="/client/profil/messages">Mes échanges avec Pyjam'Zz</Link></li>
                            <li><Link to="/client/profil/wishlist">Ma liste d'envies</Link></li>
                        </ul>
                    </div>
                </div>
                <Outlet/>
            </>
        )
    }else{
        navigate('/client/login');
    }
}

export default Profil