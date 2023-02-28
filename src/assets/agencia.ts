export interface Agencia {
  title: string;
  precio: number;
  descuento: boolean;
  amountDescuento?: number;
  cupon?: string;
  points: string[];
}

const AGENCIAS: Agencia[] = [
  {
    title: 'Emprendedor',
    precio: 3999,
    descuento: false,
    points: [
      '10% de descuento en todos nuestros servicios',
      'Manuales de procesos y curso de capacitación para la venta de nuestros servicios',
      'Reporte de informes (redes sociales) con tu logotipo.',
      'Catálogo de servicios con tus precios.',
      '1 mes de plan esencial (una red social)',
      'Un Agency Manager asignado para soporte de lunes a viernes de 9:00 a 17:00 hrs. (Hora centro CDMX).',
      'Accesos a Plataforma para miembros de agencia. (Social Academy)',
    ],
  },
  {
    title: 'Startup',
    precio: 15000,
    descuento: false,
    points: [
      '10% de descuento en todos nuestros servicios',
      'Manuales de procesos y curso de capacitación para la venta de nuestros servicios',
      'Reporte de informes (redes sociales) con tu logotipo.',
      'Catálogo de servicios con tus precios.',
      'Sitio web de tu agencia con tienda en línea (Tienda básica).',
      '1 mes de plan esencial (una red social)',
      'Diseño de logotipo para tu agencia',
      'Un Agency Manager asignado para soporte de lunes a viernes de 9:00 a 17:00 hrs. (Hora centro CDMX). ',
      'Accesos a Plataforma para miembros de agencia. (Social Academy)',
    ],
  },
  {
    title: 'Completa',
    precio: 12500,
    amountDescuento: 25000,
    descuento: true,
    points: [
      '20% de descuento en todos nuestros servicios',
      'Manuales de procesos y curso de capacitación para la venta de nuestros servicios',
      'Reporte de informes (redes sociales) con tu logotipo.',
      'Catálogo de servicios con tus precios.',
      'Sitio web de tu agencia con tienda en línea (Tienda básica).',
      '1 mes de plan indispensable (2 redes sociales) y una campaña de Google Display',
      'Diseño de logotipo para tu agencia',
      'Un Agency Manager asignado para soporte de lunes a viernes de 9:00 a 17:00 hrs. (Hora centro CDMX). ',
      'Accesos a Plataforma para miembros de agencia. (Social Academy)',
    ],
  },
];

export default AGENCIAS;
