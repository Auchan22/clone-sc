import { ContainerInfo, StyledLink } from '@/components/shared';
import { Box, Typography } from '@mui/material';
import { Poppins } from 'next/font/google';
const poppins = Poppins({ subsets: ['latin'], weight: ['300', '600'] });

export const OurPlan: React.FC = () => {
  return (
    <ContainerInfo>
      <>
        <Box maxWidth='30%'></Box>
        <Box
          display='flex'
          alignItems='flex-start'
          justifyContent='center'
          gap='20px'
          flexDirection='column'
          maxWidth={{ xs: '90%', md: '50%' }}
          maxHeight='100%'
        >
          <Typography
            className={poppins.className}
            fontWeight={600}
            fontSize='2rem'
          >
            ¿Por qué contratar nuestro Master Plan?
          </Typography>
          <Typography
            className={poppins.className}
            fontWeight={300}
            fontSize='1rem'
            color='#949494'
          >
            ¿Imaginas tener a todo un equipo de marketing en tu negocio al
            precio <span style={{ fontWeight: '600' }}>más accesible</span> del
            mercado y con{' '}
            <span style={{ fontWeight: '600' }}>verdaderos resultados</span>? En
            Social Conecta no solo lo imaginamos, lo hicimos realidad con
            nuestro Master Plan, el plan económico más completo de toda la
            agencia, que te incluye, la administración de las 3 redes sociales
            más populares:{' '}
            <span style={{ fontWeight: '600' }}>
              Facebook, Instagram y TikTok
            </span>
            . Además
            <span style={{ fontWeight: '600' }}> tu propio sitio web </span>
            para darle más presencia a tu negocio. Un
            <span style={{ fontWeight: '600' }}>
              {' '}
              especialista en campañas{' '}
            </span>
            para llegar a más clientes y con{' '}
            <span style={{ fontWeight: '600' }}>$20 USD</span> de inversión
            inicial <span style={{ fontWeight: '600' }}>para pauta</span> ya
            incluído en el paquete.
          </Typography>

          <Box
            minWidth='100%'
            display='flex'
            gap='20px'
            alignItems='center'
            justifyContent='space-around'
          >
            <StyledLink href='' className={poppins.className}>
              Comprar
            </StyledLink>
            <StyledLink href='' className={poppins.className}>
              Agendar Demostración
            </StyledLink>
          </Box>
        </Box>
      </>
    </ContainerInfo>
  );
};
