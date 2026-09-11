import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// Import images
import imgBurger from '../asserts/Food(6).png';
import imgPizza from '../asserts/Food(7).png';
import imgPasta from '../asserts/Food(8).png'; // using as placeholder
import imgFries from '../asserts/Food(9).png'; // using as placeholder
import Button from '@mui/material/Button';
const menuItems = [
    { id: 1, category: 'Pizza', title: 'Delicious Pizza', desc: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque', price: '$20', img: imgPizza },
    { id: 2, category: 'Burger', title: 'Delicious Burger', desc: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque', price: '$15', img: imgBurger },
    { id: 3, category: 'Pizza', title: 'Delicious Pizza', desc: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque', price: '$17', img: imgPizza },
    { id: 4, category: 'Pasta', title: 'Delicious Pasta', desc: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque', price: '$18', img: imgPasta },
    { id: 5, category: 'Fries', title: 'French Fries', desc: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque', price: '$10', img: imgFries },
    { id: 6, category: 'Pizza', title: 'Delicious Pizza', desc: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque', price: '$15', img: imgPizza },
    { id: 7, category: 'Burger', title: 'Tasty Burger', desc: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque', price: '$12', img: imgBurger },
    { id: 8, category: 'Burger', title: 'Tasty Burger', desc: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque', price: '$14', img: imgBurger },
    { id: 9, category: 'Pasta', title: 'Delicious Pasta', desc: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque', price: '$10', img: imgPasta },
];

function TabSection() {
    const [activeTab, setActiveTab] = useState('All');

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    const filteredItems = activeTab === 'All'
        ? menuItems
        : menuItems.filter(item => item.category === activeTab);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <Box sx={{ paddingY: 10, textAlign: 'center' }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h3"
                    sx={{
                        fontFamily: "'Dancing Script', cursive",
                        fontWeight: 700,
                        mb: 4
                    }}
                >
                    Our Menu
                </Typography>

                {/* Custom Tabs */}
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
                    <Tabs
                        value={activeTab}
                        onChange={handleTabChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        allowScrollButtonsMobile
                        TabIndicatorProps={{ style: { display: 'none' } }} // Hide default underline
                        sx={{
                            "& .MuiTabs-indicator": {
                                display: "none",
                            },
                            '& .MuiTab-root': {
                                textTransform: 'none',
                                fontSize: '1rem',
                                minWidth: 'auto',
                                padding: '8px 24px',
                                margin: '0 8px',
                                borderRadius: '25px',
                                color: '#222831',
                                transition: 'all 0.3s',
                                '&.Mui-selected': {
                                    backgroundColor: '#222831',
                                    color: 'white',
                                }
                            }
                        }}
                    >
                        <Tab label="All" value="All" />
                        <Tab label="Burger" value="Burger" />
                        <Tab label="Pizza" value="Pizza" />
                        <Tab label="Pasta" value="Pasta" />
                        <Tab label="Fries" value="Fries" />
                    </Tabs>
                </Box>

                {/* Menu Grid */}
                <Grid container spacing={{ xs: 3, sm: 4 }} sx={{ textAlign: 'left', justifyContent: 'center' }}>
                    {filteredItems.map((item) => (
                        <Grid item xs={12} sm={6} md={6} lg={4} key={item.id} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Card
                                sx={{
                                    backgroundColor: '#222831',
                                    color: 'white',
                                    borderRadius: '15px',
                                    boxShadow: 'none',
                                    width: '100%',
                                    maxWidth: '450px',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                {/* Image Box */}
                                <Box
                                    sx={{
                                        backgroundColor: '#f1f2f3',
                                        padding: '30px',
                                        borderBottomLeftRadius: '40px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: '200px'
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={item.img}
                                        alt={item.title}
                                        sx={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                                    />
                                </Box>

                                {/* Content Box */}
                                <CardContent sx={{ padding: '25px' }}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#ccc', mb: 3, minHeight: '60px' }}>
                                        {item.desc}
                                    </Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                            {item.price}
                                        </Typography>
                                        <IconButton
                                            sx={{
                                                backgroundColor: '#ffbe33',
                                                color: 'white',
                                                '&:hover': { backgroundColor: '#e6aa2c' }
                                            }}
                                        >
                                            <ShoppingCartIcon />
                                        </IconButton>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Button sx={{ backgroundColor: '#ffbe33', color: 'white', borderRadius: '25px', padding: '10px 30px', textTransform: 'none', fontSize: '1rem', '&:hover': { backgroundColor: '#e6aa2c' }, justifyContent: 'center', mt: 7 }} onClick={goToTop}>Load More</Button>
        </Box>
    );
}

export default TabSection;
