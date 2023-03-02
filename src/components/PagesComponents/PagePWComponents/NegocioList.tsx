import PAGINAS from '@/assets/pages';
import { Box, Typography } from '@mui/material';
import { NegocioCard } from './NegocioCard';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '600'] });

export const NegocioList: React.FC = () => {
  return (
    <Box
      minWidth='100vw'
      minHeight='100vh'
      p='20px 25px'
      sx={{ backgroundColor: '#fff' }}
      textAlign='center'
    >
      <Typography
        fontWeight={600}
        fontSize='1.5rem'
        className={poppins.className}
        color='rgb(58, 32, 109)'
      >
        Todos nuestros Servicios
      </Typography>
      <Typography
        fontWeight={300}
        fontSize='0.8rem'
        className={poppins.className}
      >
        Contamos con un servicio para cada necesidad
      </Typography>
      <Box
        display='flex'
        gap='20px'
        alignItems='center'
        justifyContent='center'
        flexDirection={{ xs: 'column', md: 'row' }}
        mx='auto'
      >
        {PAGINAS.map((p, index) => (
          <NegocioCard data={p} key={index} />
        ))}
      </Box>
    </Box>
  );
};
