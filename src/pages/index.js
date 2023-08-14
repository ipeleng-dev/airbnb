import  { NextPage } from 'next'
import Head from 'next/head';
import Header from '../../components/Header'
import Banner from "../../components/Banner";
import SmallCard from "../../components/SmallCard";
import MediumCard from "../../components/MediumCard";

export const getStaticProps = async ()=>{

    const res = await fetch('https://api.npoint.io/6c0f432a0fc113691d20');
    const data = await res.json();

    const resp = await fetch('https://api.npoint.io/63e46834796acdbb3313');
    const dataCollected = await resp.json();

    return{
        props: {
            exploreData: data,
            cardsData: dataCollected
        }
    }
}

export default function Home({exploreData, cardsData}) {
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
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    {exploreData?.map(({id, img,distance, location }) =>(
                        <SmallCard key={id} img={img} distance={distance} location={location}/>
                    ))}
                </div>

            </section>

            <section>
                <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>

                <div  className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
                    {cardsData?.map(({id, img, title}) => (
                        <MediumCard key={id} img={img} title={title} />
                    ))}
                </div>

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