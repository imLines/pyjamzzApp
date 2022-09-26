import {Link} from 'react-router-dom';

import './AngeProducts.css'

function AngeProducts(){
    return(
        <>
            <div className='big-container'>
                <h1>Menu of products (Exclu ange)</h1>

                <div className='one-category-card'>
                    <Link to="/products/ange/pyjamas" className='one-link'>Pyjamas Ange</Link>
                </div>
                <div className='one-category-card'>
                <Link to='/products/ange/nuisettes' className='one-link'>Nuisettes</Link>
                </div>
                <div className='many-category-card'>
                    <div className='many-link'>
                        <Link to='/products/ange/culottes'>Culottes</Link>
                        <Link to='/products/ange/soutiens-gorge'>Soutiens-Gorge</Link>
                        <Link to='/products/ange/brassiere'>Brassière</Link>
                        <Link to='/products/ange/shorty'>Shorty</Link>
                    </div>
                </div>
            </div>
        </>
    )
};

export default AngeProducts;