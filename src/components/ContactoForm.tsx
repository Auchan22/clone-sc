import { Box, FormControl, FormHelperText, TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { ValidationRule } from 'react-hook-form/dist/types';

import emailjs from '@emailjs/browser';

import { StyledButton } from './Subscribe';
import { useRef } from 'react';

interface FormInputTextProps {
  name: string;
  control: any;
  label: string;
  pattern?: ValidationRule<RegExp>;
}

const FormInputText: React.FC<FormInputTextProps> = ({
  control,
  label,
  name,
  pattern,
}) => {
  return (
    <FormControl variant='standard' fullWidth>
      <Controller
        name={name}
        control={control}
        rules={{ required: true, pattern: pattern }}
        render={({
          field: { onChange, value, onBlur },
          fieldState: { invalid, error, isDirty },
        }) => (
          <>
            <TextField
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              label={label}
              variant='standard'
              sx={{
                fontFamily: 'Poppins',
                label: { color: '#fff' },
                input: { color: '#fff' },
              }}
            />
            {error?.type === 'pattern' && (
              <FormHelperText
                id='component-error-text'
                sx={{ fontFamily: 'Poppins', color: '#fff !important' }}
              >
                El input no cumple cierta condición
              </FormHelperText>
            )}
            {error?.type === 'required' && (
              <FormHelperText
                id='component-error-text'
                sx={{ fontFamily: 'Poppins', color: '#fff !important' }}
              >
                El input es requerido
              </FormHelperText>
            )}
          </>
        )}
      />
    </FormControl>
  );
};

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
  const { control, handleSubmit, reset } = useForm<dataForm>({
    defaultValues: INITIAL_FORM,
    mode: 'onBlur',
  });

  const onSubmit = (e: any) => {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICEID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID_MEETING as string,
        e,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLICKEY as string,
      )
      .then(
        (result: any) => {
          // console.log(result.text);
          alert('Email enviado correctamente');
          reset();
        },
        (error: any) => {
          console.log(error.text);
          console.log(e);
        },
      );
  };

  return (
    <Box
      component='form'
      autoComplete='off'
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      gap='20px'
      minWidth='35%'
      onSubmit={handleSubmit(onSubmit)}
    >
      <Box display='flex' minWidth='100%' gap='20px'>
        <FormInputText control={control} label='Nombre' name='nombre' />
        <FormInputText
          control={control}
          label='Email'
          name='email'
          pattern={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}
        />
      </Box>
      <FormInputText control={control} label='Asunto' name='asunto' />
      <FormInputText control={control} label='Descripcion' name='description' />
      <StyledButton type='submit'>Enviar</StyledButton>
    </Box>
  );
};

export default ContactoForm;
