import React from 'react';
import NEWSDATA from '../components/NEWSDATA';
import { useParams } from 'react-router-dom';
import { Box, CardMedia, Typography } from '@mui/material';

import PostActions from '../components/PostActions';

const SingleNewsPost = () => {
    const params = useParams();
    const newsData = NEWSDATA.find(
        (news) =>
            news.title.replace(/\s+/g, '-').toLowerCase() +
                news.id.toString() ===
            params.titleId
    );

    // Массив с короткими формами названий месяцев
    const shortMonthNames = [
        'Січ',
        'Лют',
        'Бер',
        'Кві',
        'Тра',
        'Чер',
        'Лип',
        'Сер',
        'Вер',
        'Жов',
        'Лис',
        'Гру',
    ];

    // Получение компонентов даты
    const day = newsData.createdAt.getDate();
    const month = shortMonthNames[newsData.createdAt.getMonth()];
    const year = newsData.createdAt.getFullYear();

    // Создание отформатированной строки даты
    const formattedDate = `${month} ${day}, ${year}`;

    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: 680,
                textAlign: 'left',
                margin: 'auto',
            }}
        >
            <Typography variant="caption" gutterBottom>
                {formattedDate}
            </Typography>
            <Typography variant="h4" gutterBottom>
                {newsData.title}
            </Typography>
            <CardMedia
                component="img"
                alt="Your Image Alt Text"
                image={newsData.image}
                sx={{ mb: 4, height: '400px' }}
            />
            <Typography variant="body1" gutterBottom>
                {newsData.description}
            </Typography>
            <PostActions />
        </Box>
    );
};

export default SingleNewsPost;
