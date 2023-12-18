import React from 'react';

import { Box, Typography } from '@mui/material';

const Contacts = () => {
    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: 1200,
                textAlign: 'center',
                minHeight: 780,
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    maxWidth: 1200,
                    textAlign: 'left',
                    margin: 'auto',
                }}
            >
                <Typography variant="h3" gutterBottom>
                    Будемо на зв'язку
                </Typography>
                <Typography variant="h6" gutterBottom>
                    Допомога та підтримка. Запити електронною поштою:
                </Typography>
                <Typography variant="h4" gutterBottom>
                    support@gmail.com
                </Typography>
            </Box>
        </Box>
    );
};

export default Contacts;
