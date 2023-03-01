import { Pregunta } from '@/assets/preguntasFrecuentes';
import {
  Informative,
  ObjetivoList,
} from '@/components/PagesComponents/PageCampanasComponents';
import { Campañas } from '@/components/PagesComponents/PageCampanasComponents/Campañas';

import {
  HeadPage,
  Hero,
  PreguntasFrecuentes,
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

export default function campanasPage() {
  return (
    <>
      <HeadPage pageName='Campañas' />
      <main>
        <Hero
          mh='80vh'
          backgroundVIDEO='https://vid.cdn-website.com/7b521824/videos/RZdPS9xAQOKjqnlBXbkg_man_-_42305+%28Original%29-v.mp4'
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
              fontWeight={600}
            >
              Optimiza tu
            </Typography>
            <Typography
              className={poppins.className}
              color='#fff'
              fontSize='3rem'
              fontWeight={poppins.style.fontWeight}
            >
              presencia en línea
            </Typography>
            <Typography
              className={poppins.className}
              color='#fff'
              fontSize='1rem'
              fontWeight={poppins.style.fontWeight}
              maxWidth='50%'
            >
              Descubre los beneficios que Google Ads y Facebook Ads tienen para
              ti.
            </Typography>
          </Box>
        </Hero>
        <ObjetivoList />
        <Informative />
        <Campañas />
        <PreguntasFrecuentes
          preguntas={preguntas}
          label='¿Tienes alguna otra duda? Llámanos al  7776007713'
        />
        <Subscribe />
      </main>
    </>
  );
}
