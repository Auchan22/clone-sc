import { Box, Typography } from '@mui/material';
import { Poppins } from 'next/font/google';
import { CharacteristicsSiteCard } from './CharacteristicsSiteCard';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '500'] });

const results: { title: string; description: string; color: string }[] = [
  {
    title: 'Personal o Empresarial',
    description:
      'Nuestro personalidad cuenta con los conocimientos y experiencia necesaria para incursionar en el mercado.',
    color: '#ff1897',
  },
  {
    title: 'Tienda en línea',
    description:
      'Desarrollamos tu tienda online, y vincula a las mejores plataformas para hacer crecer tu negocio, nuestras tiendas online son de Ecwid.',
    color: 'rgb(14, 206, 255)',
  },
  {
    title: 'Responsive',
    description:
      'Tu web, siempre alucinante en cualquier lugar. Se verá genial en tablets y teléfonos móviles.',
    color: 'rgb(123, 0, 255)',
  },
];

export const CharacteristicsSiteList: React.FC = () => {
  return (
    <Box
      minWidth='100vw'
      sx={{ backgroundColor: '#fff' }}
      minHeight='40vh'
      p='20px'
      my='30px'
    >
      <Box textAlign='center'>
        <Typography
          fontWeight={500}
          fontSize='1.5rem'
          className={poppins.className}
          color='rgb(58, 32, 109)'
        >
          Sitios compatibles con tu objetivo y actividades
        </Typography>
        <Typography
          fontWeight={300}
          fontSize='0.8rem'
          className={poppins.className}
          color='#000'
        >
          Dale el uso que desees
        </Typography>
      </Box>

      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        gap='20px'
        flexDirection={{ xs: 'column', md: 'row' }}
        width='90%'
        mx='auto'
      >
        {results.map((r, index) => (
          <CharacteristicsSiteCard key={index} data={r} />
        ))}
      </Box>
    </Box>
  );
};
