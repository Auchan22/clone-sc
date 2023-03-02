import { Page } from '@/assets/pages';
import { PriceCard, StyledLink } from '@/components/shared';
import { Box, Divider, Typography } from '@mui/material';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '600'] });

interface Props {
  data: Page;
}

export const NegocioCard: React.FC<Props> = ({ data }) => {
  return (
    <PriceCard highlighted={data.highlighted}>
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
        <Box textAlign='center'>
          <Typography
            className={poppins.className}
            fontWeight={600}
            fontSize='1.5rem'
          >
            {data.title}
          </Typography>
          <Typography
            className={poppins.className}
            fontWeight={300}
            fontSize='0.8rem'
          >
            En una sola exhibición
          </Typography>
        </Box>

        <Box textAlign='center'>
          <Typography
            className={poppins.className}
            fontWeight={600}
            fontSize='1.5rem'
            color='#7b00ff'
          >
            $ {data.price}{' '}
            <span className={poppins.className} style={{ fontSize: '1rem' }}>
              MXN
            </span>
          </Typography>

          <Typography
            className={poppins.className}
            fontWeight={300}
            fontSize='0.8rem'
            color='#949494'
          >
            *Único pago (posteriormente pagarás la renovación del hosting y el
            uso de la plataforma:{' '}
            <span style={{ color: '#7b00ff' }}>
              ${data.gastos[0]} USD AL AÑO O ${data.gastos[1]} USD AL MES)
            </span>
          </Typography>
        </Box>
        <StyledLink className={poppins.className} href=''>
          Comprar
        </StyledLink>

        <Divider />

        <Box textAlign='center'>
          <Typography
            className={poppins.className}
            fontWeight={600}
            fontSize='1.5rem'
          >
            En cuotas
          </Typography>
          <Box>
            <Box my='10px'>
              <Typography
                className={poppins.className}
                fontWeight={600}
                fontSize='1.5rem'
                color='#7b00ff'
              >
                $ {data.cuotasPrice[0]}{' '}
                <span
                  className={poppins.className}
                  style={{ fontSize: '1rem' }}
                >
                  MXN
                </span>
              </Typography>
              <Typography
                className={poppins.className}
                fontWeight={300}
                fontSize='0.8rem'
                color='#949494'
              >
                Pago inicial (única vez)
              </Typography>
            </Box>
            <Box>
              <Typography
                className={poppins.className}
                fontWeight={600}
                fontSize='1.5rem'
                color='#7b00ff'
              >
                $ {data.cuotasPrice[1]}{' '}
                <span
                  className={poppins.className}
                  style={{ fontSize: '1rem' }}
                >
                  MXN
                </span>
              </Typography>
              <Typography
                className={poppins.className}
                fontWeight={300}
                fontSize='0.8rem'
                color='#949494'
              >
                once pagos mensuales
              </Typography>
            </Box>
          </Box>
        </Box>
        <StyledLink className={poppins.className} href=''>
          Comprar
        </StyledLink>
      </Box>
    </PriceCard>
  );
};
