import { Pregunta } from '@/assets/preguntasFrecuentes';
import { Box, Typography } from '@mui/material';
import AccordionPreguntas from './AccordionPreguntas';

interface Props {
  preguntas: Pregunta[];
  label: string | React.ReactNode;
}

export const PreguntasFrecuentes: React.FC<Props> = ({ preguntas, label }) => {
  return (
    <Box
      minWidth='100vw'
      display='flex'
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
      py='15px'
      gap='10px'
      sx={{ backgroundColor: '#5a00b9', color: '#fff' }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Typography fontFamily='Poppins' fontWeight='bold' fontSize='1.5rem'>
          Preguntas Frecuentes
        </Typography>
        <div style={{ margin: '10px 0px', fontFamily: 'Poppins' }}>{label}</div>
      </Box>
      <AccordionPreguntas preguntas={preguntas} />
    </Box>
  );
};
