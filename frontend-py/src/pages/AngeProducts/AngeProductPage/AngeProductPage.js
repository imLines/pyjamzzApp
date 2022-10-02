import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { useRecoilState } from 'recoil';
import ErrorStock from '../../Error/Error'
import './AngeProductPage.css';
import shop from '../../../config/store';

function AngeProductPage(){
    const [product, setProduct] = useState(Object);
    const [quantity, setQuantity] = useState(0);
    const [stock, setStock] = useState([]);
    const [selectedStock, setSelectedStock] = useState(0)
    const [select, setSelect] = useState(undefined);
    const [size, setSize] = useState(undefined);
    const [totalStock, setTotalStock] = useState(0);
    const [inShoppingCard, setInShoppingCard] = useState(false)
    const [shoppingCard, setShoppingCard] = useRecoilState(shop)

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

    const resetAll = async (e)=>{
        console.log(select)
        if(select != undefined){
            const cut = select.slice('-');
            const inStok = parseInt(cut[0])
            setSelectedStock(inStok)
            
        }


        setQuantity(0);
        setSize(undefined);
        return e;
    }


    const downQuantity = (e)=>{
        e.stopPropagation()
        if(quantity > 0){
            setQuantity(quantity - 1)   
        }
    }

    const upQuantity = (e)=>{
        try{
            e.stopPropagation()
            if(select == undefined ){
                alert("ajout impossible, veuillez d'abord choisir une taille.")
            }else{

                if(quantity == selectedStock){
                    alert('Vous ne pouvez pas commander plus que le stock disponible')
                }else{
                    setQuantity(quantity + 1)
                }
            }

        }catch(e){
            console.log(e)
        }
    }


    const addInShoppingCard = async (event)=>{
        try{
            event.stopPropagation();
            event.preventDefault()
            if(size == undefined || quantity == 0){
                alert('veuillez choisir au moins 1 article.')
                return;
            }
            
            const item = {
                id: product.id,
                name: product.name,
                size: size,
                quantity: quantity
            };

            shoppingCard.forEach((element)=>{
                if(element.id == item.id && element.size == item.size){
                    setInShoppingCard(true)
                    console.log(select.stock, item.quantity)
                    if((element.stock + item.quantity) <= select.stock){
                        console.log('LAAA')
                        element.stock = element.stock + item.quantity
                    }else{
                        console.log('La')
                        return;
                    }
                }
            });
            if(inShoppingCard == false){

                setShoppingCard(shoppingCard => [...shoppingCard, item])
                setInShoppingCard(true)
            }

            console.log(shoppingCard)
          

        }catch(e){
            console.log(e)
        }
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
                    <p></p>
                </div>
                <div className='price-container'>
                    <p>{product.priceTTC}€</p>
                </div>
            </div>
            <form onSubmit={addInShoppingCard}>
                <div className='row-container'>
                    <label htmlFor='quantity'>Quantitée :</label>
                    <button type='button' onClick={downQuantity}>-</button>
                    <p>{quantity}</p>
                    <button type='button' onClick={upQuantity}>+</button>
                </div>
                <div className='row-container'>
                    <label>Taille : </label>
                    <select name="size" value={select}  onChange={event=>setSelect(resetAll(event.target.value))}>
                        <option value={undefined}>Choisir une taille</option>
                        {stock.map((e, key) => {
                        return <option key={key}  value={e.stock+'-'+e.size}>{e.size} - {e.stock} en stock</option>;
                        })}
                    </select>
                </div>
                <button type='submit'>Ajouter au panier</button>
            </form>
        </>

    )
}
export default AngeProductPage;