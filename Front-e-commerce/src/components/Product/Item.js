import {Link} from 'react-router-dom';
import '@fontsource/roboto/500.css';
import { CardActionArea, Button, Typography, CardMedia, CardContent, Card, Paper, Box } from '@mui/material';
import './featureProduct.css'
<style>
</style>

const urlImgs="/products/"



export default function Item({data}) {

  const {id, title, price, detail, img, stock, category} = data


    return (
      <>
       
        
          <Paper>
          <Card>
            <Link to={`/producto/${category}/${id}`}>
            <CardActionArea>
                <CardMedia
                  component="img"
                  height="230"
                  image={urlImgs+img}
                  alt="camiseta"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" className='titleProduct alignCenter'>
                    {title}
                  </Typography>
                  <Typography gutterBottom variant="body2" color="text.secondary" className='alignCenter'>
                    {category}
                  </Typography>
                  <Typography  variant="button" component="div" className='price alignCenter'>
                    $ {price}
                  </Typography>
                  <Button sx={{marginY:'20px'}}variant="outlined" fullWidth={true}
                                    size="large"
                                    > Agregar al carrito
                                </Button>
                </CardContent>
            </CardActionArea>
            </Link>
          </Card>
          </Paper>
      
      </>
    );
  }