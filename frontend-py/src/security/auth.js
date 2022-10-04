import { useNavigate } from "react-router-dom";

const ProtectedRouteCustomer = ({children})=>{
    const navigate = useNavigate();
    const customer = localStorage.getItem('customer');
    if(!customer){
        console.log("No connect")
        return navigate('/client/login')
    }
    return children;
};

export default ProtectedRouteCustomer;