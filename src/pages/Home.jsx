import { Box, Typography } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 680,

        minHeight: 780,
        margin: "auto",
      }}
    >
      <Typography variant="h5" gutterBottom>
        "Ласкаво просимо на наш віртуальний портал: об'єднання українців у
        Вроцлаві!"
      </Typography>
      <Typography variant="body1" paragraph>
        Наш сайт - це віртуальна площадка для українців у Вроцлаві. Ми створили
        цей ресурс, щоб об'єднати українську громаду в місті та забезпечити
        зручний інтернет-простір для обміну новинами, подіями, послугами та
        думками. Тут ви знайдете інформацію про найближчі події, корисні
        сервіси, а також можливість спілкування на форумі. Наша мета - створити
        віртуальну "українську хату" у Вроцлаві, де кожен українець може знайти
        щось цікаве і корисне для себе. Ласкаво просимо до нашої спільноти!
      </Typography>
      <Typography variant="body1" paragraph>
        Тест
      </Typography>
    </Box>
  );
};

export default Home;
