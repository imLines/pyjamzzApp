import {Routes, Route} from 'react-router-dom';
import './App.css';

import Navbar from './pages/partials/Navbar/Navbar';
import Banner from './pages/partials/Banner/Banner';
import {SuccessRegistration, SuccessLogin} from './pages/Success/Success';


import Login from './pages/Login/Login';
import ShoppingCard from './pages/ShoppingCard/ShoppingCard';
import Home from './pages/Home';
import Footer from './pages/partials/Footer/Footer';
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

function App() {
  return ( 
    <div className='app'>
        <Navbar/>
        <Banner/>

      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/shoppingcard' element={<ShoppingCard/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/registration' element={<Registration/>}/>
        
        <Route exact path='/profil' element={<Profil/>}>
          <Route path='/profil/infos' element={<Infos/>}/>
          <Route path='/profil/orders' element={<Orders/>}/>
          <Route path='/profil/messages' element={<Messages/>}/>
          <Route path='/profil/wishlist' element={<WishList/>}/>
        </Route>

        <Route path='/products' element={<Products/>}/>


        <Route exact path='/products/ange' element={<AngeProducts/>}/>

        <Route path='/products/ange/pyjamas' element={<PyjamasAnge/>}/>
        <Route path='/products/ange/pyjamas/:productId' element={<AngeProductPage/>}/>
       

        <Route path='/products/ange/nuisettes' element={<Nuisettes/>}/>
        <Route path='/products/ange/nuisettes/:productId' element={<AngeProductPage/>}/>


        <Route path='/products/ange/culottes' element={<Culottes/>}/>
        <Route path='/products/ange/culottes/:productId' element={<AngeProductPage/>}/>


        <Route path='/products/ange/soutiens-gorge' element={<SoutiensGorge/>}/>
        <Route path='/products/ange/soutiens-gorge/:productId' element={<AngeProductPage/>}/>

        <Route path='/products/ange/brassiere' element={<Brassieres/>}/>
        <Route path='/products/ange/brassiere/:productId' element={<AngeProductPage/>}/>

        <Route path='/products/ange/shorty' element={<Shorty/>}/>
        <Route path='/products/ange/shorty' element={<AngeProductPage/>}/>

       
        <Route path='/products/accessories' element={<AccessoriesProducts/>}/>





        <Route exact path='/news' element={<News/>}/>

        <Route exact path='/registration/success' element={<SuccessRegistration/>}/>
        <Route exact path='/login/success' element={<SuccessLogin/>}/>



      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
