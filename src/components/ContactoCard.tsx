import { Contacto } from '@/assets/contacto';
import { Box, Icon, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

interface Props {
  data: Contacto;
}

const ContactoCard: React.FC<Props> = ({ data }) => {
  return (
    <Box
      width={{ xs: '80%', md: '30%' }}
      minHeight='300px'
      sx={{
        borderRadius: '10px',
        backgroundColor: '#fff',
        color: '#000',
        textAlign: 'center',
      }}
      boxShadow='rgba(0,0,0,.25) 0 3px 11px 0'
      padding='20px'
      display='flex'
      alignItems='center'
      flexDirection='column'
      justifyContent='center'
      gap='20px'
    >
      <data.icon sx={{ color: '#7b00ff' }} fontSize='large' />
      <Typography fontWeight='bold' fontFamily='Poppins' fontSize='1.2rem'>
        {data.title}
      </Typography>
      <Typography fontFamily='Poppins' fontSize='0.8rem'>
        {data.description}
      </Typography>
      <Link
        style={{
          textDecoration: 'none',
          marginTop: '15px',
          padding: '10px 20px',
          borderRadius: '10px',
          border: '1px solid #7b00ff',
          transition: 'all 125ms ease-in',
          fontSize: '10px',
          fontWeight: 'bold',
        }}
        className='personalizedLink'
        href={data.href}
      >
        {data.btnLabel}
      </Link>
    </Box>
  );
};

export default ContactoCard;
