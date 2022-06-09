import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>MYブログ | ホーム</title>
        <meta name="keywords" content='ブログ,React,Next,js' />
      </Head>
      <div>
        <h1 className={styles.title}>ホームページ</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero accusamus minima mollitia, aliquam vel quam dolorem molestiae vero odit quas laudantium, quia totam facere at cupiditate? Distinctio minus facilis a.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero accusamus minima mollitia, aliquam vel quam dolorem molestiae vero odit quas laudantium, quia totam facere at cupiditate? Distinctio minus facilis a.</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Lists</a>
        </Link>
      </div>
    </>
  )
}
