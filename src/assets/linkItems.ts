interface navItems {
  title: string;
  href: string;
  subItems?: navItems[];
  description?: string;
  popover: boolean;
  clickable: boolean;
  img?: any;
}

const NAVITEMS: navItems[] = [
  {
    title: 'Inicio',
    href: '/',
    clickable: true,
    popover: false,
  },
  {
    title: 'Servicios',
    href: '/servicios',
    clickable: true,
    popover: true,
    subItems: [
      {
        title: 'Social Media Económico',
        description: 'Administración Redes Planes Económicos',
        clickable: true,
        popover: false,
        href: '/administracion-redes-sociales',
      },
      {
        title: 'Diseño de marca',
        description: 'Dale identidad a tu negocio',
        clickable: true,
        popover: false,
        href: '/diseno-de-marca',
      },
      {
        title: 'Campañas',
        description: 'Facebook, Instagram y Google',
        clickable: true,
        popover: false,
        href: '/campanas-social-conecta',
      },
      {
        title: 'VideoMarketing',
        description: 'Medios visuales',
        clickable: true,
        popover: false,
        href: '/videomarketing-socialconecta',
      },
      {
        title: 'Narración de voz',
        description: 'Dale vida a tus videos',
        clickable: true,
        popover: false,
        href: '/narracion-voz',
      },
      {
        title: 'Inicia tu Agencia de Marketing',
        description: 'Genera clientes y proyectos',
        clickable: true,
        popover: false,
        href: '/agencia-marketing-digital',
      },
      {
        title: 'Social Media Premium',
        description: 'Administración Redes Premium',
        clickable: true,
        popover: false,
        href: '/paquete-premium-de-redes-sociales',
      },
      {
        title: 'Sitio Web',
        description: 'Entra al mundo digital',
        clickable: true,
        popover: false,
        href: '/pagina-web',
      },
      {
        title: 'Menú digital',
        description: 'A la carta desde tu smartphone',
        clickable: true,
        popover: false,
        href: '/menu-digital',
      },
      {
        title: 'Tienda WhatsApp',
        description: 'Vende desde tu WhatsApp',
        clickable: true,
        popover: false,
        href: '/tienda-whatsapp',
      },
      {
        title: 'Creación de Naming',
        description: 'La esencia de tu proyecto',
        clickable: true,
        popover: false,
        href: '/naming-sc',
      },
    ],
  },
  {
    title: 'Cultura',
    href: '/cultura-sc',
    clickable: true,
    popover: false,
  },
  //   {
  //     title: 'Social Academy',
  //     href: '/',
  //     clickable: false,
  //     popover: true,
  //   },
  {
    title: 'Contacto',
    href: '/contacto',
    clickable: true,
    popover: false,
  },
];

export default NAVITEMS;
