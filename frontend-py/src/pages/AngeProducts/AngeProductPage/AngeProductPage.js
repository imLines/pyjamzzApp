import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import './AngeProductPage.css';

function AngeProductPage(){
    const [product, setProduct] = useState(Object);
    const [stock, setStock] = useState(Object);
    const [totalStock, setTotalStock] = useState(0)
    let {productId} = useParams();

    useEffect(()=>{
        try{
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };
            
            fetch(`http://localhost:8000/product/${productId}`, requestOptions)
            .then(promise=>{
                return promise.json()
            })
            .then(data=>{
                setStock(data.stock);
                setProduct(data.product)
                let calculStock = 0;
                
                for(let i = 0; i != data.stock.length; i++){
                    calculStock = calculStock + data.stock[i].stock
                }
                setTotalStock(calculStock) 
            })
        }catch(e){ 
            console.log(e) 
        }
    }, [])

    const addInShoppingCard = (event)=>{
        event.preventdefault()
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
                    <p>En stock : {totalStock}</p>
                    <p>J'ai ajouté le total de stock, maintenant je dois gérer les parties quantité, stock + liste déroulante</p>
                </div>
                <div className='price-container'>
                    <p>{product.priceTTC}€</p>
                </div>
            </div>
            <form onSubmit={addInShoppingCard}>
                <div className='row-container'>

                </div>
                <div className='row-container'>
                    <p>Je suis en train de creer le formulaire d'ajout de produit au panier. (penser au compteur...)</p>
                </div>
                <button type='submit'>Ajouter au panier</button>
            </form>
        </>

    )
}
export default AngeProductPage;