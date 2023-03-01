import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Pregunta } from '@/assets/preguntasFrecuentes';
import { Box } from '@mui/material';

interface Props {
  preguntas: Pregunta[];
}

const AccordionPreguntas: React.FC<Props> = ({ preguntas }) => {
  return (
    <Box
      maxWidth='80%'
      minHeight='250px'
      display='flex'
      flexDirection={{ xs: 'column', md: 'row' }}
      flexWrap='wrap'
      gap='10px'
      justifyContent='space-between'
      alignItems='center'
      mx='auto'
    >
      {preguntas.map((p, index) => (
        <Accordion
          key={index}
          sx={{
            backgroundColor: 'transparent',
            maxWidth: { xs: '90vw', md: '40%' },
            borderRadius: '0px',
            color: '#fff',
            flexGrow: 1,
          }}
        >
          <AccordionSummary
            sx={{ border: '1px solid #d4d4d4' }}
            expandIcon={
              <ExpandMoreIcon
                sx={{ backgroundColor: '#d4d4d4', borderRadius: '5px' }}
              />
            }
            aria-controls={`panel${index}a-content`}
            id={`panel${index}a-header`}
          >
            <Typography fontFamily='Poppins' fontSize='1rem'>
              {p.label}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ border: '1px solid #d4d4d4' }}>
            {p.description.map((d, index) => (
              <div key={index}>
                <Typography fontFamily='Poppins' fontSize='0.8rem'>
                  {d}
                </Typography>
                <br />
              </div>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default AccordionPreguntas;
