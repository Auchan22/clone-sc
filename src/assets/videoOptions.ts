export interface Video {
  title: string;
  priceOptions: { label: string; price: string }[];
  caracteristicas: string[];
  especial: boolean;
}

const VIDEOOPTIONS: Video[] = [
  {
    title: 'Básico',
    priceOptions: [
      { label: 'por minuto', price: '1,000' },
      { label: '30 segundos', price: '600' },
      { label: '10 a 20 segundos', price: '350' },
    ],
    caracteristicas: [
      'El estilo puede variar de acuerdo a las necesidades del cliente, el video básico está más enfocado en animaciones sencillas estilo presentación sin involucrar elementos avanzados como mockups o animación.',
      'Tiempo de entrega de 5 a 7 días hábiles una vez que se cuenta con los recursos por parte del cliente.',
      '*No incluye Voz en Off',
    ],
    especial: false,
  },
  {
    title: 'Inter',
    priceOptions: [
      { label: 'por minuto', price: '2,000' },
      { label: '30 segundos', price: '1,200' },
      { label: '10 a 20 segundos', price: '700' },
    ],
    caracteristicas: [
      'El estilo puede variar de acuerdo a las necesidades del cliente, el video Intermedio involucra elementos avanzados como mockups, transiciones y animación.',
      'Tiempo de entrega de 5 a 7 días hábiles una vez que se cuenta con los recursos por parte del cliente. ',
      '*No incluye Voz en Off',
    ],
    especial: true,
  },
  {
    title: 'Completo',
    priceOptions: [
      { label: 'por minuto', price: '5,000' },
      { label: '30 segundos', price: '2,500' },
      { label: '10 a 20 segundos', price: '1,000' },
    ],
    caracteristicas: [
      'El estilo puede variar de acuerdo a las necesidades del cliente, el video Completo involucra elementos avanzados como mockups, transiciones, personajes, y/o elementos3d',
      'Tiempo de entrega de 7 a 10 días hábiles una vez que se cuenta con los recursos por parte del cliente.',
      '*No incluye Voz en Off',
    ],
    especial: false,
  },
];

export default VIDEOOPTIONS;
