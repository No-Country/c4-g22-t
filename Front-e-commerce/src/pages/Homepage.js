import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import ItemListContainer from '../components/Product/ItemListContainer'
import Container from '@mui/material/Container';
import ProductSlider from '../components/Slider/Slider';
import { Typography } from '@mui/material';



const slides = [
  {
    city: 'Mumbai',
    country: 'MAHIRA KHAN',
    img: 'https://umea.qodeinteractive.com/wp-content/uploads/2020/12/h5-slider-img-1.jpg',
  },
  {
    city: 'Delhi',
    img: 'https://umea.qodeinteractive.com/wp-content/uploads/2021/01/h5-slider-img-2-1.jpg',
  },
  {
    city: 'Khandala',
    country: 'India',
    img: 'https://tobel.qodeinteractive.com/wp-content/uploads/2021/06/home-2-rev-s-4.jpg',
  }
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
        
      <Typography sx={{marginY:'3rem'}} variant="h6" component="div" className='sectionTitle alignCenter'>
          Featured Products 
        </Typography>
        
        <ItemListContainer/>
      </Container>
    </>
    
    
  );

}

export default Homepage;
