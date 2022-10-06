import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ClientAdmin(){

    const [customers, setCustomer] = useState(null);

    useEffect(()=>{
        const token = localStorage.getItem('token')
        try{
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json',
                            'Authorization': token        
            }
            };
            fetch('/customer/all', requestOptions)
            .then(promise=>{
                return promise.json()
            })
            .then(data=>{
                console.log(data.customers)
                return setCustomer(data.customers)
            })
        }catch(e){
            console.log(e)
        }
    }, [])

   
   

   
    return(
        <>
            <h2>Liste de tous les clients </h2>
            <table>
                <tbody>
                    <tr>
                        <th scope="col">Nom</th>
                        <th scope="col">Prénom</th>
                        <th scope="col">email</th>
                        <th scope="col">Profil</th>
                    </tr>
                    {customers?.map((element, index)=>{
                        return(
                            <tr key={index}>
                                <th scope="row">{element?.firstName}</th>
                                <th scope="row">{element?.lastName}</th>
                                <th scope="row">{element?.email}</th>
                                <th scope="row"><Link to={`/admin/manager/client/${element?.id}`} >Voir</Link></th>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </>
    )
    
};

export default ClientAdmin;