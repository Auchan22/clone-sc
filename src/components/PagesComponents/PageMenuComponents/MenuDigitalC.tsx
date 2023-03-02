import { ContainerInfo } from '@/components/shared';
import { Box, Typography } from '@mui/material';
import { Poppins } from 'next/font/google';
const poppins = Poppins({ subsets: ['latin'], weight: ['300', '600'] });

export const MenuDigitalC: React.FC = () => {
  return (
    <ContainerInfo>
      <>
        <img
          src='https://lirp.cdn-website.com/5a4f43f8/dms3rep/multi/opt/menu4web-1920w.png'
          alt='Menu Digital'
          width='40%'
          height='40%'
        />
        <Box
          display='flex'
          alignItems='flex-start'
          justifyContent='center'
          gap='20px'
          flexDirection='column'
          maxWidth={{ xs: '90%', md: '30%' }}
          maxHeight='100%'
        >
          <Typography
            className={poppins.className}
            fontWeight={600}
            fontSize='1.5rem'
          >
            Tu negocio necesita un menú digital
          </Typography>
          <Typography
            className={poppins.className}
            fontWeight={300}
            fontSize='1rem'
          >
            Nosotros lo diseñamos según tus necesidades y listo para usarse con
            la cámara de cualquier dispositivo.
          </Typography>
          <Typography
            className={poppins.className}
            fontWeight={300}
            fontSize='1rem'
          >
            ¡No pierdas más ventas! Y aprovecha todos los beneficios que tiene
            para tu negocio.
          </Typography>
        </Box>
      </>
    </ContainerInfo>
  );
};
