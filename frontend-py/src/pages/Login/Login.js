import './Login.css';
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const login = async function(event){
        event.preventDefault()
        try{
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({email: email, password: password})
            };
            const data = await fetch('http://localhost:8000/log/login', requestOptions);
            const element = await data.json();
            localStorage.setItem('token', element.token);
            localStorage.setItem('customer', JSON.stringify(element.customer));
            navigate('/login/success');
            window.location.reload()
        }catch(e){
            console.log(e)
        }
    }

    return(
        <>
            <div className='login-container'>
                <h2>Connexion</h2>
                <form  onSubmit={login}>
                    <div className='form-section'>
                        <label htmlFor="email"> Email </label>
                        <input type="text" name="email" required onChange={event=>setEmail(event.target.value)}/>
                    </div>
                    <div className='form-section'>
                        <label htmlFor="password"> Mot de passe </label>
                        <input type="password" name="password" required onChange={event=>setPassword(event.target.value)}/>
                        <p>Mot de passe oublié ?</p>
                    </div>
                    <button type='submit' className='button-form'>Me connecter</button>
                </form>
                <Link to="/registration">M'inscrire</Link>
                
            </div>
        </>
    )
};

export default Login;