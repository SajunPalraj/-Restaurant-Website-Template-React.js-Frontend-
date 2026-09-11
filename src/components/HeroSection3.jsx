import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import React from 'react'
import img from "../Asserts/Food(12).png"
import Button from '@mui/material/Button';
function HeroSection3() {
  return (
    <>
      <Box>
        <Box sx={{bgcolor:"#222831",padding:{xs: 4, md: 7},display:"flex", flexDirection: {xs: 'column', md: 'row'}, justifyContent:'space-around',alignItems:"center",gap:{xs: 4, md: 10}}}>
            <Box component='img' src={img} alt="" sx={{ height: {xs: 'auto', md: '600px'}, width: {xs: '100%', sm: '80%', md: '450px'}, maxWidth: '100%' }}/>
            <Box sx={{ textAlign: {xs: 'center', md: 'left'} }}>
                <Typography sx={{fontFamily:"'Dancing Script', cursive",color:"#ffbe33",fontSize:{xs: 35, md: 45}}}>
                    For Extraordinay Taste
                </Typography>
                <Box>
                    <Typography sx={{color:"#ffff",fontSize:{xs: "15px", md: "18px"},fontWeight:"bold",fontFamily:"'Poppins', sans-serif"}}>
                        Every Bite Was A Revelation. From the First Taste,
        I Knew I’d Found My New Favorite Spot. The Atmosphere
        Was Warm, the Service Was Attentive, and the Food...
        The Food Was Simply Out of This World.
                    </Typography>
                    <Button sx={{color:'white',bgcolor:'#ffbe33',borderRadius:4,padding:1,marginTop:2,fontWeight:"bold"}}>Read More</Button>
                </Box>
            </Box>
        </Box>
      </Box>
    </>
  )
}

export default HeroSection3
