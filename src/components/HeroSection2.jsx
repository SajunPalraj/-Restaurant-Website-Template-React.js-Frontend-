import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import burgerImg from '../asserts/Food(6).png';
import pizzaImg from '../asserts/Food(7).png';

function OfferCard({ title, discount, image }) {
  return (
    <Box
      sx={{
        backgroundColor: '#222831',
        borderRadius: '10px',
        padding: { xs: '20px 10px', sm: '20px' },
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent:"space-around",
        alignItems: 'center',
        gap: { xs: 2, sm: 5 },
        color: 'white',
      }}
    >
      {/* Image Container */}
      <Box
        sx={{
          width: '160px',
          height: '160px',
          borderRadius: '50%',
          border: '4px solid #ffbe33',
          overflow: 'hidden',
          flexShrink: 0,
        }}
      >
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>

      {/* Text Container */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', sm: 'flex-start' }, textAlign: { xs: 'center', sm: 'left' } }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Dancing Script', cursive",
            mb: 1,
          }}
        >
          {title}
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', mr: 1 }}>
            {discount}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Dancing Script', cursive",
            }}
          >
            Off
          </Typography>
        </Box>

        <Button
          variant="contained"
          sx={{
            backgroundColor: '#ffbe33',
            color: 'white',
            borderRadius: '25px',
            padding: '8px 24px',
            textTransform: 'none',
            fontSize: '1rem',
            '&:hover': {
              backgroundColor: '#e6aa2c',
            },
          }}
        >
          Order Now
          <ShoppingCartIcon sx={{ ml: 1, fontSize: '1.2rem' }} />
        </Button>
      </Box>
    </Box>
  );
}

function HeroSection2() {
  return (
    <Box sx={{ paddingY: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 8 }} sx={{justifyContent:'space-around'}}>
          <Grid item xs={12} md={6}>
            <OfferCard title="Tasty Thursdays" discount="20%" image={burgerImg} />
          </Grid>
          <Grid item xs={12} md={6}>
            <OfferCard title="Pizza Days" discount="15%" image={pizzaImg} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HeroSection2;
