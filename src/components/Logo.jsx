import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';

import logo from '../images/logo.svg';

const Logo = () => {
    return (
        <Box>
            <Link to="/">
                <img
                    src={logo}
                    alt="Logo"
                    style={{
                        width: '230px',
                        height: 'auto',
                        paddingLeft: '8px',
                    }}
                />
            </Link>
        </Box>
    );
};

export default Logo;
