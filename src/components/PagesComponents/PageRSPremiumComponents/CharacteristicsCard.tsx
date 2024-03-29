import { Poppins } from 'next/font/google';

import { Servicios } from '@/assets/servicios';
import { Box, Typography } from '@mui/material';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '600'] });

interface Props {
  data: { title: string; color: string; descriptionCard: string };
}

export const CharacteristicsCard: React.FC<Props> = ({ data }) => {
  return (
    <Box
      width={{ xs: '90%', md: '30%' }}
      borderRadius='10px'
      p='20px'
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
    </Box>
  );
};
