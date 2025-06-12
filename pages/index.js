import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Banner from '@/components/Banner'

export default function Home() {
  return (
    <>
      <Head>
        <title>Creo Project</title>
      </Head>
      <Navbar />
      <Banner />
    </>
  )
}