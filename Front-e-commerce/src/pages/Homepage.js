
import FeatureProduct from '../components/Product/featureProduct'
import Container from '@mui/material/Container';
import  {FooterContainer} from "../components/footer/Footer.js"
import Navbar from '../components/Navbar/Navbar';
function Homepage() {
  return (
    <>
      <Navbar/>
      <Container maxWidth="lg">
        <FeatureProduct/>
      </Container>
      <FooterContainer />
    </>
    
    
  );
}

export default Homepage;
