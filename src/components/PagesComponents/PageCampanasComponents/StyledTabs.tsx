import { Campaña } from '@/assets/campana';
import { Tab, Tabs } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

const AntTabs = styled(Tabs)({
  borderBottom: '1px solid #e8e8e8',
  '& .MuiTabs-indicator': {
    backgroundColor: '#949494',
  },
  maxWidth: '100vw',
  overflowX: 'auto',
});

const AntTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: 'none',
  minWidth: 0,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightLight,
  marginRight: theme.spacing(1),
  color: 'rgba(48, 48, 48, 0.85)',
  fontFamily: [
    '-apple-system',
    'Poppins',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    color: '#000',
    fontWeight: 'bold',
    opacity: 1,
    '& .MuiTabs-indicator': {
      backgroundColor: '#949494',
    },
  },
  '&.Mui-selected': {
    color: '#000',
    fontWeight: theme.typography.fontWeightBold,
    transition: 'all 250ms ease-in',
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
}));

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface StyledTabProps {
  label: string;
}

interface Props {
  Tabs: Campaña[];
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
  value: number;
}

export const StyledTabs: React.FC<Props> = ({ Tabs, handleChange, value }) => {
  return (
    <AntTabs
      value={value}
      onChange={handleChange}
      aria-label='scrollable ant tabs example'
      variant='scrollable'
      scrollButtons='auto'
    >
      {Tabs.map((t, index) => (
        <AntTab
          sx={{ fontFamily: 'Poppins', fontWeight: 'bold' }}
          label={t.title}
          key={index}
          {...a11yProps(index)}
        />
      ))}
    </AntTabs>
  );
};
