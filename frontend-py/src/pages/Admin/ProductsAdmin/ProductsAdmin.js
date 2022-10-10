import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductsAdmin(){

    const [products, setProducts] = useState(null);

    useEffect(()=>{
        try{
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            };
            fetch('/product/all', requestOptions)
            .then(promise=>{
                return promise.json()
            })
            .then(data=>{
                console.log(data)
                return setProducts(data.data)
            })
        }catch(e){
            console.log(e)
        }
    }, [])

   

   
    return(
        <>
            <h2>Liste de tous les produits </h2>
            <Link to='/admin/manager/products/create'>Créer un produit</Link>
            <table>
                <tbody>
                    <tr>
                        <th scope="col">Nom</th>
                        <th scope="col">environnement</th>
                        <th scope="col">categorie</th>
                        <th scope="col">prix</th>
                        <th scope="col">Modifier</th>
                    </tr>
                    {products?.map((element, index)=>{
                        return(
                            <tr key={index}>
                                <th scope="row">{element?.name}</th>
                                <th scope="row">{element?.environment}</th>
                                <th scope="row">{element?.category}</th>
                                <th scope="row">{element?.priceTTC}€</th>
                                <th scope="row"><Link to={`/admin/manager/products/update/${element.id}`}>Modifier</Link></th>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </>
    )
    
};

export default ProductsAdmin;