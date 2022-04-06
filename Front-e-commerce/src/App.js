import './App.css';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Routes, Route}  from 'react-router-dom';
import Store from './pages/Store';
import ProductDetail from './pages/ProductDetail';
import AddNavbar from './components/headerTemporal';
import './components/headerTemporal/index.css';
import PageOrderCompleted from './pages/OrderCompleted';


function App() {
  return (
      <>

          <BrowserRouter>
            <AddNavbar/>
            <Routes>
              <Route path="/" element={<Homepage/>}/>
              <Route path="/order%20completed" element={<PageOrderCompleted/>}/>
              <Route path="/tienda" element={<Store/>}/>
              <Route path="/producto/:category/:id" element={<ProductDetail/>}/>
            </Routes>
          </BrowserRouter>
          
  

      </>
  );
    
    
}

export default App;
