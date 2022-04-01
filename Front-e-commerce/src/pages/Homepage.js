import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import FeatureProduct from '../components/Product/featureProduct'
import Container from '@mui/material/Container';
import ProductSlider from '../components/Slider/Slider'



const slides = [
  {
    city: 'Mumbai',
    country: 'MAHIRA KHAN',
    img: 'https://wallpapercave.com/wp/wp4112823.jpg',
  },
  {
    city: 'Delhi',
    img: 'https://wallpapercave.com/wp/wp4112857.jpg',
  },
  {
    city: 'Khandala',
    country: 'India',
    img: 'https://wallpapercave.com/wp/wp4112854.jpg',
  },
  {
    city: 'Amsterdam',
    country: 'Netherlands',
    img: 'https://wallpapercave.com/wp/wp4112810.jpg',
  },
  {
    city: 'Moscow',
    country: 'Russia',
    img: 'https://wallpapercave.com/wp/wp2864001.jpg',
  },
];




function Homepage() {
  
  
  useEffect(() => {
    ReactDOM.render(<ProductSlider slides={slides} />, document.querySelector('#app'));
  },[])




  return (
    <>
    
      <div id="app">
        
        
      </div>
      <Container maxWidth="lg">
        
      
        <FeatureProduct/>
      </Container>
    </>
    
    
  );

}

export default Homepage;
