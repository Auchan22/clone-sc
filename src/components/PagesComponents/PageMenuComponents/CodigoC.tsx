import { ContainerInfo } from '@/components/shared';
import { Box, Typography } from '@mui/material';
import { Poppins } from 'next/font/google';
const poppins = Poppins({ subsets: ['latin'], weight: ['300', '600'] });

export const CodigoC: React.FC = () => {
  return (
    <ContainerInfo>
      <>
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
            ¿Para qué sirve un Código QR?
          </Typography>
          <Typography
            className={poppins.className}
            fontWeight={300}
            fontSize='1rem'
          >
            ¡Tus clientes solo tendrán que abrir su cámara desde su celular,
            escanear el código y listo podrás acceder a tu menú en cuestión de
            segundos! No necesitan instalar ninguna APP.
          </Typography>
        </Box>
        <img
          src='https://irp.cdn-website.com/5a4f43f8/dms3rep/multi/3menu-52920988-1920w.png.webp'
          alt='Menu Digital'
          width='40%'
          height='40%'
        />
      </>
    </ContainerInfo>
  );
};
