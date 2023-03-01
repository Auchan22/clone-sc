import { Box, Typography } from '@mui/material';

import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '500'] });

export const Informative: React.FC = () => {
  return (
    <Box
      minWidth='100vw'
      minHeight='80vh'
      display='flex'
      alignItems='center'
      justifyContent='center'
      flexDirection={{ xs: 'column', md: 'row' }}
      mb='40px'
    >
      <img
        width='40%'
        height='70%'
        alt='Google Ads Image'
        src='https://irp.cdn-website.com/5a4f43f8/dms3rep/multi/google-ads-iphone2-1920w.png.webp'
      />
      <Box
        maxWidth={{ xs: '90%', md: '40%' }}
        display='flex'
        alignItems='flex-start'
        justifyContent='center'
        gap='15px'
        flexDirection='column'
      >
        <Typography
          className={poppins.className}
          fontWeight={300}
          color='#949494'
          fontSize='0.6rem'
          variant='body1'
        >
          #CrecemosJuntos
        </Typography>
        <Typography
          className={poppins.className}
          fontWeight={500}
          color='#000'
          fontSize='1.5rem'
          variant='h5'
        >
          Crecemos tu negocio con Google Ads
        </Typography>
        <Typography
          className={poppins.className}
          fontWeight={300}
          color='#000'
          fontSize='0.8rem'
          variant='body1'
        >
          Adquiere visibilidad ante los clientes cuando busquen negocios como el
          tuyo mediante la Búsqueda de Google y Maps. Solo pagas por los
          resultados que obtengas, como clics que dirigen a tu sitio web o
          llamadas realizadas a tu negocio.
        </Typography>
        <Typography
          className={poppins.className}
          fontWeight={300}
          color='#000'
          fontSize='0.8rem'
          variant='body1'
        >
          Las personas entran a Google para encontrar ideas sobre qué hacer
          adónde ir o qué comprar. Muestra tus anuncios en Google, en el momento
          preciso en que alguien esté buscando productos o servicios como los
          que tú ofreces.
        </Typography>
      </Box>
    </Box>
  );
};
