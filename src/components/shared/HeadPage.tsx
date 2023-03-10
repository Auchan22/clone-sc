import Head from 'next/head';

interface Props {
  pageName: string;
}

export const HeadPage: React.FC<Props> = ({ pageName }) => {
  const titleName = `${pageName} | Social Conecta`;
  return (
    <Head>
      <title>{titleName}</title>
      <meta name='description' content='Generated by create next app' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};
