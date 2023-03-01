export interface Campaña {
  title: string;
  subTitle: string;
  img: string;
  points: string[];
}

const CAMPAÑAS: Campaña[] = [
  {
    title: 'Google Search',
    subTitle: 'Campaña de Google Search',
    img: 'https://irp.cdn-website.com/7b521824/dms3rep/multi/anuncio-busqueda-b8fe9a56-640w.png-435f44e6.webp',
    points: [
      'Análisis inicial',
      'Búsqueda y selección de palabras clave',
      'Segmentación de mercado objetivo',
      'Propuesta de campaña con el presupuesto del cliente',
      'Lanzamiento y monitoreo de la campaña',
      'Duración máxima de 30 días',
      'Un agente Social Conecta asignado',
      'Reporte estadístico de resultados',
    ],
  },
  {
    title: 'Campaña en Youtube',
    subTitle: 'Campaña en Youtube',
    img: 'https://irp.cdn-website.com/7b521824/dms3rep/multi/anuncio-youtube-640w.png-6b6097e6.webp',
    points: [
      'Análisis inicial',
      'Búsqueda y selección de palabras clave',
      'Segmentación de 1 mercado objetivo',
      'Creación del anuncio de video de 6 - 15 o 20 seg',
      'Propuesta de campaña con el presupuesto del cliente',
      'Lanzamiento y monitoreo de campaña',
      'Un agente Social Conecta asignado',
      'Duración máxima de 30 días',
      'Reporte estadístico de resultados',
    ],
  },
  {
    title: 'Google Display',
    subTitle: 'Campaña de Google Display',
    img: 'https://irp.cdn-website.com/7b521824/dms3rep/multi/displaygoogle-511f0afa-640w.png-dd1b1a4a.webp',
    points: [
      'Análisis inicial',
      'Búsqueda y selección de palabras clave',
      'Segmentación de mercado objetivo',
      'Propuesta de campaña con el presupuesto del cliente',
      'Lanzamiento y monitoreo de la campaña',
      'Duración máxima de 30 días',
      'Un agente Social Conecta asignado',
      'Reporte estadístico de resultados',
    ],
  },
  {
    title: 'Facebook Ads',
    subTitle: 'Facebook e Instagram Ads',
    img: 'https://lirp.cdn-website.com/7b521824/dms3rep/multi/opt/allinone123123-c3061dee-1920w.png',
    points: [
      'Análisis inicial',
      'Creación del anuncio',
      'Segmentación de 1 mercado potencial',
      'Generación de la propuesta de campaña',
      'Lanzamiento, monitoreo y optimización de campaña',
      'Reporte estadístico de resultados',
    ],
  },
];

export default CAMPAÑAS;
