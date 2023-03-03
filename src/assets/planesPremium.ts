export interface PlanPremium {
  title: string;
  price: string;
  cantPost: number;
  href: string;
  highlighted: boolean;
}

const PLANESPREMIUM: PlanPremium[] = [
  {
    title: 'Básico',
    price: '1,999',
    cantPost: 8,
    href: '',
    highlighted: false,
  },
  {
    title: 'Inter',
    price: '2,499',
    cantPost: 12,
    href: '',
    highlighted: true,
  },
  {
    title: 'Completo',
    price: '2,999',
    cantPost: 15,
    href: '',
    highlighted: false,
  },
  {
    title: 'Ultra',
    price: '4,999',
    cantPost: 30,
    href: '',
    highlighted: false,
  },
];

export default PLANESPREMIUM;
