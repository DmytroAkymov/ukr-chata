import { Outlet } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import Menu from '../pages/Menu';
import Logo from '../components/Logo';
import Promo from '../components/Promo';
import Posts from '../components/Posts';

const MainLayout = () => {
    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    maxWidth: 1200,
                    margin: 'auto',
                    textAlign: 'left',
                }}
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{
                        backgroundColor: '#ffffff',
                    }}
                >
                    <Logo />
                    <Menu />
                </Stack>
                <Promo />
                <Stack
                    sx={{
                        padding: '16px',
                        backgroundColor: '#ffffff',
                    }}
                >
                    <Posts />
                </Stack>

                <Outlet />
            </Box>
        </>
    );
};

export default MainLayout;
