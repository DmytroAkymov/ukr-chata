import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container } from '@mui/system';
import { Box, Typography } from '@mui/material';
import ButtonMenu from '../UI/ButtonMenu';
import { useDispatch } from 'react-redux';
import {toggleIsLogged} from '../store/authSlice'
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate()

  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setMail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(toggleIsLogged(true))
    setMail('');
    setPassword('');
    navigate('/userpanel')
  };

  return (
    <Container maxWidth="sm"> 
      <form onSubmit={handleSubmit}>
        <TextField
          label="Електронна пошта"
          variant="standard"
          fullWidth
          margin="normal"
          id="mail"
          name="mail"
          value={mail}
          onChange={handleUsernameChange}
        />
        <TextField
          type="password"
          label="Пароль"
          variant="standard"
          fullWidth
          margin="normal"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
            <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
              Войти
            </Button>
          </Box>
      </form>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
        <Typography variant="body1" paragraph sx={{ margin: 1, padding: 1 }}>
          Не маєш зареєстрованого акаунту?
        </Typography>
          <ButtonMenu link="/registration" sx={{ margin: 1, padding: 1 }}>
            Створити аккаунт
          </ButtonMenu>
      </Box>

    </Container>
  );
};

export default LoginForm;
