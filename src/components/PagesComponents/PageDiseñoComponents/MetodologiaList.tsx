import { Box, Typography } from '@mui/material';
import { Poppins } from 'next/font/google';
import { CharacteristicsSiteCard } from '../PagePWComponents';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '500'] });

const methods: { title: string; description: string; color: string }[] = [
  {
    title: 'Diseñador asignado',
    description: 'Un diseñador capacitado y con experiencia en el área.',
    color: '#ff7b00',
  },
  {
    title: 'Brief',
    description:
      'Te compartiremos un documento para poder conocerte mejor y saber hacia donde quieres llevar tu marca.',
    color: '#7b00ff',
  },
  {
    title: 'Propuestas ',
    description:
      'Se te harán llegar 3 propuestas gráficas en una presentación en PDF.',
    color: '#00beff',
  },
  {
    title: 'Retroalimentación',
    description:
      'Lo más importante es tu satisfacción, es por eso que cuentas con una ronda de cambios completamente gratis. ',
    color: '#00ce14',
  },
  {
    title: 'Modificaciones',
    description:
      'El diseñador te compartirá nuevamente la presentación con las modificaciones pertinentes. ',
    color: '#ff1897',
  },
  {
    title: 'Proyecto terminado',
    description:
      '¡Felicidades! Ya cuentas con tu identidad de marca, y dicen que una imagen dice más que mil palabras, así que no pierdas los beneficios que tiene para ti.',
    color: '#205a6d',
  },
];

export const MetodologiaList: React.FC = () => {
  return (
    <Box minWidth='100vw' minHeight='40vh' p='50px' my='30px'>
      <Box textAlign='center' mb='20px'>
        <Typography
          fontWeight={500}
          fontSize='1.5rem'
          className={poppins.className}
          color='rgb(58, 32, 109)'
        >
          Estos son algunos de los beneficios
        </Typography>
        <Typography
          fontWeight={300}
          fontSize='0.8rem'
          className={poppins.className}
          color='#000'
        >
          No te puedes quedar atrás
        </Typography>
      </Box>

      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        flexWrap='wrap'
        gap='20px'
        flexDirection={{ xs: 'column', md: 'row' }}
        width='90%'
        mx='auto'
      >
        {methods.map((m, index) => (
          <CharacteristicsSiteCard key={index} data={m} />
        ))}
      </Box>
    </Box>
  );
};
