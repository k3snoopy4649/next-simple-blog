import Link from "next/link";
import Head from "next/head";
import styles from '../styles/Home.module.scss'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter()
    let [timeLeft, setTime] = useState(3)

    useEffect(() => {
        if (timeLeft === 0) {
            router.push("/")
        } else {

            const cdId = setInterval(() => {
                setTime(timeLeft--);
            }, 1000);
            return () => clearInterval(cdId);
        }
    }, [timeLeft])
    return (

        <>

            <Head>
                <title>MYブログ | 404</title>
                <meta name="keywords" content='ブログ,React,Next,js' />
            </Head>
            <dvi className="not-found">
                <h1>おっと...</h1>
                <h2>ページが見つかりません</h2>
                <Link href="/"><a className={styles.btn}>{timeLeft}秒後ホームに戻る</a></Link>
            </dvi></>
    );
}

export default NotFound;