export interface Page {
  title: string;
  price: string;
  cuotasPrice: string[];
  gastos: string[];
  highlighted: boolean;
  href: string;
}

const PAGINAS: Page[] = [
  {
    title: 'Landing Page',
    price: '5,000',
    cuotasPrice: ['1,499', '499'],
    gastos: ['125', '15'],
    highlighted: false,
    href: '',
  },
  {
    title: 'Informativo',
    price: '8,499',
    cuotasPrice: ['3,000', '999'],
    gastos: ['125', '15'],
    highlighted: false,
    href: '',
  },
  {
    title: 'Tienda Básica',
    price: '14,999',
    cuotasPrice: ['4,000', '1,499'],
    gastos: ['200', '20'],
    highlighted: true,
    href: '',
  },
  {
    title: 'Tienda Completa',
    price: '17,999',
    cuotasPrice: ['5,000', '1,999'],
    gastos: ['350', '40'],
    highlighted: false,
    href: '',
  },
];

export default PAGINAS;
