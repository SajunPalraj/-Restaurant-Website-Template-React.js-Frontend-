import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import TabSection from './components/TabSection'
import HeroSection3 from './components/HeroSection3'
import BookingSection from './components/BookingSection'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Box from '@mui/material/Box'

function PageWrapper({ children }) {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ bgcolor: '#222831' }}>
        <Navbar />
      </Box>
      <Box sx={{ flex: 1, py: 5 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<PageWrapper><TabSection/></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><HeroSection3/></PageWrapper>} />
        <Route path="/book" element={<PageWrapper><BookingSection/></PageWrapper>} />
      </Routes>
    </Router>
  )
}

export default App
