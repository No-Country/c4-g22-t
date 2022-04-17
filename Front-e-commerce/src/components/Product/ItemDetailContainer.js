import { useState, useEffect } from "react"
import ListProducts from '../utils/listProducts'
import ItemDetail from "./ItemDetail"
import {useParams} from 'react-router-dom'
import { useStateValue } from "../../reducer/StateProvider"




const urlImgs = "/images/"


const ItemDetailContainer = () => {

    const [{productos}, dispatch]=useStateValue()
    console.log(productos)

    const { id} = useParams()

    const [product, setProduct] = useState([])

    const getProduct = () => {
        return new Promise((resolve, reject) => {
            return setTimeout(() => {
                resolve(productos)
            });
        })
    } 

    useEffect( () => {
        getProduct().then( (filterProducts) => {  
            filterProducts.map( (productFound)  => {
                if (productFound._id == id){
                    return setProduct(productFound)  
                }
            })
                                     
        }).catch( (error) =>{
            console.log(error)
        }).finally( () => {
            console.log("Agegados Detail Container")
        })
    }, [])


    return(
        <>
        <div className='container-cards'>                    
                        <ItemDetail producto={product}/>
                    </div>
        </>
    );


}

export default ItemDetailContainer