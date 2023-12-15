import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const NewsCard = (props) => {
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
                    height="140"
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
            </CardActionArea>
        </Card>
    );
};

export default NewsCard;
