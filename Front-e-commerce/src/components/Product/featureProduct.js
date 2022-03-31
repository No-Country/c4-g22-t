import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import '@fontsource/roboto/500.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './featureProduct.css'
<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,300&display=swap');
</style>

const urlImgs="./products/"

export default function FeatureProduct() {
    return (
      <>
        <Typography gutterBottom variant="h6" component="div" className='sectionTitle alignCenter'>
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
            <Box className='floatingButtons'>
              sdfsd
            </Box>
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
                </CardContent>
            </CardActionArea>
          </Card>
          </Paper>
        </Box>
      
      </>
    );
  }