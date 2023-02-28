import SERVICES from '@/assets/servicios';
import { styled } from '@mui/material/styles';
import { Box, Typography, Tab, Tabs, Button } from '@mui/material';

import * as React from 'react';
import Link from 'next/link';

const AntTabs = styled(Tabs)({
  borderBottom: '1px solid #e8e8e8',
  '& .MuiTabs-indicator': {
    backgroundColor: '#7b00ff',
  },
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
    opacity: 1,
  },
  '&.Mui-selected': {
    color: '#000',
    fontWeight: theme.typography.fontWeightBold,
    transition: 'all 250ms ease-in',
    borderRight: '3px solid #000',
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
}));

interface StyledTabProps {
  label: string;
}

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  index: number;
}

function TabPanel(props: StyledTabsProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Servicios: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box
      display='flex'
      minWidth='100vw'
      minHeight='80vh'
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
      gap='50px'
    >
      <Typography
        variant='h5'
        maxWidth={{ xs: '90%', md: '30%' }}
        textAlign='center'
        fontWeight='bolder'
        fontFamily='Poppins'
      >
        Servicios que ofrecemos como marca blanca para tu agencia
      </Typography>
      <Box
        maxHeight='70%'
        display='flex'
        alignItems='center'
        flexDirection='column'
        justifyContent='center'
      >
        <Box
          sx={{ borderBottom: 1, borderColor: 'divider' }}
          maxWidth='90%'
          margin='0px auto'
        >
          <AntTabs
            value={value}
            onChange={handleChange}
            aria-label='scrollable ant tabs example'
            variant='scrollable'
            scrollButtons='auto'
          >
            {SERVICES.map((s, index) => (
              <AntTab
                sx={{ fontFamily: 'Poppins', fontWeight: 'bold' }}
                label={s.title}
                key={index}
                {...a11yProps(index)}
              />
            ))}
          </AntTabs>
        </Box>
        {SERVICES.map((s, index) => {
          return (
            <TabPanel value={value} key={index} index={index}>
              <Box
                padding='40px 35px'
                minHeight='80vh'
                minWidth='70vw'
                display='flex'
                justifyContent='center'
              >
                <div
                  style={{
                    minHeight: '100%',
                    maxWidth: '40%',
                  }}
                >
                  <img src={s.img} alt={s.title} width='100%' height='100%' />
                </div>
                <Box
                  display='flex'
                  flexDirection='column'
                  alignItems='center'
                  justifyContent='center'
                  maxWidth='30%'
                >
                  <Typography
                    fontFamily='Poppins'
                    variant='body1'
                    fontWeight='bold'
                    color='#7b00ff'
                  >
                    {s.title} desde ${s.price} MXN
                  </Typography>
                  <Typography
                    fontFamily='Poppins'
                    fontWeight={100}
                    variant='body2'
                  >
                    {s.description}
                  </Typography>

                  <Link
                    style={{
                      textDecoration: 'none',
                      marginTop: '15px',
                      padding: '10px 20px',
                      borderRadius: '20px',
                      border: '1px solid #7b00ff',
                      transition: 'all 125ms ease-in',
                      fontSize: '10px',
                    }}
                    className='personalizedLink'
                    href={s.href}
                  >
                    Más Información
                  </Link>
                </Box>
              </Box>
            </TabPanel>
          );
        })}
      </Box>
    </Box>
  );
};

export default Servicios;
