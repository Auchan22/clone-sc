import { Box, Typography } from '@mui/material';
import { Parallax } from 'react-parallax';
import { Poppins } from 'next/font/google';
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'] });

export const ParallaxC: React.FC = () => {
  return (
    <Parallax
      blur={4}
      bgImage='https://lirp.cdn-website.com/5a4f43f8/dms3rep/multi/opt/2989-2880w.jpg'
      bgImageAlt='Confianza de los clientes'
      strength={200}
    >
      <Box
        maxWidth={{ xs: '90vw', md: '60vw' }}
        minHeight='40vh'
        textAlign='center'
        p='70px 40px'
        my='70px'
        mx='auto'
        sx={{ color: '#fff' }}
      >
        <Typography
          className={poppins.className}
          fontWeight={600}
          fontSize='1.3rem'
          textAlign='center'
          mb='20px'
        >
          La confianza de tus clientes es muy importante para nosotros
        </Typography>
        <Typography
          className={poppins.className}
          fontWeight={400}
          fontSize='1rem'
          textAlign='center'
        >
          Queremos darle tranquilidad a tus clientes. Por eso, este es el
          momento de tener tu Menú Digital, para que ellos se sientan seguros en
          tu negocio cumpliendo las normas de sanidad
        </Typography>
      </Box>
    </Parallax>
  );
};
