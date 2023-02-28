import CONTACTO from '@/assets/contacto';
import { Box, Typography } from '@mui/material';
import ContactoCard from './ContactoCard';

const Contactanos: React.FC = () => {
  return (
    <Box
      minWidth='100vw'
      minHeight='60vh'
      sx={{ backgroundColor: '#5a00b9', color: '#fff' }}
      display='flex'
      alignItems='center'
      justifyContent='center'
      gap='20px'
      flexDirection='column'
      my='20px'
      py='20px'
    >
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        gap='20px'
        flexDirection='column'
      >
        <Box sx={{ textAlign: 'center' }} maxWidth='60%'>
          <Typography fontFamily='Poppins' fontWeight='bold' fontSize='1rem'>
            ¡Contáctanos!
          </Typography>
          <div style={{ margin: '20px 0px' }}>
            <Typography fontFamily='Poppins' fontSize='0.8rem'>
              Empecemos esta relación de la mejor manera:{' '}
              <span style={{ fontWeight: 'bold', color: 'rgb(255, 33, 170)' }}>
                ¡Conociéndonos!
              </span>
            </Typography>
            <Typography fontFamily='Poppins' fontSize='0.8rem'>
              Contacta a uno de nuestros ejecutivos para una asesoría gratuita y
              así resolver todas tus dudas para empezar a ayudar a crear o hacer
              crecer tu Agencia de Marketing Digital
            </Typography>
          </div>
          <Typography fontFamily='Poppins' fontWeight='bold' fontSize='1.5rem'>
            ¡HOY MISMO!
          </Typography>
        </Box>
        <Box
          display='flex'
          alignItems='center'
          gap='20px'
          justifyContent='center'
        >
          {CONTACTO.map((c, index) => (
            <ContactoCard data={c} key={index} />
          ))}
        </Box>
      </Box>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        gap='20px'
        flexDirection='column'
      >
        <Box sx={{ textAlign: 'center' }} maxWidth='100%'>
          <Typography fontFamily='Poppins' fontWeight='bold' fontSize='1.5rem'>
            Preguntas Frecuentes
          </Typography>
          <div style={{ margin: '10px 0px' }}>
            <Typography fontFamily='Poppins' fontSize='0.8rem'>
              ¿Tienes alguna otra duda? Llámanos al{' '}
              <span style={{ fontWeight: 'bold' }}>7776007713</span>
            </Typography>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default Contactanos;
