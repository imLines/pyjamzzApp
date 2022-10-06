import { useEffect } from "react";
import { useParams } from "react-router-dom";

function ClientPage(){
    useEffect(()=>{
        const {clientId} = useParams();
    },[])

    return(
        <>

        </>
    )
};

export default ClientPage;