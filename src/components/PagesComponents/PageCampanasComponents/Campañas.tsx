import CAMPAÑAS from '@/assets/campana';
import { Box, Typography } from '@mui/material';

import { Poppins } from 'next/font/google';
import { useState } from 'react';
import { StyledTabItems } from './StyledTabItems';
import { StyledTabs } from './StyledTabs';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '500'] });

export const Campañas: React.FC = () => {
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
        Nuestras Campañas
      </Typography>
      <StyledTabs Tabs={CAMPAÑAS} handleChange={handleChange} value={value} />
      <StyledTabItems Tabs={CAMPAÑAS} value={value} />
    </Box>
  );
};
