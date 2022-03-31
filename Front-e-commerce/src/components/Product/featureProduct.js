import React from 'react';
import '@fontsource/roboto/500.css';
import { CardActionArea, Button, Typography, CardMedia, CardContent, Card, Paper, Box } from '@mui/material';
import './featureProduct.css'
<style>
</style>

const urlImgs="./products/"



export default function FeatureProduct() {
    return (
      <>
        <Typography sx={{marginY:'3rem'}} variant="h6" component="div" className='sectionTitle alignCenter'>
          Featured Products 
        </Typography>
        
        <Box className='wrapper'
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 270,
            },
          }}
        >
          <Paper elevation={12}>
          <Card>
            
            <CardActionArea>
                <CardMedia
                  component="img"
                  height="230"
                  image={urlImgs+'shop-img1.jpg'}
                  alt="camiseta"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" className='titleProduct alignCenter'>
                    Hanging light
                  </Typography>
                  <Typography gutterBottom variant="body2" color="text.secondary" className='alignCenter'>
                    LIGHTNING
                  </Typography>
                  <Typography  variant="button" component="div" className='price alignCenter'>
                    $ 42.00
                  </Typography>
                  <Button sx={{marginY:'20px'}}variant="contained" fullWidth={true}
                                    size="large"
                                    > Agregar al carrito
                                </Button>
                </CardContent>
            </CardActionArea>
          </Card>
          </Paper>
        </Box>
      
      </>
    );
  }