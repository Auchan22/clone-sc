import { Box, Typography } from '@mui/material';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '600'] });

const redes = [
  {
    title: 'Facebook',
    img: 'https://irp.cdn-website.com/5a4f43f8/dms3rep/multi/redes-sociales-premium1-640w.png.webp',
  },
  {
    title: 'Instagram',
    img: 'https://lirp.cdn-website.com/5a4f43f8/dms3rep/multi/opt/redes-sociales-premium2-640w-1920w.png',
  },
  {
    title: 'Twitter',
    img: 'https://lirp.cdn-website.com/5a4f43f8/dms3rep/multi/opt/redes-sociales-premium3-640w-1920w.png',
  },
  {
    title: 'Linkedin',
    img: 'https://irp.cdn-website.com/5a4f43f8/dms3rep/multi/redes-sociales-premium4-640w.png.webp',
  },
  {
    title: 'Pinteres',
    img: 'https://lirp.cdn-website.com/5a4f43f8/dms3rep/multi/opt/redes-sociales-premium5-640w-1920w.png',
  },
  {
    title: 'Google My Business',
    img: 'https://lirp.cdn-website.com/5a4f43f8/dms3rep/multi/opt/redes-sociales-premium6-640w-1920w.png',
  },
];

export const RedesSociales: React.FC = () => {
  return (
    <Box
      minWidth='100vw'
      minHeight='100vh'
      sx={{ backgroundColor: 'rgba(250,248,255,1)' }}
      py='7%'
      textAlign='center'
      px='40px'
    >
      <Typography
        className={poppins.className}
        fontSize='1.5rem'
        fontWeight={600}
      >
        Redes Sociales
      </Typography>
      <Typography
        className={poppins.className}
        fontSize='0.9rem'
        fontWeight={300}
      >
        Elige la Red Social en la que te gustaría que tu negocio tuviera
        presencia y que nosotros la administremos.
      </Typography>
      <Box
        display='flex'
        alignItems='center'
        maxHeight='60%'
        justifyContent='center'
        flexDirection={{ xs: 'column', md: 'row' }}
        gap='20px'
        mt='20px'
      >
        <Box
          maxWidth='50%'
          maxHeight='30%'
          px='50px'
          display='flex'
          alignItems='center'
          flexWrap='wrap'
          justifyContent={{ xs: 'center', md: 'space-between' }}
          gap='20px'
        >
          {redes.map((r, index) => (
            <Box
              key={index}
              display='flex'
              width='30%'
              alignItems='center'
              justifyContent='center'
              gap='15px'
              flexDirection='column'
            >
              <img
                width='80vh'
                height='30%'
                alt={`${r.title} Image`}
                src={r.img}
              />
              <Typography
                className={poppins.className}
                fontSize='0.9rem'
                fontWeight={300}
              >
                {r.title}
              </Typography>
            </Box>
          ))}
        </Box>
        <img
          width='60%'
          height='60%'
          src='https://irp.cdn-website.com/5a4f43f8/dms3rep/multi/Facebook-640w.png.webp'
        />
      </Box>
    </Box>
  );
};
