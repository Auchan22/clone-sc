import { Poppins } from 'next/font/google';

import { Servicios } from '@/assets/servicios';
import { Box, Typography } from '@mui/material';
import { StyledLink } from '@/components/shared';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '600'] });

interface Props {
  data: Servicios;
}

const ServiciosCard: React.FC<Props> = ({ data }) => {
  return (
    <Box
      width='30%'
      py='20px'
      minHeight='60%'
      boxShadow='rgb(0 0 0 / 5%) 0 3px 11px 0 '
      display='flex'
      alignItems='center'
      justifyContent='center'
      gap='15px'
      flexDirection='column'
    >
      <Typography
        fontWeight={600}
        color={data.color}
        className={poppins.className}
        textAlign='left'
      >
        {data.title}
      </Typography>
      <Typography
        fontWeight={300}
        fontSize='0.8rem'
        className={poppins.className}
        textAlign='left'
      >
        {data.descriptionCard}
      </Typography>
      <StyledLink
        href={data.href}
        className={poppins.className}
        color={data.color}
      >
        Contratar
      </StyledLink>
    </Box>
  );
};

export default ServiciosCard;
