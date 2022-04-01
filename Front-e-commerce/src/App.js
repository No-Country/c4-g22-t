import './App.css';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Routes, Route}  from 'react-router-dom';


function App() {
  return (
      <>

          <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Homepage/>}/>
            </Routes>
          </BrowserRouter>
          
  

      </>
  );
    
    
}

export default App;
