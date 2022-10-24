import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ProductsAdmin(){

    const [products, setProducts] = useState(null);
    const navigate = useNavigate();

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


   const deleteProduct = (event, id)=>{
    event.preventDefault()
    event.stopPropagation()
    if(window.confirm("Voulez vous vraiment supprimer ce produit ?")){
        try{
            const requestOptions = {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            };
            fetch(`/product/delete/${id}`, requestOptions)
            .then(promise=>{
                    return promise.json()
            })
            .then(response =>{
                alert(response.message);
                return window.location.reload()
            })
        }catch(e){
            console.log(e)
        }
    }
   }

   
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
                        <th scope="col">Supprimer</th>
                    </tr>
                    {products?.map((element, index)=>{
                        return(
                            <tr key={index}>
                                <th scope="row">{element?.name}</th>
                                <th scope="row">{element?.environment}</th>
                                <th scope="row">{element?.category}</th>
                                <th scope="row">{element?.priceTTC}€</th>
                                <th scope="row"><Link to={`/admin/manager/products/update/${element.id}`}>Modifier</Link></th>
                                <th scope="row"><button onClick={event=>deleteProduct(event, element.id)}>Supprimer</button> </th>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </>
    )
    
};

export default ProductsAdmin;