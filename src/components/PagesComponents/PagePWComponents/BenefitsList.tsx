import { Box, Typography } from '@mui/material';
import { Poppins } from 'next/font/google';
import { CharacteristicsSiteCard } from './CharacteristicsSiteCard';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '500'] });

const results: { title: string; description: string; color: string }[] = [
  {
    title: 'Diseño responsivo',
    description:
      'No te preocupes por el dispositivo que utilice tu cliente. Diseñamos tu sitio para que funcione perfectamente en cualquier ordenador, tableta o móvil.',
    color: '#7b00ff',
  },
  {
    title: 'Controla tu tienda y pedidos',
    description:
      'Vende lo que gustes, y mantén el control de tu tienda con nuestro panel de control, es muy sencillo e intuitivo. Tienda online de Ecwid',
    color: '#7b00ff',
  },
  {
    title: '1 cambio por mes',
    description:
      'Sabemos que cada negocio evoluciona a diferente ritmo, por eso te asignamos a un diseñador en tu paquete para que realice cambios de contenido mes con mes.',
    color: '#7b00ff',
  },
  {
    title: 'SEO para tu sitio',
    description:
      'SConfigura tu sitio con la poderosa poderosa herramienta de SEO en Google y tus productos a la vista de quienes los están buscando. ',
    color: '#7b00ff',
  },
  {
    title: 'Venta en otras plataformas',
    description:
      'Conecta tu tienda con Facebook, Instagram, Google Shopping, Amazon, Ebay y muchos más, para que tú solo te preocupes por gestionar tus pedidos desde un solo lugar.',
    color: '#7b00ff',
  },
  {
    title: 'Entrega en 15-20 días',
    description:
      'Cuentas con un panel para poder revisar las estadísticas necesarias de tu sitio, para que sepas que decisión debes tomar.',
    color: '#7b00ff',
  },
];

export const BenefitsList: React.FC = () => {
  return (
    <Box
      minWidth='100vw'
      sx={{ backgroundColor: '#e1e1e1' }}
      minHeight='40vh'
      p='50px'
      my='30px'
    >
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
        {results.map((r, index) => (
          <CharacteristicsSiteCard key={index} data={r} />
        ))}
      </Box>
    </Box>
  );
};
