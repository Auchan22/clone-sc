import { Pregunta } from '@/assets/preguntasFrecuentes';
import { NegocioList } from '@/components/PagesComponents/PagePWComponents';
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
    label: '¿Qué tipo de contenido manejan?',
    description: [
      'Nos enfocamos en realizar contenido dinámico y de valor, para impulsar tus redes. ',
      'Por ejemplo: Trivias, infografías, videos cortos, memes, top 5, etc. ',
    ],
  },
];

export default function paginasWebPage() {
  return (
    <>
      <HeadPage pageName='Página Web' />
      <main>
        <Hero
          mh='80vh'
          backgroundVIDEO='https://vid.cdn-website.com/7b521824/videos/KpUY86kpQfOg96vfCjLZ_source_code_-_4733+%28Original%29-v.mp4'
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
            padding='10%'
            mb='50px'
          >
            <Typography
              className={poppins.className}
              color='#fff'
              fontSize={{ xs: '3rem', md: '4rem' }}
              fontWeight={600}
            >
              Página web
            </Typography>
            <Typography
              className={poppins.className}
              color='#fff'
              fontSize='3rem'
              fontWeight={poppins.style.fontWeight}
            >
              nueva experiencia
            </Typography>
            <Typography
              className={poppins.className}
              color='#fff'
              fontSize='1rem'
              fontWeight={poppins.style.fontWeight}
              maxWidth={{ xs: '90%', md: '50%' }}
            >
              No estamos diseñando fotocopias de las páginas web, estamos
              diseñando páginas web.
            </Typography>
          </Box>
        </Hero>
        <NegocioList />
        <PreguntasFrecuentes
          preguntas={preguntas}
          label='El que pregunta, nunca se equivoca'
        />
        <Subscribe />
      </main>
    </>
  );
}
