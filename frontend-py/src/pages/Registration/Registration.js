import './Registration.css';
import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

function Registration(){
    const [sex, setSex] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [agreeTerm, setAgreeTerm] = useState(false);
    const [acceptNewsletter, setAcceptNewsletter] = useState(false);
    
    const navigate = useNavigate();


    const changeAgreeTerm =  ()=>{
       setAgreeTerm(!agreeTerm)
    }
    const changeAcceptNewsletter = ()=>{
        setAcceptNewsletter(!acceptNewsletter)
    }

    

    const register =  async function (event){
        event.preventDefault();
        console.log(sex)
        console.log(lastName)
        console.log(firstName)
        console.log(dateOfBirth)
        console.log(email)
        console.log(password)
        console.log(confirmPassword)

        try{
            if(!agreeTerm){
                return alert("Vous devez accepter la politique de confidentialitées & Cookies et les termes et conditions pour vous inscrire.")
            }else{
                if(password != confirmPassword){
                    return alert('Vos deux mots de passe ne correspondent pas.')
                }else{
                    const requestOptions = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({sex, lastName, firstName, dateOfBirth, email, password, confirmPassword})
                    };
                    const data = await fetch('http://localhost:8000/log/registration', requestOptions);
                    const element = await data.json();
                    navigate('/registration/success')
                }
            }
        }catch(e){
            return alert(e)
        }

    }

    return(
        <div className="registration-container">
            <h2>Inscription</h2>
            <form onSubmit={register}>
                <label>Civilité</label>
                <div className='form-row'>
                        <input type='radio' name="sex" value="men" onChange={event=>setSex(event.target.value)}/>
                        <label htmlFor='sex'>M</label>
                        <input type='radio' name="sex" value="woman" onChange={event=>setSex(event.target.value)}/>
                        <label htmlFor='sex'>Mme</label>
                </div>
                <div className='form-section'>
                    <label htmlFor="lastName"> Nom </label>
                    <input type="text" name="lastName" required onChange={event=>setLastName(event.target.value)}/>
                </div>
                <div className='form-section'>
                    <label htmlFor="firstName"> Prénom </label>
                    <input type="text" name="firstName" required onChange={event=>setFirstName(event.target.value)}/>
                </div>
                <div className='form-section'>
                    <label htmlFor="dateOfBirth"> Date de naissance </label>
                    <input type="date" name="dateOfBirth" required onChange={event=>setDateOfBirth(event.target.value)}/>
                </div>
                <div className='form-section'>
                    <label htmlFor="email"> Email </label>
                    <input type="email" name="email" required onChange={event=>setEmail(event.target.value)} />
                </div>
                <div className='form-section'>
                    <label htmlFor="password"> Mot de passe </label>
                    <input type="password" name="password" required onChange={event=>setPassword(event.target.value)}/>
                </div>
                <div className='form-section'>
                    <label htmlFor="confirmPassword"> Confirmez le mot de passe </label>
                    <input type="password" name="confirmPassword" required onChange={event=>setConfirmPassword(event.target.value)}/>
                </div>
                <div className='row-term'>
                    
                    <p>
                    <input type="checkbox" name="agree-term" checked={agreeTerm}  onChange={changeAgreeTerm}/>
                        J’accepte la politique de confidentialitées & Cookies et 
                        les termes et conditions
                    </p>
                    <p>
                    <input type="checkbox" name="accept-newsletter" checked={acceptNewsletter} onChange={changeAcceptNewsletter}/>
                        S’inscrire à la newsletter pour reçevoir des remises exclusives
                    </p>
                </div>
                <button type='submit' className='button-form'>M'inscrire'</button>
        
            </form>
            <Link to="/login">Me connecter</Link>
        </div>
    )
}

export default Registration;