import CONTACTO from '@/assets/contacto';
import ContactoCard from '@/components/ContactoCard';
import ContactoForm from '@/components/ContactoForm';
import { HeadPage, Hero } from '@/components/shared';
import { Box, Typography } from '@mui/material';
import Head from 'next/head';

export default function contactoPage() {
  return (
    <>
      <HeadPage pageName='Contacto' />
      <main>
        <Hero
          mh='70vh'
          backgroundVIDEO='https://vid.cdn-website.com/5a4f43f8/videos/orSwoKVqQaq68VvN56fY_video+%281%29-v.mp4'
          backgroundColor='rgba(115,0,255,1)'
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
            <Typography fontFamily='Poppins' fontSize='2.5rem'>
              <span style={{ fontWeight: 'bold' }}>Contáctanos</span> ¡Ahora!
            </Typography>
            <Typography fontFamily='Poppins' fontSize='1rem'>
              Nos encantaría saber de ti y de tus dudas sobre nosotros.
            </Typography>
          </Box>
        </Hero>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          gap='20px'
          flexDirection='column'
          py='10%'
          minHeight='100vh'
          sx={{ backgroundColor: '#5a00b9', color: '#fff' }}
        >
          <Box sx={{ textAlign: 'center' }} maxWidth='60%'>
            <Typography
              fontFamily='Poppins'
              fontWeight='bold'
              fontSize='1.5rem'
            >
              Te brindamos la atención
            </Typography>
            <div style={{ margin: '20px 0px' }}>
              <Typography fontFamily='Poppins' fontSize='0.8rem'>
                Lo que empieza en tu imaginación cobra vida en tus redes
                sociales, encuentra la solución que necesitas para tu negocio
                con nosotros.
              </Typography>
            </div>
          </Box>
          <Box
            display='flex'
            alignItems='center'
            gap='20px'
            justifyContent='center'
            flexDirection={{ xs: 'column', md: 'row' }}
          >
            {CONTACTO.map((c, index) => (
              <ContactoCard data={c} key={index} />
            ))}
          </Box>
          <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            flexDirection='column'
            my='20px'
            sx={{ textAlign: 'center' }}
          >
            <Typography fontFamily='Poppins' fontSize='1rem'>
              Solicitar
            </Typography>
            <Typography
              fontFamily='Poppins'
              fontWeight='bold'
              fontSize='1.5rem'
            >
              agendar una reunión
            </Typography>
            <Typography fontFamily='Poppins' fontSize='1rem' maxWidth='60%'>
              Envíe su solicitud y nos pondremos en contacto muy pronto para
              confirmar los horarios de una posible reunión.
            </Typography>
          </Box>
          <ContactoForm />
        </Box>
      </main>
    </>
  );
}
