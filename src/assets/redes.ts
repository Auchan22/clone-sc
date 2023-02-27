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
