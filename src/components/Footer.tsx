import REDES from '@/assets/redes';
import { Box, List, ListItem, Typography } from '@mui/material';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer>
      {' '}
      <Box
        sx={{
          position: 'relative',
          bottom: 0,
          backgroundImage:
            'linear-gradient(180deg,#7300ff 0,#420488 100%)!important',
        }}
        minWidth='100vw'
        minHeight='300px'
        padding='50px 40px'
        display='flex'
        alignItems={{ xs: 'flex-start', md: 'center' }}
        justifyContent='space-evenly'
        flexDirection={{ xs: 'column', md: 'row' }}
        gap='20px'
        color='#fff'
      >
        <Box minWidth='50%'>
          <Link href='/'>
            <img alt='Logo Turbo Creativo' />
          </Link>
          <List sx={{ display: 'flex' }}>
            {REDES.map((r, index) => (
              <Link style={{ color: '#fff' }} key={r.label} href={r.href}>
                {' '}
                <ListItem sx={{ paddingLeft: { xs: '0px', md: '16px' } }}>
                  <r.icon />
                </ListItem>
              </Link>
            ))}
          </List>
          <Typography fontFamily='Poppins' maxWidth='50%'>
            Latinoamérica, Estados Unidos y España. © 2022 Turbo Creativo
          </Typography>
        </Box>
        <Box
          display='flex'
          flexDirection='column'
          gap='15px'
          alignItems='flex-start'
        >
          <Typography fontFamily='Poppins' fontWeight='bold'>
            Enlaces{' '}
          </Typography>
          <List>
            <ListItem sx={{ padding: '0px' }}>
              <Link
                style={{
                  color: '#fff',
                  fontFamily: 'Poppins',
                  fontSize: '0.9rem',
                }}
                href='/'
              >
                Inicio
              </Link>
            </ListItem>
            <ListItem sx={{ padding: '0px' }}>
              <Link
                style={{
                  color: '#fff',
                  fontFamily: 'Poppins',
                  fontSize: '0.9rem',
                }}
                href='/servicios'
              >
                Servicios
              </Link>
            </ListItem>
            <ListItem sx={{ padding: '0px' }}>
              <Link
                style={{
                  color: '#fff',
                  fontFamily: 'Poppins',
                  fontSize: '0.9rem',
                }}
                href='/cultura-sc'
              >
                Cultura
              </Link>
            </ListItem>
            <ListItem sx={{ padding: '0px' }}>
              <Link
                style={{
                  color: '#fff',
                  fontFamily: 'Poppins',
                  fontSize: '0.9rem',
                }}
                href='/agencia-marketing-digital'
              >
                Agencia de Marketing
              </Link>
            </ListItem>
          </List>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
