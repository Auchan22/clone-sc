import { Box } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link';

export const ButtonWhatsApp: React.FC = () => {
  return (
    <Link href='' style={{ textDecoration: 'none' }}>
      <Box
        sx={{ backgroundColor: '#7b00ff' }}
        display='flex'
        gap='20px'
        alignItems='center'
        justifyContent='center'
        maxWidth='320px'
        position='fixed'
        bottom={10}
        right={10}
        borderRadius='100%'
        boxShadow='rgb(134 134 134 / 80%) 4px 4px 4px '
        p='20px'
        zIndex='10'
      >
        <WhatsAppIcon style={{ color: '#25D366' }} />
      </Box>
    </Link>
  );
};
