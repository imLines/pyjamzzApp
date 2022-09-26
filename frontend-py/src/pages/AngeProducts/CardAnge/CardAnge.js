import './CardAnge.css';
import { Link } from 'react-router-dom';

const CardAnge = function({product}){
    return(
        <Link to={`${product.id}`}>
            <div className="card">
                <img />
                <div className='etiquette'>
                    <h2>{product.name}</h2>
                    <p>{product.priceTTC}</p>
                </div>
            </div>
        </Link>
    );
};

export default CardAnge;