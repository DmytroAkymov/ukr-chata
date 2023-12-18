import React, { useState } from 'react';
import { Box, Grid, Pagination } from '@mui/material';
import NewsCard from './NewsCard';
import NEWSDATA from '../components/NEWSDATA';

const NewsList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    const totalPages = Math.ceil(NEWSDATA.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = NEWSDATA.slice(startIndex, endIndex);

    const handleChangePage = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: 1200,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 'auto',
                // minHeight: 780,
            }}
        >
            <Grid container spacing={3} sx={{ mb: 4 }}>
                {currentData.map((news) => (
                    <Grid item xs={12} sm={6} md={4} lg={4} key={news.id}>
                        <NewsCard dataNews={news} key={news.id} />
                    </Grid>
                ))}
            </Grid>
            <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handleChangePage}
                sx={{
                    marginTop: 'auto',
                }}
            />
        </Box>
    );
};

export default NewsList;
