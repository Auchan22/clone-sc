import { Box, Typography } from '@mui/material';
import { MenuCard } from './MenuCard';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '600'] });

export interface Menu {
  title: string;
  price: string;
  caracteristics: string[];
  highlighted: boolean;
  href: '';
}

const MENU: Menu[] = [
  {
    title: 'Pyme',
    highlighted: true,
    price: '1,499',
    caracteristics: [
      'Diseño del Menú Digital con texto y precio',
      'Código QR para impresión con el logo de su empresa.',
    ],
    href: '',
  },
  {
    title: 'Empresarial',
    highlighted: false,
    price: '1,999',
    caracteristics: [
      'Diseño del Menú Digital con texto y precio',
      'Código QR para impresión con el logo de su empresa.',
      'Vinculación a Redes Sociales .',
    ],
    href: '',
  },
];

export const MenuList: React.FC = () => {
  return (
    <Box
      minWidth='100vw'
      minHeight='100vh'
      p='20px 25px'
      sx={{ backgroundColor: '#fff' }}
      textAlign='center'
    >
      <Typography
        fontWeight={600}
        fontSize='1.5rem'
        className={poppins.className}
        color='rgb(58, 32, 109)'
      >
        Todos nuestros Servicios
      </Typography>
      <Typography
        fontWeight={300}
        fontSize='0.8rem'
        className={poppins.className}
      >
        Contamos con un servicio para cada necesidad
      </Typography>
      <Box
        display='flex'
        gap='20px'
        alignItems='center'
        justifyContent='center'
        flexDirection={{ xs: 'column', md: 'row' }}
        mx='auto'
        my='20px'
      >
        {MENU.map((M, index) => (
          <MenuCard data={M} key={index} />
        ))}
      </Box>
      <Box textAlign='center' my='20px'>
        <Typography
          fontWeight={300}
          fontSize='1rem'
          className={poppins.className}
        >
          Cambios futuros al menú tiene un costo adicional de $300 MXN.
        </Typography>
        <Typography
          fontWeight={300}
          fontSize='1rem'
          className={poppins.className}
        >
          Platillos adicionales cuentan con costo extra de $100 MXN por
          platillo.
        </Typography>
      </Box>
    </Box>
  );
};
