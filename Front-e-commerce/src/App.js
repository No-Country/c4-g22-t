import './App.css';
import Homepage from './pages/Homepage';
import {BrowserRouter, Routes, Route}  from 'react-router-dom';
import Store from './pages/Store';
import ProductDetail from './pages/ProductDetail';
import AddNavbar from './components/headerTemporal';
import './components/headerTemporal/index.css';
import PageOrderCompleted from './pages/OrderCompleted';
import Cart from './components/Cart/Cart';
import {CartProvider} from './components/context/CartContext';
import PageMyAccount from './pages/MyAccount';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
      <>

          <CartProvider>
            <BrowserRouter>
              <Navbar/>
              <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/order%20completed" element={<PageOrderCompleted/>}/>
                <Route path="/tienda" element={<Store/>}/>
                <Route path="/producto/:category/:id" element={<ProductDetail/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/my%20account" element={<PageMyAccount/>}/>
              </Routes>
            </BrowserRouter>
          </CartProvider>
          
  

      </>
  );
    
    
}

export default App;
