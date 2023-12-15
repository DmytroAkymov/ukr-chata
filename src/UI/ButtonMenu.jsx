import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function ButtonMenu(props) {
    return (
        <Box sx={{ '& > button': { m: 1, textTransform: 'none' } }}>
            <Button size="small" color="inherit">
                <Link
                    to={props.link}
                    style={{
                        textDecoration: 'none',
                        color: 'black',
                        fontSize: '14px',
                    }}
                >
                    {props.children}
                </Link>
            </Button>
        </Box>
    );
}
