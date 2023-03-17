import { Plan } from '@/assets/planes';
import { Video } from '@/assets/videoOptions';
import { PriceCard, StyledLink } from '@/components/shared';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Typography,
} from '@mui/material';

import { Poppins } from 'next/font/google';
const poppins = Poppins({ subsets: ['latin'], weight: ['300', '600'] });

interface Props {
  data: Plan;
}

function cantRedes(n: number): string {
  switch (n) {
    case 1:
      return 'una red social';

    case 2:
      return 'dos redes sociales';

    case 3:
      return 'tres redes sociales';

    case 4:
      return 'cuatro redes sociales';

    case 6:
      return 'seis redes sociales';

    default:
      return '';
  }
}

export const PlanesCard: React.FC<Props> = ({ data }) => {
  return (
    <PriceCard highlighted={data.highlighted}>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        gap='20px'
        flexDirection='column'
        p='20px 30px'
        width='90%'
        minHeight='90%'
      >
        <Typography
          className={poppins.className}
          fontWeight={600}
          fontSize='1.5rem'
        >
          {data.title}
        </Typography>

        {data.precios.map((o, index) => (
          <Box key={index} my='20px'>
            <Typography
              className={poppins.className}
              fontWeight={600}
              fontSize='1.5rem'
              color='#7b00ff'
            >
              ${o.precio}{' '}
              <span className={poppins.className} style={{ fontSize: '1rem' }}>
                USD
              </span>
            </Typography>
            {index === 1 && (
              <Typography
                className={poppins.className}
                fontWeight={600}
                fontSize='0.8rem'
                color='#7b00ff'
              >
                ${o.precioAño}{' '}
                <span
                  className={poppins.className}
                  style={{ fontSize: '0.8rem' }}
                >
                  USD
                </span>
              </Typography>
            )}

            <Typography
              className={poppins.className}
              fontWeight={300}
              fontSize='0.8rem'
              mb='20px'
            >
              <>
                Por {index === 0 ? 'mes' : 'año'}{' '}
                {cantRedes(o.cantRedesSociales)}
              </>
            </Typography>
            <StyledLink href={o.href} className={poppins.className}>
              Contratar
            </StyledLink>
          </Box>
        ))}
      </Box>
    </PriceCard>
  );
};
