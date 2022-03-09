// import Head from 'next/head'
import Image from 'next/image';
import HeaderNavigation from './header-navigation/header-navigation';
import layoutStyles from './layout.module.scss';
import Head from 'next/head';

export default function Layout(props) {
    return (
        <div className={layoutStyles.container}>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400&display=swap" rel="stylesheet" />
            </Head>

            <HeaderNavigation />

            <main className={layoutStyles.main}>
                {props.children}
            </main>

            <footer className={layoutStyles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={layoutStyles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </footer>
        </div>
    )
}
