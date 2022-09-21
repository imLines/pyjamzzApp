import './App.css';
import Navbar from './pages/partials/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom';


import Login from './pages/Login/Login';
import ShoppingCard from './pages/ShoppingCard/ShoppingCard';
import Home from './pages/Home';
import Banner from './pages/partials/Banner/Banner';
import Footer from './pages/partials/Footer/Footer';
import About from './pages/About/About';
import Registration from './pages/Registration/Registration';
import Profil from './pages/Profil/Profil';
import News from './pages/News/News'
import Products from './pages/Products/Products';

import Infos from './pages/Profil/Infos/Infos';
import Orders from './pages/Profil/Orders/Orders';

import {SuccessRegistration, SuccessLogin} from './pages/Success/Success';


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
        </Route>

        <Route exact path='/news' element={<News/>}/>
        <Route exact path='/products' element={<Products/>}/>

        <Route exact path='/registration/success' element={<SuccessRegistration/>}/>
        <Route exact path='/login/success' element={<SuccessLogin/>}/>



      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
