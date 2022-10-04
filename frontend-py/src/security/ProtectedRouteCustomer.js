import { useNavigate } from "react-router-dom";

const ProtectedRouteCustomer = ({children})=>{
    const navigate = useNavigate();
    const customer = localStorage.getItem('customer');
    const token = localStorage.getItem('token')
    if(!customer && !token){
        return navigate('/client/login')
    }
    return children;
};

export default ProtectedRouteCustomer;