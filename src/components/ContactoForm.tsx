import {
  Box,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from '@mui/material';
import { useState } from 'react';

interface dataForm {
  nombre: string;
  email: string;
  asunto: string;
  description: string;
}

const INITIAL_FORM: dataForm = {
  nombre: '',
  email: '',
  asunto: '',
  description: '',
};

const ContactoForm: React.FC = () => {
  const [data, setData] = useState<dataForm>(INITIAL_FORM);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <Box
      component='form'
      autoComplete='off'
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      minWidth='35%'
    >
      <Box display='flex' minWidth='100%' gap='20px'>
        <FormControl error variant='standard' fullWidth>
          <InputLabel htmlFor='component-error'>Name</InputLabel>
          <Input
            name='nombre'
            id='component-error'
            aria-describedby='component-error-text'
            onChange={handleChange}
            value={data.nombre}
          />
          {data.nombre === ' ' && (
            <FormHelperText id='component-error-text'>Error</FormHelperText>
          )}
        </FormControl>
        <FormControl error variant='standard' fullWidth>
          <InputLabel htmlFor='component-error'>Email</InputLabel>
          <Input
            id='component-error'
            aria-describedby='component-error-text'
            onChange={handleChange}
            value={data.email}
            name='email'
          />
          <FormHelperText id='component-error-text'>Error</FormHelperText>
        </FormControl>
      </Box>

      <FormControl error variant='standard' fullWidth>
        <InputLabel htmlFor='component-error'>Asunto</InputLabel>
        <Input
          id='component-error'
          aria-describedby='component-error-text'
          onChange={handleChange}
          value={data.asunto}
          name='asunto'
        />
        <FormHelperText id='component-error-text'>Error</FormHelperText>
      </FormControl>
      <FormControl error variant='standard' fullWidth>
        <InputLabel htmlFor='component-error'>Descripción</InputLabel>
        <Input
          id='component-error'
          aria-describedby='component-error-text'
          onChange={handleChange}
          value={data.description}
          name='description'
        />
        <FormHelperText id='component-error-text'>Error</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default ContactoForm;
