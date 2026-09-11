import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { keyframes } from '@mui/system';

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;


const testimonials = [
    {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        name: "Moana Michell",
        subtitle: "magna aliqua",
        image: "https://themewagon.github.io/feane/images/client1.jpg"
    },
    {
        id: 2,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        name: "Mike Hamell",
        subtitle: "magna aliqua",
        image: "https://themewagon.github.io/feane/images/client2.jpg"
    },
    {
        id: 3,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        name: "John Doe",
        subtitle: "magna aliqua",
        image: "https://themewagon.github.io/feane/images/client1.jpg"
    },
    {
        id: 4,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        name: "Jane Smith",
        subtitle: "magna aliqua",
        image: "https://themewagon.github.io/feane/images/client2.jpg"
    }
];

function SliderSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('right');

    const handleNext = () => {
        setDirection('right');
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setDirection('left');
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const displayItems = [
        testimonials[currentIndex],
        testimonials[(currentIndex + 1) % testimonials.length]
    ];

    return (
        <Box sx={{ py: 8, px: { xs: 2, md: 8 }, maxWidth: '1200px', margin: '0 auto' }}>
            <Typography variant="h3" sx={{ fontFamily: "'Dancing Script', cursive", textAlign: 'center', mb: 6, fontWeight: 'bold' }}>
                What Says Our Customers
            </Typography>

            <Box 
                key={currentIndex} // Using key to re-trigger animation on index change
                sx={{ 
                    display: 'flex', 
                    flexDirection: { xs: 'column', md: 'row' }, 
                    gap: 4, 
                    justifyContent: 'center',
                    animation: `${direction === 'right' ? slideInLeft : slideInRight} 0.5s ease-out`
                }}
            >
                {displayItems.map((item, idx) => (
                    <Box key={item.id} sx={{ flex: 1, display: { xs: idx === 1 ? 'none' : 'block', md: 'block' } }}>
                        {/* Dark Card */}
                        <Box sx={{ bgcolor: '#222831', color: 'white', p: 4, borderRadius: 4, minHeight: '180px' }}>
                            <Typography sx={{ mb: 3 }}>
                                {item.text}
                            </Typography>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{item.name}</Typography>
                            <Typography variant="body2">{item.subtitle}</Typography>
                        </Box>

                        {/* Avatar with Triangle */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', ml: 4, mt: 3, position: 'relative' }}>
                            <Box sx={{
                                position: 'absolute',
                                top: -20,
                                left: 45,
                                width: 0,
                                height: 0,
                                borderLeft: '10px solid transparent',
                                borderRight: '10px solid transparent',
                                borderBottom: '20px solid #ffbe33'
                            }} />
                            <Box
                                component="img"
                                src={item.image}
                                alt={item.name}
                                sx={{
                                    width: 110,
                                    height: 110,
                                    borderRadius: '50%',
                                    border: '4px solid #ffbe33',
                                    objectFit: 'cover',
                                    position: 'relative',
                                    zIndex: 1
                                }}
                            />
                        </Box>
                    </Box>
                ))}
            </Box>

            {/* Navigation Buttons */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 6 }}>
                <IconButton
                    onClick={handlePrev}
                    sx={{
                        bgcolor: '#ffbe33',
                        color: 'white',
                        width: 45,
                        height: 45,
                        '&:hover': { bgcolor: '#e6a622' }
                    }}
                >
                    <ArrowBackIcon />
                </IconButton>
                <IconButton
                    onClick={handleNext}
                    sx={{
                        bgcolor: '#ffbe33',
                        color: 'white',
                        width: 45,
                        height: 45,
                        '&:hover': { bgcolor: '#e6a622' }
                    }}
                >
                    <ArrowForwardIcon />
                </IconButton>
            </Box>
        </Box>
    );
}

export default SliderSection;
