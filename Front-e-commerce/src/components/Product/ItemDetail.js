import React from 'react'
import './ItemDetail.css'
import { Box, Grid, Button, Stack, TextField } from '@mui/material'



const urlImgs = "/products/"


const ItemDetail = ({producto, idProduct}) => {


    return (
    <>
                
                

        {producto.map( ( product ) => {            
            const {id, title, price, detail, img, stock, category} = product
            
            if (id==idProduct){
                    
                return(
                    <Box  sx={{ flexGrow: 1, paddingY: 10  }}  key={id}>
                        <Grid   container
                                direction="row"
                                justifyContent="flex-start"
                                rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6}>
                                <img src={urlImgs+img}/>
                            </Grid>
                            <Grid item xs={4}>
                                <Box className="productTitle">{title}</Box>
                                <Box className="price">$ {price}</Box>
                                <Box className="stock"><b>Stock:</b> {stock}</Box>
                                <Box className="detail">{detail}</Box>
                                <Stack spacing={0} direction="row" margin="30px 0">                
                                    <Button variant="outlined">-</Button>
                                    <TextField id="outlined-size-normal" value="1" variant="outlined"/>
                                    <Button variant="outlined">+</Button>
                                </Stack>
                                <Button variant="contained" fullWidth={true}
                                    size="large"
                                    > Agregar al carrito
                                </Button>
                                <Box className="category"><b>Categoría</b>s: {category}</Box>
                            </Grid>
                        </Grid>
                    </Box>
                    
                );
            }

                
        })}        
                
    
    </>
    );
    
}

export default ItemDetail