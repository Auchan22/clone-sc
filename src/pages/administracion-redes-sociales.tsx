import { Pregunta } from '@/assets/preguntasFrecuentes';
import { RedesList } from '@/components/PagesComponents/PageRSComponents';
import {
  HeadPage,
  Hero,
  PreguntasFrecuentes,
  StyledLink,
  Subscribe,
} from '@/components/shared';
import { Box, Typography } from '@mui/material';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '600'] });

const preguntas: Pregunta[] = [
  {
    label: '¿Hay requisitos para la campaña de búsqueda?',
    description: [
      'El requisito fundamental es que el sitio donde vaya a crearse el tráfico se encuentre actualizado y cuente con certificado SSL. ',
    ],
  },
  {
    label: '¿Puedo solicitar factura por el servicio?',
    description: [
      'Claro que sí, todos nuestros productos se pueden facturar,  en un lapso de 30 días máximo.  ',
    ],
  },
  {
    label: '¿Cuánto es lo mínimo para invertir en Facebook?',
    description: [
      'La inversión mínima para una campaña de Facebook es de $1 USD al día, sin embargo tu coordinador de cuenta te estará sugiriendo un presupuesto según tus necesidades.',
    ],
  },
  {
    label: '¿Puedo tener campaña en Facebook e Instagram?',
    description: [
      '¡Claro que sí! Mientras tus cuentas se encuentren vinculadas, tu campaña puede estar en circulación en ambas redes.',
    ],
  },
  {
    label: '¿Cómo puedo pagar la inversión de campaña?',
    description: [
      'Es muy sencillo, lo puedes hacer a través de Stripe, Mercado pago o Transferencia interbancaria, todos estos cuentan con la identidad corporativa de nuestra empresa. ',
    ],
  },
  {
    label: '¿Cobran alguna comisión por monitoreo de campañas?',
    description: [
      'No, nosotros no cobramos ningún tipo de comisiones por lanzamiento o monitoreo de tu campaña, la inversión se toma total para el anuncio.',
    ],
  },
];

export default function redesSocialesPage() {
  return (
    <>
      <HeadPage pageName='Administración de redes sociales' />
      <main>
        <Hero
          mh='80vh'
          backgroundVIDEO='https://vid.cdn-website.com/7b521824/videos/nDGAgIaSAWf6N5SnrA5Q_social_media_-_1360+%28Original%29-v.mp4'
          backgroundColor='rgba(115,0,255,1)'
        >
          <Box
            minHeight='80vh'
            minWidth='100vw'
            display='flex'
            alignItems={{ xs: 'center', md: 'flex-start' }}
            justifyContent='center'
            flexDirection='column'
            gap='20px'
            padding='40px'
            mb='50px'
          >
            <Typography
              className={poppins.className}
              color='#fff'
              fontSize={{ xs: '3rem', md: '4rem' }}
              fontWeight={300}
              maxWidth='60%'
            >
              <span style={{ fontWeight: 'bold' }}>Bienvenido al mundo</span> de
              las redes sociales
            </Typography>
            <Typography
              className={poppins.className}
              color='#fff'
              fontSize='1rem'
              fontWeight={poppins.style.fontWeight}
              maxWidth='50%'
            >
              Posiciona tu marca y crea una comunidad dentro del mundo digital
            </Typography>
            <StyledLink
              href=''
              className={poppins.className}
              style={{ fontSize: '20px' }}
              color='#fff'
            >
              Agendar Demostración
            </StyledLink>
          </Box>
        </Hero>
        <RedesList />
        <PreguntasFrecuentes
          label='¿Tienes alguna otra duda? Llámanos al 7776007713'
          preguntas={preguntas}
        />
        <Subscribe />
      </main>
    </>
  );
}
