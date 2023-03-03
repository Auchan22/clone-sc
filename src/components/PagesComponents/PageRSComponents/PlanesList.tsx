import PLANES from '@/assets/planes';
import { Box, Typography } from '@mui/material';
import { Poppins } from 'next/font/google';
import { PlanesCard } from './PlanesCard';
const poppins = Poppins({ subsets: ['latin'], weight: ['300', '500'] });

export const PlanesList: React.FC = () => {
  return (
    <Box
      py='10%'
      sx={{ backgroundColor: '#fff', textAlign: 'center' }}
      maxWidth='100vw'
      minHeight='100vh'
    >
      <Box my='20px'>
        <Typography
          className={poppins.className}
          fontWeight={500}
          color='#3a206d'
          fontSize='1.5rem'
        >
          Otros Planes
        </Typography>
        <Typography
          className={poppins.className}
          fontWeight={300}
          fontSize='0.8rem'
        >
          Encuentra el que se adapte a tus necesidades
        </Typography>
      </Box>
      <Box
        display='flex'
        alignItems={{ xs: 'center', md: 'flex-start' }}
        justifyContent='center'
        maxWidth='80%'
        mx='auto'
        flexWrap='wrap'
        gap='20px'
        flexDirection={{ xs: 'column', md: 'row' }}
      >
        {PLANES.map((p, index) => (
          <PlanesCard key={index} data={p} />
        ))}
      </Box>
    </Box>
  );
};
