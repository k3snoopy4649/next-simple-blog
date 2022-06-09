import Head from "next/head";
// import { useRouter } from "next/router";
export const getStaticPaths = async() =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()

    const paths = data.map(user => {
        return {
            params:{id:user.id.toString()}
        }
    })
    return {
        paths,
        fallback:false
    }
}
export const getStaticProps = async (context) =>{
    const id = context.params.id
    const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id)
    const data = await res.json()
    return {
        props:{user:data}
    }
}
const Details = ({user}) => {
    // const route = useRouter()
    return ( 
        <>
        <Head>
            <title>MYブログ | ユーザページ</title>
            <meta name="keywords" />
        </Head>
        <div>
            <h1>{user.name}</h1>
        </div>
        </>
     );
}
 
export default Details;