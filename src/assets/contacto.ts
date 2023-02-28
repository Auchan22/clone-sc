import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

export interface Contacto {
  icon: any;
  title: string;
  description: string;
  btnLabel: string;
  phoneNumbers?: { country: string; number: string }[];
  href: string;
}

const CONTACTO: Contacto[] = [
  {
    title: 'WhatsApp Internacional',
    description:
      'Te atendemos en un horario de: Lunes a Viernes de 9:00 am a 6:00 pm',
    btnLabel: 'Esperamos tu mensaje',
    icon: WhatsAppIcon,
    href: '',
  },
  {
    title: 'Llámanos',
    description:
      'Para consultas y preguntas generales, comuníquese con nosotros por llamada directa:',
    btnLabel: 'Llámenos',
    icon: LocalPhoneIcon,
    phoneNumbers: [
      { country: 'Esp', number: '+34 (91) 080-0503' },
      { country: 'Esp', number: '+34 (91) 080-0503' },
      { country: 'Esp', number: '+34 (91) 080-0503' },
    ],
    href: '',
  },
  {
    title: 'Esperamos tu mail',
    description:
      'Consultas y preguntas generales, comuníquese con nosotros por correo electrónico',
    btnLabel: 'Envíanos un Correo',
    icon: EmailIcon,
    href: '',
  },
];

export default CONTACTO;
