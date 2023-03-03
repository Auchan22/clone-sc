export interface Plan {
  title: string;
  precios: {
    precio: string;
    precioAño?: string;
    cantRedesSociales: number;
    href: string;
  }[];
  highlighted: boolean;
}

const PLANES: Plan[] = [
  {
    title: 'Esencial',
    precios: [
      {
        precio: '999',
        cantRedesSociales: 1,
        href: '',
      },
      {
        precio: '9,588',
        cantRedesSociales: 1,
        href: '',
        precioAño: '799',
      },
    ],
    highlighted: false,
  },
  {
    title: 'Indispensable',
    precios: [
      {
        precio: '1,199',
        cantRedesSociales: 2,
        href: '',
      },
      {
        precio: '11,988',
        cantRedesSociales: 2,
        href: '',
        precioAño: '999',
      },
    ],
    highlighted: true,
  },
  {
    title: 'Todo en uno',
    precios: [
      {
        precio: '1,599',
        cantRedesSociales: 3,
        href: '',
      },
      {
        precio: '17,998',
        cantRedesSociales: 3,
        href: '',
        precioAño: '1,499',
      },
    ],
    highlighted: false,
  },
  {
    title: 'Profesional',
    precios: [
      {
        precio: '1,999',
        cantRedesSociales: 4,
        href: '',
      },
      {
        precio: '22,788',
        cantRedesSociales: 4,
        href: '',
        precioAño: '1,899',
      },
    ],
    highlighted: false,
  },
  {
    title: 'Omnipresente',
    precios: [
      {
        precio: '2,699',
        cantRedesSociales: 6,
        href: '',
      },
      {
        precio: '29,988',
        cantRedesSociales: 6,
        href: '',
        precioAño: '2,499',
      },
    ],
    highlighted: false,
  },
];

export default PLANES;
