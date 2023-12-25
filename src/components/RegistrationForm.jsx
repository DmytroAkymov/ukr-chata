import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


const RegistrationForm = () => {

  const [users, setUsers] = useState([]);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const newUser = {email, name, password, confirmPassword}

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, newUser])
    setEmail('');
    setName('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <TextField
        size='small'
          label="Электронная почта"
          variant="standard"
          fullWidth
          margin="normal"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
        <TextField
          label="Имя"
          variant="standard"
          fullWidth
          margin="normal"
          value={name}
          onChange={handleNameChange}
        />
        <TextField
          label="Пароль"
          variant="standard"
          fullWidth
          margin="normal"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <TextField
          label="Повторите пароль"
          variant="standard"
          fullWidth
          margin="normal"
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        <TextField
          error
          id="standard-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="standard"
        />
        <Box sx={{ marginTop: 2 }}>
          <Button type="submit" variant="contained" color="primary">
            Зарегистрироваться
          </Button>
        </Box>
      </form>
      {users.map((user)=>{return <h1>{user.name}</h1>})}
    </Container>

  );
};

export default RegistrationForm;
