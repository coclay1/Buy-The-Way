import React from 'react';
// import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
// import CameraIcon from '@mui/icons-material/PhotoCamera';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


const Shop = ({
    items,
    shopName,
    showTitle = true,
}) => {


    return (
        <div>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              {shopName}
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              The following items are available in this shop:
            </Typography>
          </Container>
        </Box>
            <Container sx={{ py: 8 }} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                    {items.map((item) => (
                        <Grid item key={item._id} xs={12} sm={6} md={6}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                
                                    <CardMedia
                                        component="div"
                                        sx={{
                                            // 16:9
                                            pt: '56.25%',
                                        }}
                                        image="https://source.unsplash.com/random?wallpapers"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" align="center" component="div">
                                            {item.itemName}
                                            <div></div>
                                            {item.itemPrice}
                                        </Typography>

                                    </CardContent>
                                
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            </div>
    )
}

export default Shop;