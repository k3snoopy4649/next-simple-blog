import Head from "next/head";
import styles from '../../styles/Ninja.module.scss'
import Link from "next/link";
export const getStaticProps = async () =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    return {props:{users:data}}
}
const Ninjas = ({users}) => {
    return (
        <>

            <Head>
                <title>MYブログ | ユーザ一覧</title>
                <meta name="keywords" content='ブログ,React,Next,js' />
            </Head>
            <div>
                <h1>allNinjas</h1>
                {users.map(user =>(
                        <Link href={'/ninjas/' + user.id} key={user.id}>
                        <a className={styles.user}>
                            <h3>{user.name}</h3>
                        </a></Link>
                ))}
            </div>
            </>
    );
}

export default Ninjas;