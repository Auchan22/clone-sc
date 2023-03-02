import { Hero } from '@/components/shared/';
import { Box, Typography } from '@mui/material';

import { Poppins } from 'next/font/google';
import ServiciosList from '@/components/PagesComponents/PageServiciosComponents/ServiciosList';
import { HeadPage } from '@/components/shared';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '600'] });

export default function serviciosPage() {
  return (
    <>
      <HeadPage pageName='Servicios' />
      <main>
        <Hero
          backgroundColor='rgba(115,0,255,1)'
          mh='60vh'
          backgroundVIDEO='https://vid.cdn-website.com/7b521824/videos/hDsUcQAeQsOEId98Jmp0_708373022-v.mp4'
        >
          <Box
            display='flex'
            alignItems={{ xs: 'center', md: 'flex-start' }}
            justifyContent='center'
            flexDirection='column'
            minHeight='60vh'
            width='100vw'
            padding='10% 10%'
            gap='10px'
          >
            <Typography
              className={poppins.className}
              color='#fff'
              fontSize='2rem'
              fontWeight={900}
            >
              (Re)Inventamos
            </Typography>
            <Typography
              className={poppins.className}
              color='#fff'
              fontSize='2.5rem'
              fontWeight={poppins.style.fontWeight}
            >
              proyectos
            </Typography>
            <Typography
              className={poppins.className}
              color='#fff'
              fontSize='1rem'
              fontWeight={poppins.style.fontWeight}
              maxWidth='50%'
            >
              Sabemos que los cambios pasan día con día, es por eso que nuestros
              servicios se adaptan a las necesidades de cada negocio
            </Typography>
          </Box>
        </Hero>
        <ServiciosList />
      </main>
    </>
  );
}
