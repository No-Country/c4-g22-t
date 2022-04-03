import './App.css';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar/Navbar';
import AddWSO from "./components/W-S-O/index.js";
import TrendingProduct from "./components/Trending-product/index.js";
import "./components/W-S-O/index.css";
import "./components/Trending-product/index.css";
import {BrowserRouter, Routes, Route}  from 'react-router-dom';
import Store from './pages/Store';
import ProductDetail from './pages/ProductDetail';


function App() {
  return (
      <>

          <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Homepage/>}/>
              <Route path="/tienda" element={<Store/>}/>
              <Route path="/producto/:category/:id" element={<ProductDetail/>}/>
            </Routes>
            <AddWSO/>
            <TrendingProduct/>
          </BrowserRouter>
          
  

      </>
  );
    
    
}

export default App;
