import './CardAnge.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CardAnge = function({product}){
    const [urlOfPicture, setUrlOfPicture] = useState('');
    useEffect(()=>{
        try{
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            };

            fetch(`/product/images/${product.id}`, requestOptions)
            .then(promise=>{
                return promise.json()
            }) 
            .then(data=>{
                console.log(data)
                setUrlOfPicture(data[0].url)
            }) 
        }catch(e){
            console.log(e) 
        } 
    }, [])

    return(
        <Link to={`${product.id}`}>
            <div className="card">
                <img src={urlOfPicture} className='picture'/>
                <div className='etiquette'>
                    <h2>{product.name}</h2>
                    <p>{product.priceTTC} €</p>
                </div>
            </div>
        </Link>
    );
}; 

export default CardAnge;