import { Box, Typography } from '@mui/material';
import { Poppins } from 'next/font/google';
import { ResultCard } from './ResultCard';

const poppins = Poppins({ subsets: ['latin'], weight: ['500'] });

const results: { title: string; description: string; color: string }[] = [
  {
    title: 'Equipo Experto',
    description:
      'Nuestro personalidad cuenta con los conocimientos y experiencia necesaria para incursionar en el mercado.',
    color: 'rgb(14, 206, 255)',
  },
  {
    title: 'Segmentación',
    description:
      'Cada segmentación es única para cada negocio y sus necesidades.',
    color: 'rgb(123, 0, 255)',
  },
  {
    title: 'Reportes',
    description:
      'Sabemos que los números importan, es por eso que al finalizar te entregamos un reporte de resultados.',
    color: 'rgb(14, 206, 255)',
  },
];

export const ResultList: React.FC = () => {
  return (
    <Box
      minWidth='100vw'
      sx={{ backgroundColor: '#fff' }}
      minHeight='40vh'
      textAlign='center'
      p='20px'
    >
      <Typography
        fontWeight={500}
        fontSize='1.5rem'
        className={poppins.className}
        color='rgb(58, 32, 109)'
      >
        Obtén los mejores resultados
      </Typography>
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
          <ResultCard key={index} data={r} />
        ))}
      </Box>
    </Box>
  );
};
