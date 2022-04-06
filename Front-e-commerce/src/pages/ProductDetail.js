import ListProducts from '../components/utils/listProducts';
import Container from '@mui/material/Container';
import {useParams} from 'react-router-dom'
import {useEffect} from 'react'
import ItemDetailContainer from '../components/Product/ItemDetailContainer';
import AddWhereIAm from '../components/whereIAm';

function ProductDetail() {

    const {category, id} = useParams()
    console.log(`Este es el id del producto ${id} de categoria ${category}`)
    console.log(`Mock`,ListProducts)


    const filterProductById = () => {
        return ListProducts.map( (product)  => {
            if (product.id == id){
                return console.log("Filtro",product)
            }
        })
    }

    useEffect( () => {
        filterProductById()
    },[])





    return (
        <>
        <AddWhereIAm whereIAm="Product Details" />
        <Container sx={{ paddingX: 2, display: 'flex' }} maxWidth="lg">
            
            <ItemDetailContainer idProducto={id} />
        </Container>
        </>
        
        
    );
}

export default ProductDetail;
