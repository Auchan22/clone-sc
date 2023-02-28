import { Box, Typography } from '@mui/material';

const Gastos: React.FC = () => {
  return (
    <Box
      display='flex'
      my='50px'
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
        Deja de gastar en renta de oficinas, empleados y gastos fijos...
      </Typography>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        flexDirection={{ xs: 'column', md: 'row' }}
        gap='15px'
        maxHeight='70%'
      >
        <Box minWidth='50%'></Box>
        <Box maxWidth={{ xs: '90%', md: '50%' }}>
          <Box
            display='flex'
            flexDirection='column'
            alignItems={{ xs: 'center', md: 'flex-start' }}
            justifyContent={{ xs: 'center', md: 'normal' }}
            maxWidth={{ xs: '100%', md: '80%' }}
            gap='15px'
          >
            <div>
              <Typography
                textAlign={{ xs: 'center', md: 'left' }}
                fontWeight='bold'
                variant='h5'
                color='#7b00ff'
              >
                01.
              </Typography>
              Ofrece servicios de marketing digital como gestión de redes
              sociales, diseño de logos, creación de sitios web, tienda en
              Whatsapp y más con tus propios precios y tu propia marca.
              ¡Nosotros te trabajamos todo!
            </div>
            <div>
              {' '}
              <Typography
                fontWeight='bold'
                variant='h5'
                textAlign={{ xs: 'center', md: 'left' }}
                color='#7b00ff'
              >
                02.
              </Typography>
              Nosotros tendremos el contacto directo contigo o con un
              representante de tu empresa y tú lo tendrás con tus clientes así
              garantizamos un servicio directo a tu empresa. Siendo tú el
              intermediario entre nosotros y tus clientes evitando el
              conocimiento de nuestros precios y trabajando para ti como marca
              blanca.{' '}
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Gastos;
