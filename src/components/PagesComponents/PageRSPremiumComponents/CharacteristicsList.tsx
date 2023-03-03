import SERVICES from '@/assets/servicios';
import { Box, Typography } from '@mui/material';
import { Poppins } from 'next/font/google';
import { CharacteristicsCard } from './CharacteristicsCard';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '600'] });

const CHARACTERISTICS: {
  title: string;
  color: string;
  descriptionCard: string;
}[] = [
  {
    title: 'Equipo Experto',
    descriptionCard:
      'Equipo Social Conecta capacitado y asignado a tu negocio.',
    color: '#3a206d',
  },
  {
    title: 'Tabla de contenido',
    descriptionCard:
      'Elaboración de la parrilla de contenidos mensual (Copy interno y externo).',
    color: '#00ce64',
  },
  {
    title: 'Publicaciones',
    descriptionCard:
      'Diseño de publicación premium y programación de acuerdo a tu plan contratado.',
    color: '#ff1897',
  },
  {
    title: 'Gestión de la red social',
    descriptionCard:
      'Respuesta a Inbox y comentarios de lunes a viernes de 9:00  17:00 hrs. (Hora centro CDMX).',
    color: '#00beff',
  },
  {
    title: 'Reporte mensual',
    descriptionCard:
      'Entrega de resultados y estadísticas de tu red social durante el plazo contratado.',
    color: '#5b08ff',
  },
  {
    title: 'Propuesta de campaña',
    descriptionCard:
      'Propuesta mensual de campaña pagada con segmentación enfocada a tu giro comercial.',
    color: '#ff7b00',
  },
];

export const CharacteristicsList: React.FC = () => {
  return (
    <Box
      minWidth='100vw'
      minHeight='90vh'
      sx={{ backgroundColor: '#fff' }}
      textAlign='center'
      py='20px'
      px='20px'
    >
      <Typography
        fontWeight={600}
        fontSize='1.5rem'
        className={poppins.className}
        color='rgb(58, 32, 109)'
      >
        Tu plan incluye
      </Typography>
      <Typography
        fontWeight={300}
        fontSize='0.8rem'
        className={poppins.className}
      >
        Enseguida podrás ver lo que incluye el plan
      </Typography>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        flexDirection={{ xs: 'column', md: 'row' }}
        maxWidth='90%'
        flexWrap='wrap'
        gap='10px'
        mt='20px'
        mx='auto'
      >
        {CHARACTERISTICS.map((s, index) => (
          <CharacteristicsCard key={index} data={s} />
        ))}
      </Box>
    </Box>
  );
};
