import React, {useContext} from 'react';
import CartContext from '../context/CartContext';
import { Container, TableContainer, Table, TableHead, TableRow, TableCell,TableBody } from '@mui/material'
import './cart.css'
import DeleteIcon from '@mui/icons-material/Delete';


const urlImgs = "/products/"

  


const Cart = () => {

    const {cartProducts, removeItem, clear} = useContext(CartContext)
    const [secondary, setSecondary] = React.useState(false);

    return(
        <>
            <Container maxWidth="lg">
                {console.log(cartProducts.length) }
            {         
            cartProducts.length > 0 ? (
                            cartProducts.map ( (productsAdded) => {
                                const {title, img, price, id, quantityToAdd} = productsAdded
                                    return( 
                                       
                                         <TableContainer key={id} >
                                         <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                           <TableHead>
                                             <TableRow>
                                               <TableCell> </TableCell>
                                               <TableCell align="center">Producto</TableCell>
                                               <TableCell align="center">Precio</TableCell>
                                               <TableCell align="center">Cantidad</TableCell>
                                               <TableCell align="center">Total</TableCell>                                            
                                               <TableCell align="center"></TableCell>
                                             </TableRow>
                                           </TableHead>
                                           <TableBody>
                                                <TableRow
                                                    key={id}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell scope="row"  align="center">
                                                    <img className="thumbImg" src={urlImgs+img}/>
                                                    </TableCell>
                                                    <TableCell align="center">{title}</TableCell>
                                                    <TableCell align="center">{price}</TableCell>
                                                    <TableCell align="center">{quantityToAdd}</TableCell>
                                                    <TableCell align="center">Total</TableCell>
                                                    <TableCell align="center"><DeleteIcon className='deleteButton' onClick={() => removeItem(id) } /></TableCell>
                                                </TableRow>
                                           </TableBody>
                                         </Table>
                                       </TableContainer>
                                    ) 
                            })
                ) : <p>No hay productos agregados</p>        
            }
            </Container>
        </>
    )
}
export default Cart