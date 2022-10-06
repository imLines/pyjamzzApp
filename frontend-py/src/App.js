import './App.css';
import {Routes, Route} from 'react-router-dom'
import Customer from './Customer';

import ProtectedRouteCustomer from './security/ProtectedRouteCustomer';
import PrivateRouteAdmin from './security/PrivateRouteAdmin';

import {SuccessRegistration, SuccessLogin} from './pages/Success/Success';

import Login from './pages/Login/Login';
import ShoppingCard from './pages/ShoppingCard/ShoppingCard';
import Home from './pages/Home';

import About from './pages/About/About';
import Registration from './pages/Registration/Registration';
import Profil from './pages/Profil/Profil';
import News from './pages/News/News'
import Products from './pages/Products/Products';

import Infos from './pages/Profil/Infos/Infos';
import Orders from './pages/Profil/Orders/Orders';
import Messages from './pages/Profil/Messages/Messages';
import WishList from './pages/Profil/WishList/WishList';

import AngeProducts from './pages/AngeProducts/AngeProducts';
import PyjamasAnge from './pages/AngeProducts/AngeCategory/PyjamasAnge';
import Nuisettes from './pages/AngeProducts/AngeCategory/Nuisettes';
import Culottes from './pages/AngeProducts/AngeCategory/Culottes';
import SoutiensGorge from './pages/AngeProducts/AngeCategory/SoutiensGorge';
import Brassieres from './pages/AngeProducts/AngeCategory/Brassieres';
import Shorty from './pages/AngeProducts/AngeCategory/Shorty';

import AccessoriesProducts from './pages/AccessoriesProducts/AccessoriesProducts';
import AngeProductPage from './pages/AngeProducts/AngeProductPage/AngeProductPage';


import Admin from './Admin';
import HomeAdmin from './pages/Admin/HomeAdmin/HomeAdmin';
import LoginAdmin from './pages/Admin/LoginAdmin/LoginAdmin';
import ProductsAdmin from './pages/Admin/ProductsAdmin/ProductsAdmin';
import ClientAdmin from './pages/Admin/ClientAdmin/ClientAdmin';
import ClientPage from './pages/Admin/ClientAdmin/ClientPage';

function App() {
  
  return(
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/client' element={<Customer/>}>
        <Route exact path='/client/shoppingcard' element={<ShoppingCard/>}/>
        <Route exact path='/client/login' element={<Login/>}/>
        <Route exact path='/client/about' element={<About/>}/>
        <Route exact path='/client/registration' element={<Registration/>}/>

        
          <Route exact path='/client/profil' element={<ProtectedRouteCustomer><Profil/></ProtectedRouteCustomer>}>
            <Route path='/client/profil/infos' element={<Infos/>}/>
 
            <Route path='/client/profil/orders' element={<Orders/>}/>
            <Route path='/client/profil/messages' element={<Messages/>}/>
            <Route path='/client/profil/wishlist' element={<WishList/>}/>
          </Route>


        <Route path='/client/products' element={<Products/>}/>


        <Route exact path='/client/products/ange' element={<AngeProducts/>}/>

        <Route path='/client/products/ange/pyjamas' element={<PyjamasAnge/>}/>
        <Route path='/client/products/ange/pyjamas/:productId' element={<AngeProductPage/>}/>
        

        <Route path='/client/products/ange/nuisettes' element={<Nuisettes/>}/>
        <Route path='/client/products/ange/nuisettes/:productId' element={<AngeProductPage/>}/>


        <Route path='/client/products/ange/culottes' element={<Culottes/>}/>
        <Route path='/client/products/ange/culottes/:productId' element={<AngeProductPage/>}/>


        <Route path='/client/products/ange/soutiens-gorge' element={<SoutiensGorge/>}/>
        <Route path='/client/products/ange/soutiens-gorge/:productId' element={<AngeProductPage/>}/>

        <Route path='/client/products/ange/brassiere' element={<Brassieres/>}/>
        <Route path='/client//products/ange/brassiere/:productId' element={<AngeProductPage/>}/>

        <Route path='/client/products/ange/shorty' element={<Shorty/>}/>
        <Route path='/client/products/ange/shorty' element={<AngeProductPage/>}/>

        
        <Route path='/client/products/accessories' element={<AccessoriesProducts/>}/>
        <Route exact path='/client/news' element={<News/>}/>

        <Route exact path='/client/registration/success' element={<SuccessRegistration/>}/>
        <Route exact path='/client/login/success' element={<ProtectedRouteCustomer><SuccessLogin/></ProtectedRouteCustomer>}/>
      </Route>


      <Route exact path='/admin/login' element={<LoginAdmin/>}/>
      <Route exact path='/admin/manager' element={<PrivateRouteAdmin><Admin/></PrivateRouteAdmin>}>
        <Route path='/admin/manager/home' element={<HomeAdmin/>}/>
        <Route path='/admin/manager/products' element={<ProductsAdmin/>}/>
        <Route exact path='/admin/manager/client' element={<ClientAdmin/>}/>
        <Route path='/admin/manager/client/:id' element={<ClientPage/>}/>
      </Route>
    </Routes>
    )

  
}

export default App;
