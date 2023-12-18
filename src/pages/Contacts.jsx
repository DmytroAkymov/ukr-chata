import React from 'react';

import { Box, Typography } from '@mui/material';

const Contacts = () => {
    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: 680,
                minHeight: 780,
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
    );
};

export default Contacts;
