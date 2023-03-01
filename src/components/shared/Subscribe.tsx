import { Box, TextField, Typography } from '@mui/material';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from '@emotion/styled';

export const StyledButton = styled.button`
  background-color: #7b00ff;
  font-family: 'Poppins';
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  width: 100%;
  margin-top: 10px;
  color: #fff;
  transition: 'all 125ms ease-in';
  &:hover {
    cursor: pointer;
    background-color: #6304c9;
    transition: 'all 125ms ease-in';
  }
`;

export const Subscribe: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const form = useRef(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email === '' || !emailRegex.test(email)) {
      alert('El mail es invalido');
      return;
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICEID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID as string,
        form.current!!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLICKEY as string,
      )
      .then(
        (result: any) => {
          console.log(result.text);
          alert('Email enviado correctamente');
          setEmail('');
        },
        (error: any) => {
          console.log(error.text);
          console.log(form.current);
        },
      );
  };
  return (
    <Box
      minWidth='100vw'
      minHeight='60vh'
      display='flex'
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
    >
      <Box textAlign='center'>
        <Typography fontFamily='Poppins' fontWeight='bold' fontSize='1.5rem'>
          ¿Quieres recibir promociones?
        </Typography>
        <Typography fontFamily='Poppins' fontSize='0.8rem'>
          No te pierdas de ninguna novedad, suscríbete y obtén grandes
          beneficios
        </Typography>
      </Box>
      <form style={{ marginTop: '20px' }} ref={form} onSubmit={sendEmail}>
        <TextField
          value={email}
          onChange={handleChange}
          id='email'
          name='email'
          label='Email'
          variant='filled'
          sx={{
            width: '100%',
            fontSize: '12px !important',
            fontFamily: 'Poppins !important',
            background: 'transparent',
          }}
        />
        <StyledButton type='submit'>Enviar</StyledButton>
      </form>
    </Box>
  );
};
