import AGENCIAS from '@/assets/agencia';
import { Box, Typography } from '@mui/material';
import AgenciaCard from './AgenciaCard';

const Agencia: React.FC = () => {
  return (
    <Box
      display='flex'
      my='50px'
      minWidth='100vw'
      minHeight='80vh'
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
      gap='20px'
    >
      <Typography
        variant='h5'
        fontSize='24px'
        maxWidth={{ xs: '90%', md: '50%' }}
        textAlign='center'
        fontWeight='bolder'
        fontFamily='Poppins'
      >
        ¿Tienes una agencia de marketing o quieres tener una?
      </Typography>
      <Typography
        variant='h6'
        fontSize='14px'
        maxWidth={{ xs: '90%', md: '50%' }}
        textAlign='center'
        fontFamily='Poppins'
        color='#b4b4b4'
      >
        Trabajamos como marca blanca para tu agencia. Tu marca, tus precios,
        nuestra infraestructura y personal.
      </Typography>

      <Box
        display='flex'
        alignItems={{ xs: 'center', md: 'flex-start' }}
        justifyContent='center'
        flexDirection={{ xs: 'column', md: 'row' }}
        gap='15px'
        maxHeight='70%'
      >
        {AGENCIAS.map((a, index) => (
          <AgenciaCard key={index} data={a} />
        ))}
      </Box>
    </Box>
  );
};

export default Agencia;
