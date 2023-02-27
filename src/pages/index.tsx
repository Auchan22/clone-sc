import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Hero from '@/components/Hero';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Social Conecta</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Hero
          backgroundColor='blue'
          mh='80vh'
          backgroundVIDEO='https://vid.cdn-website.com/7b521824/videos/bqJL7YHTgWpYoAys6Uuf_638308321-v.mp4'
        >
          <div>Hola mundo</div>
        </Hero>
      </main>
    </>
  );
}
