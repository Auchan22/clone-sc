import { Hero, StyledLink } from '@/components/shared/';
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
          backgroundColor='#7b00ff80'
          mh='90vh'
          backgroundVIDEO='https://vid.cdn-website.com/7b521824/videos/bqJL7YHTgWpYoAys6Uuf_638308321-v.mp4'
        >
          <Box
            minWidth='80%'
            minHeight='70vh'
            display='flex'
            alignItems='flex-start'
            justifyContent='center'
            flexDirection='column'
            padding='20px 15vw'
            sx={{ color: '#fff' }}
          >
            <Typography
              fontFamily='Poppins'
              fontWeight='bold'
              fontSize='2.5rem'
            >
              Somos la Agencia para tu Agencia
            </Typography>
            <Typography fontFamily='Poppins' fontSize='1rem'>
              Abre tu propia agencia de Marketing
            </Typography>
            <Typography
              fontFamily='Poppins'
              fontSize='1rem'
              maxWidth={{ xs: '100%', md: '60%' }}
              mt='20px'
            >
              Trabajamos como marca blanca para tu agencia. Tu marca, tus
              precios,{' '}
              <span
                style={{
                  fontWeight: 'bold',
                  color: 'white',
                  lineHeight: 1.5,
                }}
              >
                nuestra infraestructura y personal
              </span>
            </Typography>
            <StyledLink href='/' color='#ffffff'>
              Agendar una Demostración
            </StyledLink>
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
