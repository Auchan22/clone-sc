import { RedesData } from '@/assets/redes';
import { Box, Typography } from '@mui/material';
import { StyledTabItems, StyledTabs } from '../PageCampanasComponents';
import { Poppins } from 'next/font/google';
import { useState } from 'react';
const poppins = Poppins({ subsets: ['latin'], weight: ['300', '500'] });

export const RedesList: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box
      minWidth='100vw'
      minHeight='80vh'
      sx={{ backgroundColor: '#e4e4e4' }}
      display='flex'
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
      py='20px'
      gap='20px'
    >
      <Typography
        className={poppins.className}
        fontWeight={500}
        color='#3a206d'
        fontSize='1.5rem'
      >
        Nuestras Redes
      </Typography>
      <StyledTabs Tabs={RedesData} handleChange={handleChange} value={value} />
      <StyledTabItems Tabs={RedesData} value={value} />
    </Box>
  );
};
