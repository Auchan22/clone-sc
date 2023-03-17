import { PriceCard, StyledLink } from '@/components/shared';
import { Box, Typography } from '@mui/material';

import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '500'] });

const objetivo: {
  title: string;
  price: string;
  label: string;
  href: string;
  highlighted: boolean;
}[] = [
  {
    title: 'Google Search',
    price: '999',
    label: 'Anuncio de búsqueda',
    href: '',
    highlighted: false,
  },
  {
    title: 'Anuncio Display',
    price: '1,499',
    label: 'Anuncio de venta',
    href: '',
    highlighted: true,
  },
  {
    title: 'Anuncio YouTube',
    price: '2,499',
    label: 'Anuncio de video',
    href: '',
    highlighted: false,
  },
  {
    title: 'Campaña Facebook',
    price: '500',
    label: 'Anuncio Facebook e Instagram',
    href: '',
    highlighted: false,
  },
];

export const ObjetivoList: React.FC = () => {
  return (
    <Box
      minWidth='100vw'
      minHeight='100vh'
      py='20%'
      mb='20px'
      textAlign='center'
    >
      <Typography
        className={poppins.className}
        fontWeight={500}
        color='#3a206d'
        fontSize='1.5rem'
      >
        Una campaña para cada objetivo
      </Typography>
      <Typography
        fontSize='0.8rem'
        className={poppins.className}
        fontWeight={300}
        color='#949494'
        mb='50px'
      >
        Encuentra la que se adapte a tus necesidades
      </Typography>
      <Box
        maxWidth='90%'
        mx='auto'
        maxHeight='30%'
        display='flex'
        alignItems='center'
        gap='15px'
        justifyContent='center'
        flexDirection={{ xs: 'column', md: 'row' }}
      >
        {objetivo.map((o, index) => (
          <PriceCard key={index} highlighted={o.highlighted}>
            <Box
              maxWidth='80%'
              maxHeight='30%'
              display='flex'
              alignItems='center'
              justifyContent='center'
              flexDirection='column'
              gap='10px'
            >
              <Typography
                className={poppins.className}
                fontWeight={500}
                color='#000'
                fontSize='1.5rem'
              >
                {o.title}
              </Typography>
              <Typography
                className={poppins.className}
                fontWeight={300}
                color='#3a206d'
                fontSize='1.5rem'
              >
                $ {o.price} <span style={{ fontSize: '1rem' }}>USD</span>
              </Typography>
              <Typography
                className={poppins.className}
                fontWeight={500}
                color='#949494'
                fontSize='0.8rem'
              >
                {o.label}
              </Typography>
              <StyledLink className={poppins.className} href={o.href}>
                Contratar
              </StyledLink>
            </Box>
          </PriceCard>
        ))}
      </Box>
    </Box>
  );
};
