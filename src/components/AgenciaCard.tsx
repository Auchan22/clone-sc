import { Agencia } from '@/assets/agencia';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';

interface Props {
  data: Agencia;
}

const AgenciaCard: React.FC<Props> = ({ data }) => {
  return (
    <Box
      minHeight='80vh'
      width={{ xs: '80%', md: '25vw' }}
      sx={{
        borderRadius: '10px',
        borderWidth: data.title === 'Startup' ? '10px 0px' : '1px',
        borderColor: data.title === 'Startup' ? '#7b00ff' : '#d4d4d4',
        borderStyle: 'solid',
      }}
      display='flex'
      gap='5px'
      padding='20px 15px'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      boxShadow={
        data.title === 'Startup' ? 'rgba(0,0,0,.25) 0 3px 11px 0' : 'null'
      }
    >
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
            <span style={{ fontSize: '14px' }}>MXN</span>
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
      <Link
        style={{
          textDecoration: 'none',
          marginTop: '15px',
          padding: '10px 15px',
          borderRadius: '10px',
          border: '1px solid #7b00ff',
          transition: 'all 125ms ease-in',
          fontSize: '10px',
        }}
        className='personalizedLink'
        href=''
      >
        Iniciar mi Agenda
      </Link>
    </Box>
  );
};

export default AgenciaCard;
