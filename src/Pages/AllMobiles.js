import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import mainlogo from '../Images/mainimg.png';
import axios from 'axios';

export default function AllMobiles() {
  const [mobileData, setMobileData] = useState([]);

  useEffect(() => {
    // Use Axios to fetch data from the Fake Store API
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        const products = response.data;
        console.log(products); // Log the API response to verify the structure
        setMobileData(products); // Set the data in the state
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <a href='/'>
        <img src={mainlogo} alt='img ' width='100%' height='200px' />
      </a>
      <div className='container m-3'>
        <h3 className='text-center custom-text fs-1 my-5 fw-bold'>Mobiles categories</h3>
      </div>
      <Grid container spacing={3}>
        {mobileData &&
          mobileData.map((postMobile) => {
            const { id, image, title, rating, price, description } = postMobile;
            return (
              <Grid item xs={12} sm={6} md={4} key={id}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea key={id}>
                    <CardMedia component='img' alt={title} height='240' image={image} />
                    <CardContent>
                      <Typography gutterBottom variant='h5' component='div'>
                        {title}
                      </Typography>
                      <Typography variant='body2' color='text.secondary'>
                        {description}
                      </Typography>
                      <Typography>
                        <AttachMoneyIcon /> {price}
                      </Typography>
                      <Typography>
                        <StarRateIcon /> {rating.rate}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
}
