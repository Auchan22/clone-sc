import { ContainerInfo } from '@/components/shared';
import { Box, Typography } from '@mui/material';
import { Poppins } from 'next/font/google';
const poppins = Poppins({ subsets: ['latin'], weight: ['300', '600'] });

export const SeguidoresC: React.FC = () => {
  return (
    <ContainerInfo>
      <>
        <img
          src='https://lirp.cdn-website.com/5a4f43f8/dms3rep/multi/opt/3880715-1920w.png'
          alt='Menu Digital'
          width='60%'
          height='60%'
        />
        <Box
          display='flex'
          alignItems='flex-start'
          justifyContent='center'
          gap='20px'
          flexDirection='column'
          maxWidth={{ xs: '90%', md: '20%' }}
          maxHeight='100%'
        >
          <Typography
            className={poppins.className}
            fontWeight={600}
            fontSize='1.5rem'
          >
            Convierte a tus clientes en tus seguidores
          </Typography>
          <Typography
            className={poppins.className}
            fontWeight={300}
            fontSize='1rem'
          >
            Vinculamos las redes sociales de tu negocio directamente en tu menú,
            así mientras tus clientes esperan sus platillos puedes posicionar tu
            marca y tener nuevos seguidores en tu negocio, lo cual te ayudará a
            crecer en tus campañas publicitarias.
          </Typography>
        </Box>
      </>
    </ContainerInfo>
  );
};
