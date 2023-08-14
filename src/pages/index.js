import  { NextPage } from 'next'
import Head from 'next/head';
import Header from '../../components/Header'
import Banner from "../../components/Banner";

export const getStaticProps = async ()=>{

    const res = await fetch('https://api.npoint.io/bb43f52dcf58170e29df');
    const data = await res.json();

    return{
        props: {ninjas: data}
    }
}

export default function Home({ninjas}) {
  return (
    <div className="">
        <Head>
            <title>Airbnb</title>
            <link rel="icon" href="https://seeklogo.com/images/A/airbnb-logo-1D03C48906-seeklogo.com.png"/>
        </Head>
        <Header/>
        <Banner/>

        <main className='max-w-7xl mx-auto px-8 sm:px-16'>
            <section>
                <h2 className='text-4xl font-semibold pb-5 pt-6'>Explore Nearby</h2>

            {/*  pull data from server  */}
                {ninjas.map(item =>( <h1>{item.location}</h1>))}
            </section>
        </main>
    </div>
  );
}

// export async function getStaticProps(){
//     const exploreData = await fetch("https://links.papareact.com/pyp").then((res) => res.json());
//     return{
//         props:{
//             exploreData,
//         },
//     };
// }