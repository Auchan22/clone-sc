import Head from 'next/head';

interface Props {
  pageName: string;
}

export const HeadPage: React.FC<Props> = ({ pageName }) => {
  return (
    <Head>
      <title>{pageName} | Social Conecta</title>
      <meta name='description' content='Generated by create next app' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};
