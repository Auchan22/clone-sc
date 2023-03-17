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
    title: 'Básica',
    precio: 30,
    descuento: false,
    points: [
      'Precio mayorista',
      'Portafolio de los servicios',
      'Manuales de procesos y curso de capacitación para la venta de nuestros servicios',
      'Reporte de informes (redes sociales) con tu logotipo',
      'Catálogo de servicios con tus precios',
      '90 post para tu agencia de Marketing',
      'Accesos a plataforma para miembros de tu agencia (Turbo Academy)',
      'Acceso a cuentas bancarias en más de 15 países',
    ],
  },
  {
    title: 'Plus',
    precio: 50,
    descuento: false,
    points: [
      '10% de descuento de Precio mayorista',
      'Portafolio de los servicios',
      'Manuales de procesos y curso de capacitación para la venta de nuestros servicios',
      'Reporte de informes (redes sociales) con tu logotipo',
      'Catálogo de servicios con tus precios',
      '90 post para tu agencia de Marketing',
      'Accesos a plataforma para miembros de tu agencia (Turbo Academy)',
      'Acceso a cuentas bancarias en más de 15 países',
      'Un Agency Manager asignado para soporte de lunes a lunes.',
      '10.000 Seguidores para Instagram',
    ],
  },
  {
    title: 'Pro',
    precio: 100,
    amountDescuento: 25000,
    descuento: false,
    points: [
      '30% de descuento de Precio mayorista',
      'Portafolio de los servicios',
      'Manuales de procesos y curso de capacitación para la venta de nuestros servicios',
      'Reporte de informes (redes sociales) con tu logotipo',
      'Catálogo de servicios con tus precios',
      '90 post para tu agencia de Marketing',
      'Accesos a plataforma para miembros de tu agencia (Turbo Academy)',
      'Acceso a cuentas bancarias en más de 15 países',
      'Un Agency Manager asignado para soporte de lunes a lunes.',
      '30.000 Seguidores para Instagram',
    ],
  },
];

export default AGENCIAS;
