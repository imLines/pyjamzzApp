import { useEffect, useState } from "react";
import CardAnge from "../CardAnge/CardAnge";
import './Category.css';

function PyjamasAnge(){
    const [products, setProducts] = useState([])

    useEffect(()=>{
        try{
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };

            fetch('http://localhost:8000/product/list/pyjamasange', requestOptions)
            .then(promise=>{
                return promise.json()
            }) 
            .then(data=>{
                setProducts(data.products)
            }) 
        }catch(e){
            console.log(e)
        }
    }, [])




    


    return(
        <section>
            <h2>Ici les pyjamas Ange</h2>
            <div className="card-container">
                
                {products.map(product=><CardAnge product={product} key={product.id} />)}
            </div>
        </section>
    )
};

export default PyjamasAnge;