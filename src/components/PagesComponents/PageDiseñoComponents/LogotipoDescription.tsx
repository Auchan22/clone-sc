import { Box, Typography } from '@mui/material';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '600'] });

export const LogotipoDescription: React.FC = () => {
  return (
    <Box
      minWidth='100vw'
      minHeight='60vh'
      display='flex'
      alignItems='center'
      justifyContent='center'
      flexDirection={{ xs: 'column', md: 'row' }}
    >
      <Box minWidth='50%'></Box>
      <Box
        display='flex'
        alignItems='flex-start'
        justifyContent='center'
        gap='20px'
        flexDirection='column'
        maxWidth={{ xs: '90%', md: '40%' }}
        maxHeight='100%'
      >
        <Typography
          className={poppins.className}
          fontWeight={300}
          fontSize='0.8rem'
        >
          #CrecemosJuntos
        </Typography>
        <Typography
          className={poppins.className}
          fontWeight={600}
          fontSize='1.5rem'
        >
          Más que un logotipo
        </Typography>
        <Typography
          className={poppins.className}
          fontWeight={300}
          fontSize='0.8rem'
        >
          ¿Ya tienes la imagen de tu proyecto? Es hora de dar un concepto,
          personalidad y estilo a tu marca. Hacemos muchísimo más que solo un
          logotipo.
        </Typography>
        <Typography
          className={poppins.className}
          fontWeight={300}
          fontSize='0.8rem'
        >
          Nos gusta crear proyectos únicos, que sean funcionales, llamen la
          atención y destaquen de la competencia. Construir y fortalecer la
          marca para generar conexiones valiosas entre los interés de nuestros
          clientes.
        </Typography>
      </Box>
    </Box>
  );
};
