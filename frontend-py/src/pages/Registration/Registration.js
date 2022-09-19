import './Registration.css';

function Registration(){
    return(
        <div className="registration-container">
            <h2>Inscription</h2>
            <form>
                <label>Civilité</label>
                <div className='form-row'>
                        <input type='radio' name="sex" value="men"/>
                        <label htmlFor='sex'>M</label>
                        <input type='radio' name="sex" value="woman"/>
                        <label htmlFor='sex'>Mme</label>
                </div>
                <div className='form-section'>
                    <label htmlFor="lastName"> Nom </label>
                    <input type="text" name="lastName" required />
                </div>
                <div className='form-section'>
                    <label htmlFor="firstName"> Prénom </label>
                    <input type="text" name="firstName" required />
                </div>
                <div className='form-section'>
                    <label htmlFor="dateOfBirth"> Date de naissance </label>
                    <input type="date" name="dateOfBirth" required />
                </div>
                <div className='form-section'>
                    <label htmlFor="email"> Email </label>
                    <input type="email" name="email" required />
                </div>
                <div className='form-section'>
                    <label htmlFor="password"> Mot de passe </label>
                    <input type="password" name="password" required />
                </div>
                <div className='form-section'>
                    <label htmlFor="confirmPassword"> Confirmez le mot de passe </label>
                    <input type="password" name="confirmPassword" required />
                </div>
                <input type="checkbox" name="accept-term"/>
                <div className='row-term'>
                    <p>
                        J’accepte la politique de confidentialitées & Cookies et 
                        les termes et conditions
                    </p>
                </div>
        
            </form>
        </div>
    )
}

export default Registration;