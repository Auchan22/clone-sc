import PLANESPREMIUM from '@/assets/planesPremium';
import { Box, Typography } from '@mui/material';
import { Poppins } from 'next/font/google';
import { PlanesPremiumCard } from './PlanesPremiumCard';
const poppins = Poppins({ subsets: ['latin'], weight: ['300', '500'] });

export const PlanesPremiumList: React.FC = () => {
  return (
    <Box
      py='10%'
      sx={{ backgroundColor: '#fff', textAlign: 'center' }}
      maxWidth='100vw'
      minHeight='60vh'
    >
      <Box my='20px'>
        <Typography
          className={poppins.className}
          fontWeight={500}
          color='#3a206d'
          fontSize='1.5rem'
        >
          Nuestros Planes
        </Typography>
        <Typography
          className={poppins.className}
          fontWeight={300}
          fontSize='0.8rem'
        >
          Contamos con un plan para cada necesidad
        </Typography>
      </Box>
      <Box
        display='flex'
        alignItems={{ xs: 'center', md: 'flex-start' }}
        justifyContent='center'
        maxWidth='80%'
        mx='auto'
        gap='20px'
        flexDirection={{ xs: 'column', md: 'row' }}
      >
        {PLANESPREMIUM.map((p, index) => (
          <PlanesPremiumCard key={index} data={p} />
        ))}
      </Box>
    </Box>
  );
};
