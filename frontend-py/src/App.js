import './App.css';
import Navbar from './pages/partials/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom';


import Login from './pages/Login/Login';
import ShoppingCard from './pages/ShoppingCard';
import Home from './pages/Home';
import Banner from './pages/partials/Banner/Banner';
import Footer from './pages/partials/Footer/Footer';
import About from './pages/About/About';
import Registration from './pages/Registration/Registration';

function App() {
  return (
    <>
        <Navbar/>
        <Banner/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/shoppingcard' element={<ShoppingCard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/registration' element={<Registration/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
