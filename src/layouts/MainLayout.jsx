import { Outlet } from 'react-router-dom';
import { Box, Stack } from '@mui/material';

import ResponsiveAppBar from '../pages/ResponsiveAppBar';
import Footer from '../pages/Footer';

const MainLayout = () => {
    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    maxWidth: 1200,
                    margin: 'auto',
                    padding: '60px',
                    textAlign: 'left',
                }}
            >
                <ResponsiveAppBar />
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{
                        backgroundColor: '#ffffff',
                    }}
                ></Stack>

                <Stack
                    sx={{
                        padding: '16px',
                        backgroundColor: '#ffffff',
                    }}
                >
                    {/* <Posts /> */}
                </Stack>

                <Outlet />
                <Footer />
            </Box>
        </>
    );
};

export default MainLayout;
