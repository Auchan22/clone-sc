import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

interface Redes {
  href: string;
  icon: any;
  label: string;
}

export interface RedesData {
  title: string;
  points: string[];
  img: string;
}

const REDES: Redes[] = [
  {
    href: '/',
    icon: TwitterIcon,
    label: 'Facebook',
  },
  {
    href: '/',
    icon: FacebookIcon,
    label: 'Twitter',
  },
  {
    href: '/',
    icon: InstagramIcon,
    label: 'Instagram',
  },
  {
    href: '/',
    icon: EmailIcon,
    label: 'Email',
  },
  {
    href: '/',
    icon: WhatsAppIcon,
    label: 'WhatsApp',
  },
];

export default REDES;

export const RedesData: RedesData[] = [
  {
    title: 'Facebook',
    points: [
      '1 publicación diaria de Lunes a Domingo',
      'Diseños en fotografías y videos',
      'Respuesta a mensajes y comentarios de la publicación, de Lunes a Viernes de 9:00 a 17:00 hrs (Hora centro de CDMX)',
      'Propuesta mensual para campañas pagadas',
      'Reporte mensual de crecimiento',
      'Un agente asignado a tu negocio',
    ],
    img: 'https://lirp.cdn-website.com/36c24128/dms3rep/multi/opt/silla-vacia-facebook-1920w.png',
  },
  {
    title: 'Instagram',
    points: [
      '1 publicación diaria de Lunes a Viernes',
      'Diseños en fotografías y videos',
      'Respuesta a mensajes y comentarios de la publicación, de Lunes a Viernes de 9:00 a 17:00 hrs (Hora centro de CDMX)',
      'Propuesta mensual para campañas pagadas',
      'Reporte mensual de crecimiento',
      'Un agente asignado a tu negocio',
    ],
    img: 'https://lirp.cdn-website.com/36c24128/dms3rep/multi/opt/silla-vacia-insta-1920w.png',
  },
  {
    title: 'Twitter',
    points: [
      '1 publicación diaria de Lunes a Viernes',
      'Diseños en fotografías y videos',
      'Respuesta a mensajes y comentarios de la publicación, de Lunes a Viernes de 9:00 a 17:00 hrs (Hora centro de CDMX)',
      'Propuesta mensual para campañas pagadas',
      'Reporte mensual de crecimiento',
      'Un agente asignado a tu negocio',
    ],
    img: 'https://lirp.cdn-website.com/36c24128/dms3rep/multi/opt/silla-vacia-twitter-1920w.png',
  },
  {
    title: 'Linkedin',
    points: [
      '1 publicación diaria de Lunes a Viernes',
      'Diseños en fotografías y videos',
      'Respuesta a mensajes y comentarios de la publicación, de Lunes a Viernes de 9:00 a 17:00 hrs (Hora centro de CDMX)',
      'Propuesta mensual para campañas pagadas',
      'Reporte mensual de crecimiento',
      'Un agente asignado a tu negocio',
    ],
    img: 'https://lirp.cdn-website.com/36c24128/dms3rep/multi/opt/linkedin-1920w.png',
  },
  {
    title: 'Pinterest',
    points: [
      'Creación y configuración de Pinterest Business',
      '3 pines semanales',
      'Diseño de fotografías y videos',
      'Creación de tableros específicos',
      'Vinculación al sitio web',
      'Propuesta de campaña pagada',
    ],
    img: 'https://lirp.cdn-website.com/36c24128/dms3rep/multi/opt/Pinterest-1920w.png',
  },
  {
    title: 'Google My Business',
    points: [
      'Creación y configuración de Pinterest Business',
      '3 pines semanales',
      'Diseño de fotografías y videos',
      'Creación de tableros específicos',
      'Vinculación al sitio web',
      'Propuesta de campaña pagada',
    ],
    img: 'https://lirp.cdn-website.com/36c24128/dms3rep/multi/opt/Googlemybusiness-1920w.png',
  },
];
