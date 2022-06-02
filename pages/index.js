import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Muhammad Afandi Aziz</title>
                <meta name="description" content="Personal Website Muhammad Afandi Aziz" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Under Maintenance</h1>
            </main>

            <footer className={styles.footer}>
                <a href="https://www.linkedin.com/in/afandiaziz/" target="_blank" rel="noopener noreferrer">
                    &copy; {new Date().getFullYear()}&nbsp;
                    <span>Afandi Aziz</span>
                </a>
            </footer>
        </div>
    );
}
