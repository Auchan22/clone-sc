export interface Servicios {
  title: string;
  description: string;
  descriptionCard: string;
  price: number;
  img: string;
  href: string;
  color: string;
}

const SERVICES: Servicios[] = [
  {
    title: 'Social Media Económico',
    description:
      'Ofrece a tus clientes paquetes completos, diseñados para pequeños, medianos y grandes negocios con márgenes de utilidad para ti arriba del 100%.',
    descriptionCard:
      'Conecta con tu audiencia, domina nuevas estrategias e involucra a tu comunidad en las redes sociales.',
    price: 999,
    img: 'https://lirp.cdn-website.com/5a4f43f8/dms3rep/multi/opt/Facebook-1920w.png',
    href: '/administracion-redes-sociales',
    color: '#ff6a00',
  },
  {
    title: 'Social Media Premium',
    description:
      'Ofrece a tus clientes paquetes completos, diseñados para pequeños, medianos y grandes negocios con márgenes de utilidad para ti arriba del 100%.',
    descriptionCard:
      'Genera conexión con tus clientes con contenido hecho específicamente para ti, tus redes sociales nunca serán las mismas.',
    price: 1999,
    img: 'https://lirp.cdn-website.com/5a4f43f8/dms3rep/multi/opt/Facebook-1920w.png',
    href: '/paquete-premium-de-redes-sociales',
    color: '#7b00ff',
  },
  {
    title: 'Diseño de marca',
    description:
      'Damos concepto, personalidad y estilo a la marca de tus clientes. Hacemos muchísimo más que solo un logotipo.  Diseño original y único, con manual de marca incluído y entrega de propuestas a tus clientes con tu propia marca, listos para su aprobación.',
    price: 2999,
    img: 'https://lirp.cdn-website.com/5a4f43f8/dms3rep/multi/opt/logo-1920w.png',
    href: '/diseno-de-marca',
    descriptionCard:
      'La imagen de tu marca es su huella digital, dale una identidad única y audaz.',
    color: '#008eff',
  },

  {
    title: 'Video Marketing',
    description:
      'Hoy en día existen infinidades de herramientas de marketing digital, una de ellas es el vídeo marketing que es un recurso de marketing digital que utiliza la producción de contenido audiovisual para alcanzar ciertos objetivos. Ofrece a tus clientes videos elaborados profesionalmente en programas como After Effects o Premier a un precio súper económico.',
    price: 350,
    img: 'https://lirp.cdn-website.com/7b521824/dms3rep/multi/opt/nuestros-s4545455ervicios-2020-febrero-1920w.png',
    href: '/videomarketing',
    descriptionCard:
      'Es un recurso de marketing digital que utiliza la producción de contenido audiovisual para captar la atención de tus clientes.',
    color: '#2a1db5',
  },

  {
    title: 'Página Web',
    description:
      'Nuestras páginas web te ayudarán a alcanzar cualquiera que sea tu objetivo, ya sea incrementar tus ventas, atraer más clientes o hacer crecer tu marca, con nosotros das un paso a la segura porque contamos con especialistas en diseño, programación y posicionamiento web.',
    price: 499,
    img: 'https://lirp.cdn-website.com/5a4f43f8/dms3rep/multi/opt/Web-30a75956-1920w.png',
    href: '/pagina-web',
    descriptionCard:
      'Revela tu imagen e involucra tu estrategia de desarrollo para una experiencia de usuario óptima.',
    color: '#0ac07c',
  },
  {
    title: 'Campañas',
    description:
      '¿Necesitas campañas en google o en redes sociales efectivas para tus clientes? Nosotros somos especialistas en todos los administradores de anuncios de las redes sociales más populares y con Google Ads creamos anuncios en línea para llegar a los usuarios de tus clientes en el momento exacto en que se interesan por los productos y servicios que ellos ofrecen. Nuestro equipo cuenta con capacitaciones constantes para trabajar anuncios en Google y Youtube con los mejores rendimientos por click ahora al alcance de tu agencia.',
    price: 500,
    img: 'https://lirp.cdn-website.com/7b521824/dms3rep/multi/opt/nuestros-s4r4r4rervicios-2020-febrero-1920w.png',
    href: '/campanas',
    descriptionCard:
      'Posiciona tu negocio; aprovecha cuando los usuarios busquen negocios como el tuyo mediante Google, Facebook e Instagram',
    color: '#ff0000',
  },
  {
    title: 'Menú Digital',
    description:
      'Nosotros lo diseñamos y creamos por ti, listo para usarse con la cámara de cualquier dispositivo moderno. Sin necesidad de aplicaciones especiales.',
    price: 1499,
    img: 'https://lirp.cdn-website.com/7b521824/dms3rep/multi/opt/nuestros-servicios-2020-febrero-1920w.png',
    href: '/menu-digital',
    descriptionCard:
      'Abre la cámara desde tu celular y conoce el menú en cuestión de segundos',
    color: '#ff007b',
  },
];

export default SERVICES;
