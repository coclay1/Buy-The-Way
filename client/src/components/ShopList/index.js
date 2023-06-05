import React from 'react';
// import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { CardActionArea } from '@mui/material';
import Armor from '../../images/shopArmor.jpg';
import Sword from '../../images/shopSword.jpg';
import Tavern from '../../images/shopTavern.jpg';
import Wands from '../../images/shopWands.jpg';
import Apothecary from '../../images/shopApothecary.jpg';


const ShopList = ({
    shops,
    title,
    showTitle = true,
}) => {


    return (
        <div>
            {showTitle && <h3>{title}</h3>}
            <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {shops.map((shop) => {
              let shopImage;
              if (shop.shopsName === "Wandas Wand Shop") {
                shopImage = Wands;
              } else if (shop.shopsName === "Swirlies Sword Shop" ) {
                shopImage = Sword;
              } else if (shop.shopsName === "Armies Armor Shop" ) {
                shopImage = Armor;
              } else if (shop.shopsName === "Apothecary Carries Shop" ) {
                  shopImage = Apothecary;
              } else if (shop.shopsName === "Tavares Tavern" ) {
                    shopImage = Tavern;
              } else {
                shopImage= "https://source.unsplash.com/random?wallpapers"
              }              
              return(
              <Grid item key={shop._id} xs={12} sm={6} md={6}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardActionArea href={`/shop/${shop._id}`}>
                    <CardMedia
                      component="div"
                      sx={{
                        // 16:9
                        pt: '56.25%',
                      }}
                      image={shopImage}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" align="center" component="div">
                        {shop.shopsName}
                      </Typography>

                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
          </Grid>
        </Container>
        </div>
    )
}

export default ShopList;