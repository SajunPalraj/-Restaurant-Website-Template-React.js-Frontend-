import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
function BookingSection() {
  return (
    <Box sx={{ p: { xs: 4, md: 8 }, maxWidth: '1200px', margin: '0 auto' }}>
      <Typography variant="h3" sx={{ fontFamily: "'Dancing Script', cursive", mb: 4, fontWeight: 'bold' }}>
        Book A Table
      </Typography>
      
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
        {/* Form Section */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3 }}>
          <TextField placeholder="Your Name" variant="outlined" fullWidth />
          <TextField placeholder="Phone Number" variant="outlined" fullWidth />
          <TextField placeholder="Your Email" variant="outlined" fullWidth />
          <TextField select defaultValue="" variant="outlined" fullWidth SelectProps={{ displayEmpty: true }}>
            <MenuItem value="" disabled>How many persons?</MenuItem>
            <MenuItem value={1}>1 Person</MenuItem>
            <MenuItem value={2}>2 Persons</MenuItem>
            <MenuItem value={3}>3 Persons</MenuItem>
            <MenuItem value={4}>4+ Persons</MenuItem>
          </TextField>
          <TextField type="date" variant="outlined" fullWidth InputLabelProps={{ shrink: true }} />
          
          <Button 
            variant="contained" 
            sx={{ 
              bgcolor: '#ffbe33', 
              color: 'white', 
              borderRadius: 8, 
              padding: '10px 40px', 
              fontWeight: 'bold',
              width: 'fit-content',
              mt: 2,
              '&:hover': { bgcolor: '#e6a622' },
              boxShadow: 'none'
            }}
          >
            BOOK NOW
          </Button>
        </Box>

        {/* Map Section */}
        <Box sx={{ flex: 1, minHeight: '350px', borderRadius: 2, overflow: 'hidden' }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280010078!2d-74.14448733355531!3d40.69766374859664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1714553255153!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0, minHeight: '100%' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>
        </Box>
      </Box>
    </Box>
  )
}

export default BookingSection
