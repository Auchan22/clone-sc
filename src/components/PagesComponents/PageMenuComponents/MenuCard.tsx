import { Page } from '@/assets/pages';
import { PriceCard, StyledLink } from '@/components/shared';
import { Box, Divider, Typography } from '@mui/material';
import { Poppins } from 'next/font/google';
import { Menu } from './MenuList';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '600'] });

interface Props {
  data: Menu;
}

export const MenuCard: React.FC<Props> = ({ data }) => {
  return (
    <PriceCard highlighted={data.highlighted}>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        gap='20px'
        flexDirection='column'
        p='20px 10px'
        width='90%'
        minHeight='90%'
      >
        <Typography
          className={poppins.className}
          fontWeight={600}
          fontSize='1.5rem'
          textAlign='center'
        >
          {data.title}
        </Typography>

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
            Anualmente / 40 platillos
          </Typography>
        </Box>

        <Box textAlign='center'>
          <Typography
            className={poppins.className}
            fontWeight={600}
            fontSize='1rem'
          >
            Incluye:
          </Typography>
          <Box my='10px'>
            <ul>
              {data.caracteristics.map((c, index) => (
                <li key={index}>
                  <Typography
                    textAlign='left'
                    className={poppins.className}
                    fontWeight={300}
                    fontSize='0.8rem'
                    color='#000'
                  >
                    {c}
                  </Typography>
                </li>
              ))}
            </ul>
            <Box my='10px' textAlign='center'>
              <Typography
                className={poppins.className}
                fontWeight={300}
                fontSize='0.8rem'
                color='#949494'
              >
                Entrega en 5-7 días hábiles. (Teniendo todo el contenido del
                cliente)
              </Typography>
            </Box>
          </Box>
        </Box>
        <StyledLink className={poppins.className} href=''>
          Contratar
        </StyledLink>
      </Box>
    </PriceCard>
  );
};
