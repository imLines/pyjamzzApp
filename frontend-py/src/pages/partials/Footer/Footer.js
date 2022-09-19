import './Footer.css'

function Footer(){
    return(
        <div className="footer">
            <div className='top-footer'>
                <div className='about-container'>
                    <h2>A propos</h2>
                    <ul>
                        <li>Mentions légales</li>
                        <li>Conditions générales</li>
                        <li>Livraison</li>
                    </ul>
                </div>
                <div className='social-link-container'>
                    <h2>Suivez nous !</h2>
                    <div className='social-link-items'>
                        <img src={require('../../../icons/fb-link.png')}/>
                        <img src={require('../../../icons/insta-link.png')}/>
                    </div>
                </div>
                <div className='accepted-payment-container'>
                    <img src={require('../../../icons/paypal.png')}/>
                    <img src={require('../../../icons/visa.png')}/>
                    <img src={require('../../../icons/mastercard.png')}/>
                </div>
            </div>
        </div>
    )
};

export default Footer;