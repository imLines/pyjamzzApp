import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function LoginAdmin(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    
    const login = async (event)=>{
        event.preventDefault()
        try{
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({email: email, password: password})
            };
            const data =  await fetch('http://localhost:8000/admin/login', requestOptions)
            
            const informations = await data.json()
            console.log(informations)
            localStorage.setItem('token', informations.token);
            localStorage.setItem('admin', informations.admin);
            navigate('/admin/manager/home')
            
        }catch(e){
            console.log("Erreur",e)
        }
    }

    return(
        <>
            <section>
                <h2>Merci de vous authentifier pour continuer</h2>
                <form onSubmit={login}>
                    <label htmlFor="email">Email</label>
                    <input type='email' name="email" onChange={event=>setEmail(event.target.value)}/>
                    <label htmlFor="password">Mot de passe</label>
                    <input type='password' name='password' onChange={event=>setPassword(event.target.value)}/>
                    <button type="submit">M'identifier</button>
                </form>
            </section>
        </>
    )
};

export default LoginAdmin;