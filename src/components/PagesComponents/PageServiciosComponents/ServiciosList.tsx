import SERVICES from '@/assets/servicios';
import { Box, Typography } from '@mui/material';
import { Poppins } from 'next/font/google';
import ServiciosCard from './ServiciosCard';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '600'] });

const ServiciosList: React.FC = () => {
  return (
    <Box
      minWidth='100vw'
      minHeight='90vh'
      sx={{ backgroundColor: '#fff' }}
      textAlign='center'
      py='20px'
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
        alignItems='center'
        justifyContent='center'
        maxWidth='90%'
        flexWrap='wrap'
        gap='10px'
        mt='20px'
        mx='auto'
      >
        {SERVICES.map((s, index) => (
          <ServiciosCard key={index} data={s} />
        ))}
      </Box>
    </Box>
  );
};

export default ServiciosList;
