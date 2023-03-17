export interface Pregunta {
  label: string;
  description: string[];
}

const PREGUNTAS: Pregunta[] = [
  {
    label: '¿Quiénes somos y qué hacemos?',
    description: [
      'Turbo Creativo es la agencia de marketing digital  que ayuda a las pequeñas y medianas empresas a crecer a tráves del uso de las nueva tecnologías.',
      'Así como brindar a los nuevos emprendedores las herramientas y personal para tener su propia agencia de marketing digital.',
    ],
  },
  {
    label: '¿Por qué somos una agencia para las agencias?',
    description: [
      'Con nuestras membresías podemos trabajar como marca blanca para ti, es decir, nos volvemos una extensión de tu empresa en caso de que ya cuentes con una, siendo tu mejor aliado.',
      'Si vas empezando no te preocupes, nuestros expertos te ayudarán a crear estrategias para que puedas incursionar en el mercado del marketing digital. ',
    ],
  },
  {
    label: '¿En dónde dan servicio?',
    description: [
      'Nuestra sede se encuentra en Chile y Colombia pero eso no nos límita, ofrecemos servicio a toda Latinoamérica, Estados Unidos y España. ',
    ],
  },
  {
    label: '¿Por qué trabajar con nosotros?',
    description: [
      'Contamos con un equipo de expertos en el área de Marketing digital,  siendo más de 250 colaboradores en Turbo Creativo.',
      'La calidad y el precio nos avalan, actualmente manejamos más de 2,500 cuentas y más de 300 Agencias repartidas en Chile, Colombia, Latinoamérica, Estados Unidos y España. ',
    ],
  },
  {
    label: '¿Por qué sus precios son tan accesibles?',
    description: [
      'Contamos con precios muy competitivos dentro del mercado, sabemos que poner un negocio no es nada fácil y representa muchos gastos, es por eso que nuestras membresías de Agencia están pensadas para que cualquiera pueda obtenerla.  ',
    ],
  },
];

export default PREGUNTAS;
