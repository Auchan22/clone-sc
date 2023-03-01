import { Video } from '@/assets/videoOptions';
import { PriceCard, StyledLink } from '@/components/shared';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Poppins } from 'next/font/google';
const poppins = Poppins({ subsets: ['latin'], weight: ['300', '600'] });

interface Props {
  data: Video;
}

export const VideoOptionCard: React.FC<Props> = ({ data }) => {
  return (
    <PriceCard highlighted={data.especial}>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        gap='20px'
        flexDirection='column'
        p='20px 30px'
        width='90%'
        minHeight='90%'
      >
        <Typography
          className={poppins.className}
          fontWeight={600}
          fontSize='1.5rem'
        >
          {data.title}
        </Typography>

        <Divider />
        {data.priceOptions.map((o, index) => (
          <Box key={index}>
            <Typography
              className={poppins.className}
              fontWeight={600}
              fontSize='1.5rem'
              color='#7b00ff'
            >
              {o.price}{' '}
              <span className={poppins.className} style={{ fontSize: '1rem' }}>
                MXN
              </span>
            </Typography>
            <Typography
              className={poppins.className}
              fontWeight={300}
              fontSize='1rem'
            >
              {o.label}
            </Typography>
          </Box>
        ))}
        <Box mt='10px'>
          <Typography
            className={poppins.className}
            fontWeight={300}
            fontSize='0.8rem'
            color='#939393'
            mb='10px'
          >
            Elige tu paquete al momento de contratar.
          </Typography>
          <StyledLink className={poppins.className} href=''>
            Contratar
          </StyledLink>
        </Box>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel-content'
          >
            <Typography
              className={poppins.className}
              fontWeight={600}
              fontSize='0.8rem'
              color='#939393'
            >
              Elige tu paquete al momento de contratar.
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ background: '#f2f2f2' }}>
            {data.caracteristicas.map((c, index) => (
              <Typography
                key={index}
                className={poppins.className}
                fontWeight={300}
                fontSize='0.8rem'
                color='rgba(141,33,255,1)'
              >
                {c}
              </Typography>
            ))}
          </AccordionDetails>
        </Accordion>
      </Box>
    </PriceCard>
  );
};
