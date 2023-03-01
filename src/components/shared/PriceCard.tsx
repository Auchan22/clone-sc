import { Box } from '@mui/material';

interface Props {
  highlighted: boolean;
  children: React.ReactNode;
}

export const PriceCard: React.FC<Props> = ({ highlighted, children }) => {
  return (
    <Box
      minHeight='80%'
      width={{ xs: '80%', md: '25vw' }}
      sx={{
        borderRadius: '10px',
        borderWidth: highlighted ? '10px 0px' : '1px',
        borderColor: highlighted ? '#7b00ff' : '#d4d4d4',
        borderStyle: 'solid',
      }}
      display='flex'
      gap='5px'
      padding='20px 15px'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      boxShadow={highlighted ? 'rgba(0,0,0,.25) 0 3px 11px 0' : 'null'}
    >
      {children}
    </Box>
  );
};
