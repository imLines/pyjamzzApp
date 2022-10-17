import {Link} from 'react-router-dom';

import './AngeProducts.css'

function AngeProducts(){
    return(
        <>
            <div className='big-container'>
                <div className='one-category-card pyjamas-ange-card'>
                    <Link style={{textDecoration: 'none'}} to="/client/products/ange/pyjamas" className='one-link'>Pyjamas Ange</Link>
                </div>
                <div className='one-category-card nuisette-card'>
                <Link style={{textDecoration: 'none'}} to='/client/products/ange/nuisettes' className='one-link'>Nuisettes</Link>
                </div>
                <div className='many-category-card'>
                    <div className='many-link-case'>
                        <Link style={{textDecoration: 'none'}} className="one-link-for-many-case" to='/client/products/ange/culottes'>Culottes</Link>
                        <Link style={{textDecoration: 'none'}} className="one-link-for-many-case" to='/client/products/ange/soutiens-gorge'>Soutiens-Gorge</Link>
                        <Link style={{textDecoration: 'none'}} className="one-link-for-many-case" to='/client/products/ange/brassiere'>Brassière</Link>
                        <Link style={{textDecoration: 'none'}} className="one-link-for-many-case" to='/client/products/ange/shorty'>Shorty</Link>
                    </div>
                </div>
            </div>
        </>
    )
};

export default AngeProducts;