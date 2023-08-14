import Head from 'next/head';
import Header from '../../components/Header'
import Banner from "../../components/Banner";
export default function Home() {
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

            </section>
        </main>
    </div>
  )
}

export async function getStaticProps(){

}