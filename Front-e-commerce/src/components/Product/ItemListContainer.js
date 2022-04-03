import './ItemListContainer.css';
import ItemList from './ItemList';
import ListProducts from '../utils/listProducts';
import { useState, useEffect } from "react";
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom'




const urlImgs = "/images/"


const ItemListContainer = () => {
    
    const { category } = useParams()
    const [products, setProducts] = useState([])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            return setTimeout(() => {
                resolve(ListProducts)
            },1000);
        })
    }
        
    useEffect( () => {
        getProducts().then( (addProducts) => {                     
            if( addProducts.find(foundCategory => foundCategory.category == category) ){ 
                setProducts([]) 
                filterProductByCategory(addProducts, category)
            } else {                 
                setProducts(addProducts) 
            }
                       
        }).catch( (error) =>{
            console.log(error)
        }).finally( () => {
            console.log("Agegados ItemListContainer")
        })
    }, [category])


    const filterProductByCategory = (arrayProducts , category) => {
        return arrayProducts.map( (product, i) => {
            if(product.category == category) { 
               return setProducts(products => [...products, product]);
            }
        })
    }


    return(
        <>
            <Box
                sx={{
                display: 'flex',
                flexWrap: 'wrap',
                borderRadius: 1,
                paddingY: '2rem'
                }}
            >
                <ItemList productos={products}/>
            </Box>
            
        </>
    );
}

export default ItemListContainer
  