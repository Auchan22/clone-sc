import { Pregunta } from '@/assets/preguntasFrecuentes';
import { VideoOptionList } from '@/components/PagesComponents/PageVMComponents';
import {
  HeadPage,
  Hero,
  PreguntasFrecuentes,
  Subscribe,
} from '@/components/shared/';
import { Box, Typography } from '@mui/material';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '600'] });

const preguntas: Pregunta[] = [
  {
    label: '¿Existe algún contrato forzoso?',
    description: [
      'No te preocupes nosotros no manejamos contratos forzosos. Puedes probar un mes y 1 día antes de que expire tu plan compartimos el reporte mensual, y tú decides si continuas con nosotros, haciendo el pago de Renovación. ',
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
    label: '¿Pueden acortar un video de larga duración?',
    description: [
      'Nosotros nos especializamos en crear contenido audiovisual que sea de calidad y funcional para tu producto o servicio, lamentablemente no podemos recortar tus videos de larga duración, pero siempre podemos mejorar.',
    ],
  },
];

export default function videomarketingPage() {
  return (
    <>
      <HeadPage pageName='VideoMarketing' />
      <main>
        <Hero
          mh='100vh'
          backgroundColor='rgba(115,0,255,1)'
          backgroundVIDEO='https://vid.cdn-website.com/7b521824/videos/VJptFMwSTBOLcS5gyAUz_the_editing_of_the_video_-_25059+%28Original%29-v.mp4'
        >
          <Box
            minHeight='100vh'
            minWidth='100vw'
            display='flex'
            alignItems='flex-start'
            justifyContent='center'
            flexDirection='column'
            gap='20px'
            padding='10% 10%'
          >
            <Typography
              className={poppins.className}
              color='#fff'
              fontSize='2.5rem'
              fontWeight={900}
            >
              ¡Luces, cámara
            </Typography>
            <Typography
              className={poppins.className}
              color='#fff'
              fontSize='2.5rem'
              fontWeight={poppins.style.fontWeight}
            >
              y acción!
            </Typography>
            <Typography
              className={poppins.className}
              color='#fff'
              fontSize='1rem'
              fontWeight={poppins.style.fontWeight}
              maxWidth='50%'
            >
              Nuestra estrategia y objetivos es producir videos que mejoren el
              posicionamiento de tu marca en Internet.
            </Typography>
          </Box>
        </Hero>
        <VideoOptionList />
        <PreguntasFrecuentes
          preguntas={preguntas}
          label='El que pregunta, nunca se equivoca'
        />
        <Subscribe />
      </main>
    </>
  );
}
