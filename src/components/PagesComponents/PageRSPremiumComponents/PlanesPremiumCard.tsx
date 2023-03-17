import { PlanPremium } from '@/assets/planesPremium';
import { PriceCard, StyledLink } from '@/components/shared';
import { Box, Typography } from '@mui/material';

import { Poppins } from 'next/font/google';
const poppins = Poppins({ subsets: ['latin'], weight: ['300', '600'] });

interface Props {
  data: PlanPremium;
}

export const PlanesPremiumCard: React.FC<Props> = ({ data }) => {
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
        minHeight='60%'
      >
        <Typography
          className={poppins.className}
          fontWeight={600}
          fontSize='1.5rem'
        >
          {data.title}
        </Typography>

        <Box my='20px'>
          <Typography
            className={poppins.className}
            fontWeight={600}
            fontSize='1.5rem'
            color='#7b00ff'
          >
            ${data.price}{' '}
            <span className={poppins.className} style={{ fontSize: '1rem' }}>
              USD
            </span>
          </Typography>
          <Typography
            className={poppins.className}
            fontWeight={600}
            fontSize='0.8rem'
          >
            {data.cantPost} post al mes
          </Typography>
        </Box>
        <StyledLink href={data.href} className={poppins.className}>
          Contratar
        </StyledLink>
      </Box>
    </PriceCard>
  );
};
