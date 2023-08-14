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
    </div>
  )
}
