import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useState } from 'react';

const Posts = () => {
    const [alignment, setAlignment] = useState('');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <ToggleButtonGroup
            size="small"
            color="standard"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
        >
            <ToggleButton
                value="web"
                style={{ textTransform: 'none', fontSize: '14px' }}
            >
                Популярне
            </ToggleButton>
            <ToggleButton
                value="android"
                style={{ textTransform: 'none', fontSize: '14px' }}
            >
                Нове
            </ToggleButton>
        </ToggleButtonGroup>
    );
};

export default Posts;
