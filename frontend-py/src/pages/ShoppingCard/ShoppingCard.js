import { useEffect, useState } from 'react';
import {useRecoilState} from 'recoil';
import shop from '../../config/store';
import './ShoppingCard.css';

function ShoppingCard(){
    const [shoppingCard, setShoppingCard] = useRecoilState(shop)
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(()=>{
        try{
            const calc = async ()=>{
                console.log(shoppingCard)
                console.log(totalPrice)
                await shoppingCard.forEach(element => {
                    return setTotalPrice(totalPrice + element.product.priceTTC)
                });

            }
            calc()
        }catch(e){
            console.log(e)
        }
        
    }, [])

    if(shoppingCard.length >= 1){

        return(
            <section>
            <h2>Panier</h2>
            <table>
                <tbody>
                    <tr>
                        <th scope="col">Nom</th>
                        <th scope="col">Gloobles</th>
                        <th scope="col">Taille</th>
                        <th scope="col">Quantitée</th>
                        <th scope="col">Prix</th>
                    </tr>

                {shoppingCard.map(( listValue, index ) => {
                return (
                        
                            <tr key={index}>
                                <th scope="row">{listValue?.product.name}</th>
                                <td>Valeur ?</td>
                                <td>{listValue?.size[0].size}</td>
                                <td>{listValue?.quantity}</td>
                                <td>{listValue?.product.priceTTC}€</td>
                            </tr>
                    
                        
                    );
                })}

            </tbody>
            </table>
            <h3>Total de la commande : {totalPrice} € ttc (hors livraison)</h3>
    
            </section>
        )
    }else{
        return(
            <>
                <section>
                    <h2>Panier</h2>
                    <p>Votre panier est vide pour le moment</p>
                </section>
            </>
        )
    }

};

export default ShoppingCard;