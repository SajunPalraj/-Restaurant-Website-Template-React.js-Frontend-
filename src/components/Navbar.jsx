import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: 'transparent' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', paddingY: 1 }}>
          {/* Logo */}
          <Typography
            variant="h4"
            component="div"
            sx={{
              fontFamily: "'Dancing Script', cursive",
              fontWeight: 700,
              flexGrow: { xs: 1, md: 0 },
              cursor: 'pointer'
            }}
          >
            Feane
          </Typography>

          {/* Nav Links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, alignItems: 'center' }}>
            <Typography component={Link} to="/" variant="button" sx={{ textDecoration: 'none', color: '#ffbe33', '&:hover': { color: '#ffbe33' }, cursor: 'pointer', transition: '0.3s' }}>
              Home
            </Typography>
            <Typography component={Link} to="/menu" variant="button" sx={{ textDecoration: 'none', color: 'inherit', '&:hover': { color: '#ffbe33' }, cursor: 'pointer', transition: '0.3s' }}>
              Menu
            </Typography>
            <Typography component={Link} to="/about" variant="button" sx={{ textDecoration: 'none', color: 'inherit', '&:hover': { color: '#ffbe33' }, cursor: 'pointer', transition: '0.3s' }}>
              About
            </Typography>
            <Typography component={Link} to="/book" variant="button" sx={{ textDecoration: 'none', color: 'inherit', '&:hover': { color: '#ffbe33' }, cursor: 'pointer', transition: '0.3s' }}>
              Book Table
            </Typography>
          </Box>

          {/* Icons and Button */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton color="inherit" sx={{ '&:hover': { color: '#ffbe33' }, transition: '0.3s' }}>
              <PersonIcon />
            </IconButton>
            <IconButton color="inherit" sx={{ '&:hover': { color: '#ffbe33' }, transition: '0.3s' }}>
              <ShoppingCartIcon />
            </IconButton>
            <IconButton color="inherit" sx={{ '&:hover': { color: '#ffbe33' }, transition: '0.3s' }}>
              <SearchIcon />
            </IconButton>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#ffbe33',
                color: 'white',
                borderRadius: '25px',
                padding: '6px 24px',
                textTransform: 'none',
                marginLeft: 2,
                display: { xs: 'none', sm: 'block' },
                '&:hover': {
                  backgroundColor: '#e6aa2c',
                },
              }}
            >
              Order Online
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
