import { Box, Typography, useMediaQuery } from '@mui/material';
import { Campaña } from '@/assets/campana';
import { StyledLink } from '@/components/shared';

import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '500'] });

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

interface Props {
  Tabs: Campaña[];
  value: number;
}

export const StyledTabItems: React.FC<Props> = ({ Tabs, value }) => {
  const matches = useMediaQuery('(max-width:768px)');

  return (
    <>
      {Tabs.map((s, index) => {
        return (
          <TabPanel value={value} key={index} index={index}>
            <Box
              padding={{ xs: '0px', md: '40px 35px' }}
              minHeight='80vh'
              minWidth={{ xs: '80vw', md: '70vw' }}
              display='flex'
              justifyContent='center'
              alignItems={{ xs: 'center', md: 'auto' }}
              flexDirection={{ xs: 'column', md: 'row' }}
            >
              <div
                style={{
                  minHeight: '100%',
                  maxWidth: matches ? '100%' : '40%',
                }}
              >
                <img src={s.img} alt={s.title} width='100%' height='100%' />
              </div>
              <Box
                display='flex'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                maxWidth={{ xs: '70%', md: '30%' }}
              >
                <Typography
                  fontFamily='Poppins'
                  variant='h5'
                  fontWeight={500}
                  color='#000'
                  fontSize='1.5rem'
                >
                  {s.subTitle}
                </Typography>
                <ul>
                  {s.points.map((p, index) => (
                    <li key={index}>
                      <Typography
                        fontFamily='Poppins'
                        fontWeight={300}
                        variant='body2'
                        fontSize='0.8rem'
                      >
                        {p}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </Box>
            </Box>
          </TabPanel>
        );
      })}
    </>
  );
};
