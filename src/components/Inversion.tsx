import { Box, Typography } from '@mui/material';
import Link from 'next/link';

const LinkButton: React.FC<{ href: string; label: string }> = ({
  href,
  label,
}) => {
  return (
    <Link
      style={{
        textDecoration: 'none',
        marginTop: '20px',
        padding: '15px 20px',
        borderRadius: '5px',
        backgroundColor: '#fff',
        transition: 'all 125ms ease-in',
        fontSize: '12px',
        fontFamily: 'Poppins',
        width: '150px !important',
        textAlign: 'center',
      }}
      className=''
      href={href}
    >
      {label}
    </Link>
  );
};

const Inversion: React.FC = () => {
  return (
    <Box
      minWidth='100vw'
      padding='30px 40px'
      minHeight='80vh'
      sx={{ backgroundColor: '#5a00b9', color: '#fff' }}
    >
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        gap='30px'
        minWidth='80%'
      >
        <Box
          maxWidth='50%'
          display='flex'
          alignItems='center'
          flexDirection='column'
          justifyContent='space-between'
          gap='15px'
        >
          <Box>
            <Typography
              variant='h6'
              fontWeight='bold'
              fontSize='1.5rem'
              my='10px'
              fontFamily='Poppins'
            >
              ¿En cuánto tiempo recupero mi inversión?
            </Typography>
            <Typography
              variant='h6'
              fontSize='0.8rem'
              my='5px'
              fontFamily='Poppins'
            >
              Haz una simulación de tus ganancias y la cantidad de proyectos o
              clientes que necesitará tu agencia para recuperar tu inversión.
            </Typography>
            <Typography
              variant='h6'
              fontWeight='bold'
              fontSize='0.8rem'
              mt='20px'
              fontFamily='Poppins'
            >
              Psst... ¡Recuperarás tu inversión en menos de lo que te imaginas e
              invertirás menos de lo que cuesta tener a una sola persona
              trabajando en tu agencia!
            </Typography>
            <Box
              my='20px'
              display='flex'
              alignItems='center'
              justifyContent='space-between'
              width='80%'
              fontFamily='Poppins'
            >
              <LinkButton label='Calcular' href='' />
              <LinkButton label='Agendar Demostración' href='' />
            </Box>
            <Typography
              variant='h6'
              fontWeight='bold'
              fontSize='1.5rem'
              my='10px'
              fontFamily='Poppins'
            >
              Tabla de precios y ganancias
            </Typography>
            <Typography
              variant='h6'
              fontSize='0.8rem'
              my='5px'
              fontFamily='Poppins'
            >
              En las siguientes tablas está aproximadamente datos de ganancia
              para tu agencia según el porcentaje de tu paquete contratado,
              igualmente puedes ver nuestro catálogo de servicios en PDF.
            </Typography>
            <Box
              my='20px'
              display='flex'
              alignItems='center'
              justifyContent='space-between'
              width='80%'
              fontFamily='Poppins'
            >
              <LinkButton label='10%' href='' />
              <LinkButton label='20%' href='' />
              <LinkButton label='Catálogo' href='' />
            </Box>
          </Box>
        </Box>
        <Box maxWidth='30%'>
          <img
            src='https://lirp.cdn-website.com/5a4f43f8/dms3rep/multi/opt/Socialconecta2-606w.png'
            alt='Imagen Inversiones'
            height='80%'
            width='100%'
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Inversion;
