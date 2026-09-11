import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';

function Footer() {
  return (
    <Box sx={{ bgcolor: '#222831', color: 'white', pt: 8, pb: 4, px: { xs: 2, md: 8 } }}>
      <Box sx={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', gap: 6, textAlign: 'center' }}>
        
        {/* Contact Us */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <Typography variant="h4" sx={{ fontFamily: "'Dancing Script', cursive", mb: 1 }}>
            Contact Us
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LocationOnIcon fontSize="small" />
            <Typography variant="body1">Location</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <PhoneIcon fontSize="small" />
            <Typography variant="body1">Call +01 1234567890</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <EmailIcon fontSize="small" />
            <Typography variant="body1">demo@gmail.com</Typography>
          </Box>
        </Box>

        {/* Feane */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <Typography variant="h3" sx={{ fontFamily: "'Dancing Script', cursive", mb: 1 }}>
            Feane
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: '300px' }}>
            Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
            <IconButton sx={{ width: 35, height: 35, bgcolor: 'white', color: '#222831', '&:hover': { bgcolor: '#ffbe33', color: 'white' } }}>
              <FacebookIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ width: 35, height: 35, bgcolor: 'white', color: '#222831', '&:hover': { bgcolor: '#ffbe33', color: 'white' } }}>
              <TwitterIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ width: 35, height: 35, bgcolor: 'white', color: '#222831', '&:hover': { bgcolor: '#ffbe33', color: 'white' } }}>
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ width: 35, height: 35, bgcolor: 'white', color: '#222831', '&:hover': { bgcolor: '#ffbe33', color: 'white' } }}>
              <InstagramIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ width: 35, height: 35, bgcolor: 'white', color: '#222831', '&:hover': { bgcolor: '#ffbe33', color: 'white' } }}>
              <PinterestIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>

        {/* Opening Hours */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <Typography variant="h4" sx={{ fontFamily: "'Dancing Script', cursive", mb: 1 }}>
            Opening Hours
          </Typography>
          <Typography variant="body1">Everyday</Typography>
          <Typography variant="body1">10.00 Am -10.00 Pm</Typography>
        </Box>

      </Box>

      {/* Copyright */}
      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <Typography variant="body2" sx={{ mb: 1 }}>
          © 2026 All Rights Reserved
        </Typography>
        <Typography variant="body2">
          © SAJUN
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer;
