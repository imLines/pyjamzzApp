import { Navigate } from "react-router-dom";

const PrivateRouteAdmin = ({children})=>{
    const token = localStorage.getItem('token');
    const admin = localStorage.getItem('admin');

    if(admin == null || token == null){
        return <Navigate to='/admin/login' />
         
        
    }
    return children;
};


export default PrivateRouteAdmin; 