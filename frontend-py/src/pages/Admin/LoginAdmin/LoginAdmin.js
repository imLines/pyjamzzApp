import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './LoginAdmin.css'

function LoginAdmin(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate();
    
    const login = async (event)=>{
        event.preventDefault()
        event.stopPropagation()
        try{
            setError(null)
            setErrorMessage('')
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({email: email, password: password})
            };
            const data =  await fetch('/admin/login', requestOptions)
            
            const informations = await data.json()
            if(data.status == 400){
                setError('error')
                setErrorMessage(informations.message)
                return
            }
            localStorage.setItem('token', informations.token);
            localStorage.setItem('admin', informations.admin);
            navigate('/admin/manager/home')
            
        }catch(e){
            console.log("Erreur",e)
        }
    }

    const resetError = function (e){
        setErrorMessage('')
        setError(null)
        return e;
    }

    return(
        <>
            <section>
                <h2>Merci de vous authentifier pour continuer</h2>
                <form onSubmit={login}>
                    <label htmlFor="email">Email</label>
                    <input type='email' name="email" className={`${error}`} onChange={event=>setEmail(resetError(event.target.value))}/>
                    <label htmlFor="password">Mot de passe</label>
                    <input type='password' name='password' className={`${error}`} onChange={event=>setPassword(resetError(event.target.value))}/>
                    <button type="submit">M'identifier</button>
                    <p>{errorMessage}</p>
                </form>
            </section>
        </>
    )
};

export default LoginAdmin;