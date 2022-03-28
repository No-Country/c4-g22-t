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


export default function FeatureProduct() {
    return (
      <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 238,
          },
        }}
      >
        <Paper elevation={3}>
        <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image="https://www.clara.es/medio/2021/01/27/camiseta-mensaje-slow_2911375e_800x1199.jpg"
          alt="camiseta"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" className='titleProduct'>
            Camiseta
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Typography  variant="button" component="div" className='titleProduct' className='price'>
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