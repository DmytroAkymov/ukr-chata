import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

const PostActions = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton size="small" sx={{ color: 'grey.500' }}>
                    <CommentIcon />
                </IconButton>
                <IconButton size="small" sx={{ color: 'grey.500' }}>
                    <ThumbUpIcon />
                </IconButton>
                <IconButton size="small" sx={{ color: 'grey.500' }}>
                    <ThumbDownIcon />
                </IconButton>
                <IconButton size="small" sx={{ color: 'grey.500' }}>
                    <FavoriteIcon />
                </IconButton>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton size="small" sx={{ color: 'grey.500' }}>
                    <ShareIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default PostActions;
