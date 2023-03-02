import PenTool from '@/components/Animations/PenTool';
import { StyledLink } from '@/components/shared';
import { Box, Typography } from '@mui/material';
import { Poppins } from 'next/font/google';
const poppins = Poppins({ subsets: ['latin'], weight: ['300', '500'] });

export const Precio: React.FC = () => {
  return (
    <Box
      minWidth='100vw'
      maxHeight='50vh'
      sx={{ backgroundColor: '#fff' }}
      display='flex'
      alignItems='center'
      justifyContent='center'
      flexDirection={{ xs: 'column', md: 'row' }}
      py='20px'
      my='20px'
      mx='auto'
      gap='20px'
    >
      <Box
        textAlign='center'
        display='flex'
        alignItems='center'
        justifyContent='center'
        flexDirection='column'
        width='40%'
        gap='10px'
      >
        <Typography
          fontWeight={500}
          fontSize='1.5rem'
          className={poppins.className}
          color='#000'
        >
          Diseño de Marca
        </Typography>
        <Typography
          fontWeight={300}
          fontSize='1rem'
          className={poppins.className}
          color='rgb(58, 32, 109)'
        >
          Contratar ahora
        </Typography>
        <Typography
          fontWeight={500}
          fontSize='1.5rem'
          className={poppins.className}
          color='#000'
        >
          $ 2,999 <span style={{ fontSize: '0.8rem' }}>MXN</span>
        </Typography>
        <StyledLink href='' className={poppins.className}>
          Contratar
        </StyledLink>
      </Box>
      <Box width='40%' height='40%'>
        <PenTool />
      </Box>
    </Box>
  );
};
