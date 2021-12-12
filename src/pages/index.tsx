import Head from 'next/head';
import Image from 'next/image';

import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next With Eth</title>
        <meta
          name="description"
          content="A platform for learning how to build on ETH"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Next with Eth!</h1>

        <p className={styles.description}>
          Awesome new skills and projects to build coming soon!
        </p>

        <div className={styles.grid}>
          <a href="https://twitter.com/Rahatcodes" className={styles.card}>
            <p>Follow Rahat for Updates</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=typescript-nextjs-starter"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with {`<3`} by{` `}
          Rahat
        </a>
      </footer>
    </div>
  );
}
