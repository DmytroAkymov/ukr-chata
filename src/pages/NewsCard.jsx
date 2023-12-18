import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { Box, CardActionArea, Divider } from '@mui/material';

import { Link } from 'react-router-dom';

const NewsCard = (props) => {
    const { dataNews } = props;

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

    const day = dataNews.createdAt.getDate();
    const month = shortMonthNames[dataNews.createdAt.getMonth()];
    const year = dataNews.createdAt.getFullYear();

    const formattedDate = `${month} ${day}, ${year}`;
    return (
        <Card sx={{ maxWidth: 345, backgroundColor: '#f0f0f0' }} key={props.id}>
            <CardActionArea
                component={Link}
                to={`/news/${
                    props.dataNews.title.replace(/\s+/g, '-').toLowerCase() +
                    props.dataNews.id.toString()
                }`}
            >
                <CardMedia
                    component="img"
                    height="180"
                    image={props.dataNews.image}
                    alt={props.dataNews.alt}
                />
                <CardContent sx={{ overflow: 'hidden' }}>
                    <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                    >
                        {props.dataNews.title}
                    </Typography>
                </CardContent>

                <Divider inset="context" />
                <CardContent orientation="horizontal">
                    <Box display="flex" justifyContent="space-between">
                        <Typography
                            level="body-xs"
                            fontWeight="md"
                            textColor="text.secondary"
                        >
                            6.3k views
                        </Typography>
                        <Divider orientation="vertical" />
                        <Typography
                            level="body-xs"
                            fontWeight="md"
                            textColor="text.secondary"
                        >
                            {formattedDate}
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default NewsCard;
