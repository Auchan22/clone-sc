import { Box, Typography } from '@mui/material';
import { Poppins } from 'next/font/google';
const poppins = Poppins({ subsets: ['latin'], weight: ['300', '600'] });

interface Props {
  data: { title: string; description: string; color: string };
}

export const ResultCard: React.FC<Props> = ({ data }) => {
  return (
    <Box
      width={{ xs: '90%', md: '30%' }}
      py='20px'
      minHeight='60%'
      boxShadow='rgb(0 0 0 / 5%) 0 3px 11px 0 '
      display='flex'
      alignItems='center'
      justifyContent='center'
      gap='15px'
      flexDirection='column'
      borderRadius='10px'
      p='20px 15px'
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
        {data.description}
      </Typography>
    </Box>
  );
};
