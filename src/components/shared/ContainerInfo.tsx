import { Box } from '@mui/material';

interface Props {
  children: React.ReactNode;
}

export const ContainerInfo: React.FC<Props> = ({ children }) => {
  return (
    <Box
      minWidth='100vw'
      minHeight='60vh'
      mx='auto'
      my='20px'
      display='flex'
      alignItems='center'
      justifyContent='space-around'
      flexDirection={{ xs: 'column', md: 'row' }}
      sx={{ backgroundColor: '#fff' }}
      gap='40px'
    >
      {children}
    </Box>
  );
};
