import { useNavigate } from "react-router-dom";

const PrivateRouteAdmin = ({children})=>{
    const navigate = useNavigate();
    console.log('hi')
    const token = localStorage.getItem('token');
    const admin = localStorage.getItem('admin');

    if(admin == null || token == null){
        return navigate('/admin/login')
        
    }
    return children;
};


export default PrivateRouteAdmin; 