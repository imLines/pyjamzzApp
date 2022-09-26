import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import './AngeProductPage.css';

function AngeProductPage(){
    const [product, setProduct] = useState(Object);
    let {productId} = useParams();

    useEffect(()=>{
        try{
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };
            
            console.log(`http://localhost:8000/product/${productId}`)
            fetch(`http://localhost:8000/product/${productId}`, requestOptions)
            .then(promise=>{
                return promise.json()
            })
            .then(data=>{
                console.log(data)
                setProduct(data.product) 
            })
        }catch(e){ 
            console.log(e) 
        }
    }, [])

    const addInShoppingCard = ()=>{

    }


    return(
        <>
            <div className='picture-container'>
                <div className='miniatures-container'>
                    <img />
                    <img />
                    <img />
                </div>
                <div className='actually-image-container'>
                    <img/>
                </div>
            </div>
            <div className='info-container'>
                <div className='name-stock-container'>
                    <h2>{product.name}</h2>
                    <p>En stock : </p>
                </div>
                <div className='price-container'>
                    <p>{product.priceTTC}€</p>
                </div>
            </div>
            <form onSubmit={addInShoppingCard}>
                <div className='color-container'>
                    
                </div>
                <div className='size-container'>

                </div>
                <div className='quantity-container'>

                </div>
                <button type='submit'>Ajouter au panier</button>
            </form>
        </>

    )
}
export default AngeProductPage;