import { Agencia } from '@/assets/agencia';
import { Box, Typography } from '@mui/material';

import { PriceCard, StyledLink } from './shared';

interface Props {
  data: Agencia;
}

const AgenciaCard: React.FC<Props> = ({ data }) => {
  return (
    <PriceCard highlighted={data.title === 'Startup'}>
      {data.descuento && (
        <Typography
          variant='h4'
          fontWeight='bold'
          color='red'
          fontFamily='Poppins'
        >
          50% OFF
        </Typography>
      )}
      <Typography variant='h5' fontWeight='bold' fontFamily='Poppins'>
        {data.title}
      </Typography>
      {data.descuento && (
        <Typography
          variant='body1'
          fontSize='8px'
          color='#7b00ff'
          fontFamily='Poppins'
        >
          utilizando el cupón:
        </Typography>
      )}
      <Typography
        variant='h5'
        fontSize={data.descuento ? '24px' : '20px'}
        color='#7b00ff'
        fontFamily='Poppins'
        fontWeight={data.descuento ? 'bold' : '400'}
      >
        ${data.precio} <span style={{ fontSize: '14px' }}>MXN</span>
      </Typography>
      {data.descuento && (
        <Typography
          variant='body1'
          fontSize='8px'
          color='#7b00ff'
          fontFamily='Poppins'
        >
          antes{' '}
          <span
            style={{
              fontSize: '14px',
              textDecoration: ' #7b00ff line-through',
            }}
          >
            ${data.amountDescuento}{' '}
            <span style={{ fontSize: '14px' }}>USD</span>
          </span>
        </Typography>
      )}
      <Typography variant='h6' fontSize='14px' fontFamily='Poppins'>
        Pago único
      </Typography>
      <Typography variant='body1' fontSize='8px' fontFamily='Poppins'>
        (solo pagas los servicios que tu agencia va solicitando)
      </Typography>
      <div>
        <Typography
          variant='h6'
          fontSize='14px'
          textAlign='center'
          color='#7b00ff'
          fontFamily='Poppins'
        >
          Incluye:
        </Typography>
        <ul>
          {data.points.map((p, index) => (
            <li style={{ fontSize: '10px', fontFamily: 'Poppins' }} key={index}>
              {p}
            </li>
          ))}
        </ul>
      </div>
      {data.descuento && (
        <>
          <Typography
            variant='h6'
            fontSize='14px'
            textAlign='center'
            color='#000'
            fontFamily='Poppins'
          >
            CUPÓN:{' '}
            <span style={{ color: '#7b00ff', fontWeight: 'bold' }}>
              TUOTRAMITAD
            </span>
          </Typography>
        </>
      )}
      <StyledLink href=''>Iniciar mi Agenda</StyledLink>
    </PriceCard>
  );
};

export default AgenciaCard;
