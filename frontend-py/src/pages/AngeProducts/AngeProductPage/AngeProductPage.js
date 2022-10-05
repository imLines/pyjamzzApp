import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { useRecoilState } from 'recoil';
import ErrorStock from '../../Error/Error'
import './AngeProductPage.css';
import shop from '../../../config/store';

function AngeProductPage(){
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(0);
    const [select, setSelect] = useState(undefined);
    const [size, setSize] = useState(undefined);
    const [shoppingCard, setShoppingCard] = useRecoilState(shop)

    let {productId} = useParams();

    useEffect(()=>{
        try{
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };
            
            fetch(`/product/${productId}`, requestOptions)
            .then(data=>{
                return data.json()
            })
            .then(productAndSize=>{
                setProduct(productAndSize.product)
                setSize(productAndSize.stock)
            })
            
        }catch(e){ 
            console.log(e) 
        }
    }, [])



    const downQuantity = (e)=>{
        e.stopPropagation()
        if(quantity > 0){
            setQuantity(quantity - 1)   
        }
    }

    const upQuantity = (e)=>{
        try{
            e.stopPropagation()
            setQuantity(quantity + 1)
            console.log("shoppingCard: ",shoppingCard)
        }catch(e){
            console.log(e)
        }
    }


    const addInShoppingCard = async (event)=>{
        try{
            event.stopPropagation();
            event.preventDefault();
            
            let item =  {
                product: product,
                size : size,
                quantity: quantity
            }

            setShoppingCard(current => [...current, item])


            //CISCO & TONY
            // const shopingCardCopy = await shoppingCard.map(function check(e){
            //     if(e.product.id == item.product.id && e.size == item.size){
            //         e.quantity += item.quantity
            //         return e
            //     }

            //     return e
            // })
            // console.log("length of COPY => ",shopingCardCopy)
            // console.log("length of NEW => ",shoppingCard)
            
            // if(JSON.stringify(shoppingCard) == JSON.stringify(shopingCardCopy)){
            //     console.log('hello')
            //     shopingCardCopy.push(item)
            //     setShoppingCard(shopingCardCopy)
            // }
            // console.log("COPY => ",shopingCardCopy)
            // console.log("NEW => ",shoppingCard)


            //TONY
            // console.log(1)
            // shoppingCard.forEach(element => {
            //     console.log("ELEMENT = ",element.product.id)
            //     console.log("ITEM = ",item.product.id)
            //     if(element.product.id == item.product.id){
            //         element.quantity += item.quantity
            //         console.log('equal')
            //         setInShoppingCard(true)
            //     }
            // });
            // console.log(2, inShoppingCard)
            // if(inShoppingCard == false){
            // }
            // console.log(3)
            // setInShoppingCard(false)
            // console.log('FINISH')


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
                    <h2>{product?.name}</h2>

                </div>
                <div className='price-container'>
                    <p>{product?.priceTTC}€</p>
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
                    <select name="size" value={select}  onChange={event=>setSelect()}>
                        <option value={undefined}>Choisir une taille</option>
                        {size?.map((e, key) => {
                        return <option key={key}  value={e.size}>{e.size}</option>;
                        })}
                    </select>
                </div>
                <button type='submit'>Ajouter au panier</button>
            </form>
        </>

    )
}
export default AngeProductPage;