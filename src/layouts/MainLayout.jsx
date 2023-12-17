import { Outlet } from 'react-router-dom';
import { Box, Stack } from '@mui/material';

import Logo from '../components/Logo';

import ResponsiveAppBar from '../pages/ResponsiveAppBar';
import MenuLink from '../pages/MenuLink';

const MainLayout = () => {
    return (
        <>
            <ResponsiveAppBar />
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
                    <MenuLink />
                </Stack>

                <Stack
                    sx={{
                        padding: '16px',
                        backgroundColor: '#ffffff',
                    }}
                >
                    {/* <Posts /> */}
                </Stack>

                <Outlet />
            </Box>
        </>
    );
};

export default MainLayout;
