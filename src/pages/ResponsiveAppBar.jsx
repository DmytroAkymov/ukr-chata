import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';

import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import GiteIcon from '@mui/icons-material/Gite';

import ButtonMenu from '../UI/ButtonMenu';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    
    const isLogged = useSelector(state => state.auth.isLogged)

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: '#fff', // Устанавливаем белый фон
                color: 'black',
                borderBottom: '1px solid #ccc', // Добавляем линию внизу
                boxShadow: 'none',
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link
                        to="/"
                        style={{
                            textDecoration: 'none',
                            color: 'inherit',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <GiteIcon
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                mr: 1,
                                fontSize: '2rem',
                            }}
                        />
                        <Typography
                            variant="title-lg"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'Roboto',
                                fontWeight: 700,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Українська хата &nbsp;
                            <Typography
                                variant="title-lg"
                                noWrap
                                component="a"
                                href="#app-bar-with-responsive-menu"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'Roboto',
                                    fontWeight: 100,
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                у Вроцлаві
                            </Typography>
                        </Typography>
                    </Link>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {/* {pages.map((page) => (
                                <MenuItem
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center">
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))} */}

                            <ButtonMenu link="/news">Новини</ButtonMenu>
                            <ButtonMenu link="/events">Куди піти</ButtonMenu>
                            <ButtonMenu link="/services">Послуги</ButtonMenu>
                            <ButtonMenu link="/forum">Форум</ButtonMenu>
                            <ButtonMenu link="/contacts">
                                Наші контакти
                            </ButtonMenu>
                        </Menu>
                    </Box>
                
                    <GiteIcon
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            mr: 1,
                            fontSize: '2rem',
                        }}
                    />
                    <Typography
                        variant="title-lg"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'Roboto',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Українська хата &nbsp;
                        <Typography
                            variant="title-lg"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'Roboto',
                                fontWeight: 100,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            у Вроцлаві
                        </Typography>
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                        }}
                    >
                        {/* {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'black', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))} */}

                        <ButtonMenu link="/news">Новини</ButtonMenu>
                        <ButtonMenu link="/events">Куди піти</ButtonMenu>
                        <ButtonMenu link="/services">Послуги</ButtonMenu>
                        <ButtonMenu link="/forum">Форум</ButtonMenu>
                        <ButtonMenu link="/contacts">Наші контакти</ButtonMenu>
                    </Box>

                    {isLogged ?  <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{ p: 0 }}
                            >
                                <Avatar
                                    alt="Remy Sharp"
                                    src="/static/images/avatar/2.jpg"
                                />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem
                                    key={setting}
                                    onClick={handleCloseUserMenu}
                                >
                                    <Typography textAlign="center">
                                        {setting}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box> : <ButtonMenu link="/login">Увійти</ButtonMenu> }
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
