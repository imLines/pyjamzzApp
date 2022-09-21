import './Success.css';
import {useState, useEffect} from "react";

function SuccessRegistration(){
    return(
        <div className="success-container">
            <h2>Création du compte réussi !</h2>
            <p>Allez vite vérifier dans votre boite mail pour confirmer votre adresse mail.</p>
            <p>Pensez à vérifiez vos spam.</p>
            <br/>
            <p>L'équipe Pyjam'Zz</p>
        </div>
    )
};

function SuccessLogin(){
    const [name, setName] = useState('');


    useEffect(()=>{
        const customer = JSON.parse(localStorage.getItem('customer'));
        setName(customer.firstName)
    }, [])
    
    return(
        <div className='success-container'>
            <h2>Bienvenu {name}</h2>
            <p>Connexion réussie !</p>
        </div>
    )
}

export {SuccessRegistration, SuccessLogin};
