import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: 'background.paper',
                color: 'text.primary',
                mt: 'auto',
                py: 4,
                borderTop: '1px solid #ccc',
                marginTop: 4,
            }}
        >
            <Container maxWidth="xl">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Про нас
                        </Typography>
                        <Typography>
                            Наша мета - створити віртуальну "українську хату" у
                            Вроцлаві, де кожен українець може знайти щось цікаве
                            і корисне для себе. Ласкаво просимо до нашої
                            спільноти!
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Швидкі посилання
                        </Typography>
                        <Typography
                            sx={{
                                '& a': {
                                    textDecoration: 'none',
                                    color: 'inherit',
                                },
                            }}
                        >
                            <Link to="/">Головна</Link>
                            <br />
                            <Link to="/news">Новини</Link>
                            <br />
                            <Link to="/events">Куди піти</Link>
                            <br />
                            <Link to="/services">Послуги</Link>
                            <br />
                            <Link to="/forum">Форум</Link>
                            <br />
                            <Link to="/contacts">Наші контакти</Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Соціальні мережі
                        </Typography>
                        <Link to="/" style={{ color: 'black' }}>
                            <TwitterIcon />
                        </Link>
                        <Link to="/" style={{ color: 'black' }}>
                            <FacebookIcon />
                        </Link>
                        <Link to="/" style={{ color: 'black' }}>
                            <LinkedInIcon />
                        </Link>
                        <Link to="/" style={{ color: 'black' }}>
                            <InstagramIcon />
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Зв'яжіться з нами
                        </Typography>
                        <Typography>Email: support@gmail.com</Typography>
                    </Grid>
                </Grid>
                <Box sx={{ mt: 4 }}>
                    <Typography variant="body2" color="text.secondary">
                        © {new Date().getFullYear()} Your Company. All rights
                        reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
