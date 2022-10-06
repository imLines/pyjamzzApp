import { Navigate } from "react-router-dom";


const ProtectedRouteCustomer = ({children})=>{
    const customer = localStorage.getItem('customer');
    const token = localStorage.getItem('token')
    if(!customer && !token){
        return <Navigate to='/client/login' />
    }
    return children;
};

export default ProtectedRouteCustomer;