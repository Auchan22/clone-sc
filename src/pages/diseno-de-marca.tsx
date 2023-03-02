import { Pregunta } from '@/assets/preguntasFrecuentes';
import PenTool from '@/components/Animations/PenTool';
import {
  LogotipoDescription,
  MetodologiaList,
  Precio,
} from '@/components/PagesComponents/PageDiseñoComponents';
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
    label: '¿El pago es total?',
    description: [
      'Es correcto, en este caso para poder comenzar tu proyecto debes hacer la cobertura total del pago del mismo, para que pueda ser asignado a uno de nuestros diseñadores. ',
    ],
  },
  {
    label: '¿Puedo solicitar factura por el servicio?',
    description: [
      'Claro que sí, todos nuestros productos se pueden facturar,  en un lapso de 30 días máximo.  ',
    ],
  },
  {
    label: '¿Pueden rediseñar logos ya existentes?',
    description: [
      '¡Claro que sí! Si lo que buscas es darle un refresh a tu marca nuestros diseñadores pueden tomar tu logo existente como base para crear una nueva identidad de marca.',
    ],
  },
  {
    label: '¿Si aún no me agradan mis propuestas qué puedo hacer?',
    description: [
      'En caso de que ninguna de tus propuestas sea de tu agrado, no te preocupes, podemos crear una completamente distinta con un costo adicional de $30 USD',
    ],
  },
  {
    label: '¿Solo puedo pagar mi servicio en el sitio?',
    description: [
      'Para hacer las cosas más sencillos contamos con distintos canales para que puedas realizar tu pago. ',
      'Stripe, Mercado pago o Transferencia interbancaria, todos estos cuentan con la identidad corporativa de nuestra empresa. ',
    ],
  },
  {
    label: '¿Por dónde me contacta mi diseñador?',
    description: [
      'Tu diseñador se pondrá en contacto contigo vía WhatsApp, de esta manera te hará llegar un Brief para que pueda comenzar con tu proyecto.',
    ],
  },
];

export default function DiseñoMarcaPage() {
  return (
    <>
      <HeadPage pageName='Diseño de marca' />
      <main>
        <Hero
          mh='60vh'
          backgroundVIDEO='https://vid.cdn-website.com/7b521824/videos/Gj17woVIQHO18o4JKm3v_whiteboard_-_2303+%28Original%29-v.mp4'
          backgroundColor='rgba(115,0,255,1)'
        >
          <Box
            minHeight='60vh'
            minWidth='100vw'
            display='flex'
            alignItems={{ xs: 'center', md: 'flex-start' }}
            justifyContent='center'
            flexDirection='column'
            gap='20px'
            padding='10%'
            mb='50px'
          >
            <Typography
              className={poppins.className}
              color='#fff'
              fontSize={{ xs: '3rem', md: '4rem' }}
              fontWeight={600}
            >
              (Re)Diseño de marca
            </Typography>
            <Typography
              className={poppins.className}
              color='#fff'
              fontSize='1rem'
              fontWeight={poppins.style.fontWeight}
              maxWidth={{ xs: '90%', md: '50%' }}
            >
              Metodología
            </Typography>
          </Box>
        </Hero>
        <Precio />
        <LogotipoDescription />
        <MetodologiaList />
        <PreguntasFrecuentes
          preguntas={preguntas}
          label='¿Tienes alguna otra duda? Llámanos al  7776007713'
        />
        <Subscribe />
      </main>
    </>
  );
}
