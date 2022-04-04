import { useState, useEffect } from "react"
import ListProducts from '../utils/listProducts'
import ItemDetail from "./ItemDetail"




const urlImgs = "/images/"

const ItemDetailContainer = ({idProducto}) => {

    const [product, setProduct] = useState([])

    const getItem = () => {
        return new Promise((resolve, reject) => {
            return setTimeout(() => {
                resolve(ListProducts)
            },2000);
        })
    }
        
    useEffect( () => {
        getItem().then( (addProducts) => {
            setProduct(addProducts)            
        }).catch( (error) =>{
            console.log(error)
        }).finally( () => {
            console.log("Agegados Detail Container")
        })
    }, [])


    return(
        <>
        
            <div className='container-cards'>
                
                <ItemDetail producto={product} idProduct={idProducto}/>
            </div>
            
        </>
    );


}

export default ItemDetailContainer