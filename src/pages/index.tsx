import { Hero } from '@/components/shared/';
import { Box, Divider, Typography } from '@mui/material';
import Gastos from '@/components/Gastos';
import Servicios from '@/components/Servicios';
import Agencia from '@/components/Agencia';
import Inversion from '@/components/Inversion';
import Contactanos from '@/components/Contactanos';
import { HeadPage, Subscribe } from '@/components/shared';

export default function Home() {
  return (
    <>
      <HeadPage pageName='Inicio' />
      <main>
        <Hero
          backgroundColor='#8b0404'
          mh='90vh'
          backgroundVIDEO='https://vid.cdn-website.com/7b521824/videos/bqJL7YHTgWpYoAys6Uuf_638308321-v.mp4'
        >
          <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            flexDirection={{ xs: 'column', md: 'row' }}
            height='100%'
            paddingTop='5%'
          >
            <Box textAlign='center' color='#fff'>
              <h4 style={{ lineHeight: '0.5' }}>
                <span
                  style={{
                    fontSize: '1em',
                    fontWeight: 700,
                  }}
                >
                  Abre tu propia
                </span>
              </h4>
              <h3 style={{ lineHeight: '0.5', fontSize: '1.5rem' }}>
                <span style={{ fontWeight: '700' }}>Agencia de Marketing</span>
              </h3>
              <h3 style={{ lineHeight: '0.5' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: '700' }}>
                  queremos ser la otra mitad de tu emprendimiento
                </span>
              </h3>
              <h1 style={{ lineHeight: '0.5' }}>
                <span style={{ fontSize: '3rem', fontWeight: 700 }}>
                  50% DESC
                </span>
              </h1>
              <h6 style={{ lineHeight: '0.5' }}>
                <span style={{ fontSize: '0.5rem', fontWeight: 700 }}>
                  Vigencia del 23 al 28 de Febrero de 2023 CUPÓN: TUOTRAMITAD
                </span>
              </h6>
              <h3 style={{ lineHeight: '0.5' }}>
                <span style={{ fontSize: '1.8rem', fontWeight: '700' }}>
                  CUPÓN: TUOTRAMITAD
                </span>
              </h3>
            </Box>
            <img
              src='https://lirp.cdn-website.com/5a4f43f8/dms3rep/multi/opt/Dise-C3-B1o-sin-t-C3-ADtulo--281-29-578w.png'
              alt='Img'
              width='35%'
              height='100%'
            />
          </Box>
        </Hero>
        <Box
          minWidth='100vw'
          minHeight='40vh'
          sx={{ backgroundColor: '#7b00ff' }}
          display='flex'
          alignItems='center'
          justifyContent='center'
          flexDirection={{ xs: 'column', md: 'row' }}
          gap='5%'
        >
          <Typography
            variant='h5'
            fontWeight='bold'
            color='#fff'
            marginY='50px'
            maxWidth={{ xs: '80%', md: '20%' }}
            textAlign={{ xs: 'center', md: 'left' }}
          >
            ¿Quieres tener tu Agencia de Marketing Digital?
          </Typography>
          <Divider
            variant='middle'
            flexItem
            sx={{
              borderColor: '#fff !important',
              borderWidth: '1px',
              borderRadius: '5px',
              margin: 'auto 10px',
              height: '150px',

              display: { xs: 'none', md: 'block' },
            }}
          />
          <Typography
            variant='body1'
            fontSize={{ xs: '12.5px', md: '14px' }}
            fontFamily='Poppins'
            color='#fff'
            mb='50px'
            padding='10px 25px'
            maxWidth={{ xs: '90%', md: '50%' }}
            borderLeft={{ xs: '2px solid #fff', md: 'none' }}
          >
            Iniciar tu negocio o hacer crecer tu agencia de marketing nunca fue
            tan fácil. Sin contratar empleados ni invertir en equipo e
            infraestructura. Contamos la experiencia personal e infraestructura
            para trabajar como marca blanca para tu agencia.
          </Typography>
        </Box>
        <Gastos />
        <Servicios />
        <Agencia />
        <Inversion />
        <Contactanos />
        <Subscribe />
      </main>
    </>
  );
}
