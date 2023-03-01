import CONTACTO from '@/assets/contacto';
import { Box, Typography } from '@mui/material';
import AccordionPreguntas from './shared/AccordionPreguntas';
import ContactoCard from './ContactoCard';
import { PreguntasFrecuentes } from './shared';
import PREGUNTAS from '@/assets/preguntasFrecuentes';

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
          flexDirection={{ xs: 'column', md: 'row' }}
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
        <PreguntasFrecuentes preguntas={PREGUNTAS} label='' />
      </Box>
    </Box>
  );
};

export default Contactanos;
