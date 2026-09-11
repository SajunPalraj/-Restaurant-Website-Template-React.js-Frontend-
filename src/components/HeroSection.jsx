import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Navbar from './Navbar';
import heroBg from '../asserts/hero-bg.jpg';

function HeroSection() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Navbar />
      <Container
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          color: 'white',
          paddingBottom: '10vh',
          paddingTop: '5vh',
        }}
      >
        <Box sx={{ maxWidth: '600px' }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontFamily: "'Dancing Script', cursive",
              fontWeight: 700,
              fontSize: { xs: '3rem', md: '4rem' },
              mb: 2,
            }}
          >
            Fast Food Restaurant
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              lineHeight: 1.8,
              fontSize: '1rem',
            }}
          >
            Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#ffbe33',
              color: 'white',
              borderRadius: '25px',
              padding: '10px 30px',
              textTransform: 'none',
              fontSize: '1rem',
              '&:hover': {
                backgroundColor: '#e6aa2c',
              },
            }}
          >
            Order Now
          </Button>
        </Box>
      </Container>
      
    </Box>
  );
}

export default HeroSection;
