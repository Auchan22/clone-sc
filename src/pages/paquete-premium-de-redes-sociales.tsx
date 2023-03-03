import { Pregunta } from '@/assets/preguntasFrecuentes';
import {
  CharacteristicsList,
  PlanesPremiumList,
  RedesSociales,
} from '@/components/PagesComponents/PageRSPremiumComponents';
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
    label: '¿Por qué Premium y no Básico?',
    description: [
      'Puedes revisar todo el proceso de creación de tu contenido.',
      'Seleccionar la frecuencia de tus posteos.  ',
      'Son elaborados en paquetería profesional de diseño y edición de imágenes. ',
    ],
  },
  {
    label: '¿Cuál es el proceso del servicio?',
    description: [
      'Te presentamos a tu equipo de trabajo. ',
      'Ellos comienzan a trabajar tu parrilla de contenidos y una vez terminada la enviamos a tu revisión. ',
      'Una vez aprobada la parrilla comenzamos tus gráficos y listo comenzamos a programar las publicaciones. ',
    ],
  },
  {
    label: '¿Qué tipo de contenido manejan?',
    description: [
      'Tus gráficos están realizados en paquetería Adobe, la más sofisticada en el mundo del diseño. ',
    ],
  },
];

export default function PaquetePremiumRSPage() {
  return (
    <>
      <HeadPage pageName='Administración de Redes Sociales' />
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
            padding='10%'
            mb='50px'
          >
            <Typography
              className={poppins.className}
              color='#fff'
              fontSize={{ xs: '3rem', md: '4rem' }}
              fontWeight={600}
            >
              Redes Sociales
            </Typography>
            <Typography
              className={poppins.className}
              color='#fff'
              fontSize='3rem'
              fontWeight={poppins.style.fontWeight}
            >
              a tu medida
            </Typography>
            <Typography
              className={poppins.className}
              color='#fff'
              fontSize='1rem'
              fontWeight={poppins.style.fontWeight}
              maxWidth={{ xs: '90%', md: '50%' }}
            >
              Mantenemos tu marca viva en las redes sociales con un enfoque
              personalizado y eficaz.
            </Typography>
          </Box>
        </Hero>
        <PlanesPremiumList />
        <RedesSociales />
        <CharacteristicsList />
        <PreguntasFrecuentes
          preguntas={preguntas}
          label='¿Tienes alguna otra duda? Llámanos al 7776007713'
        />
        <Subscribe />
      </main>
    </>
  );
}
