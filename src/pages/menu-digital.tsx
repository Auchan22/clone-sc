import { Pregunta } from '@/assets/preguntasFrecuentes';
import {
  CodigoC,
  MenuDigitalC,
  MenuList,
  ParallaxC,
  SeguidoresC,
} from '@/components/PagesComponents/PageMenuComponents';
import {
  HeadPage,
  Hero,
  PreguntasFrecuentes,
  Subscribe,
} from '@/components/shared';
import { Typography, Box } from '@mui/material';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '600'] });

const preguntas: Pregunta[] = [
  {
    label: '¿Pueden poner mi logo en el menú?',
    description: [
      'Claro que sí, y de hecho eso es lo más recomendable para poder conectar con tus clientes y generar confianza. ',
    ],
  },
  {
    label: '¿Puedo solicitar factura por el servicio?',
    description: [
      'Claro que sí, todos nuestros productos se pueden facturar,  en un lapso de 30 días máximo.  ',
    ],
  },
  {
    label: '¿Pueden tomar videos de mis productos?',
    description: [
      'Lamentablemente nosotros no realizamos visitas para tomar fotografías ni videos, Pero no te preocupes tu nos puedes compartir el material gráfico que tengas y nosotros lo utilizamos. ',
      'También podemos utilizar recursos de bancos de imágenes, libres de derechos de autor y enfocadas al negocio de cada cliente. ',
    ],
  },
  {
    label: '¿Dónde se encuentran?',
    description: [
      'Nosotros nos encontramos en la ciudad de la eterna primavera, Cuernavaca, Morelos. ',
      'Sin embargo damos servicio a toda Latinoamérica, Estados Unidos y Europa. ',
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
    label: '¿Tienen ejemplos?',
    description: [
      'Comunícate con nuestros asesores de ventas y ellos te compartirán los ejemplos que necesites.',
      'Nuestro equipo de profesionales cuenta con la experiencia y los conocimientos necesarios, no te preocupes tu proyecto se encuentra en buenas manos. ',
    ],
  },
];

export default function MenuDigitalPage() {
  return (
    <>
      <HeadPage pageName='Menú Digital' />
      <main>
        <Hero
          mh='70vh'
          backgroundVIDEO='https://vid.cdn-website.com/7b521824/videos/Kzwi97X5TmCAZ16ACQeP_lunch_-_2339+%28Original%29-v.mp4'
          backgroundColor='rgba(115,0,255,1)'
        >
          <Box
            minHeight='70vh'
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
              ¡Oiga mesero!
            </Typography>
            <Typography
              className={poppins.className}
              color='#fff'
              fontSize='3rem'
              fontWeight={poppins.style.fontWeight}
            >
              ¿Dónde?
            </Typography>
            <Typography
              className={poppins.className}
              color='#fff'
              fontSize='1rem'
              fontWeight={poppins.style.fontWeight}
              maxWidth={{ xs: '90%', md: '50%' }}
            >
              Abre la cámara desde tu celular y conoce el menú en cuestión de
              segundos
            </Typography>
          </Box>
        </Hero>
        <MenuList />
        <MenuDigitalC />
        <ParallaxC />
        <CodigoC />
        <SeguidoresC />
        <PreguntasFrecuentes
          preguntas={preguntas}
          label='¿Tienes alguna otra duda? Llámanos al  7776007713'
        />
        <Subscribe />
      </main>
    </>
  );
}
