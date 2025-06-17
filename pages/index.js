import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Banner from '@/components/Banner'
import Gallery from '@/components/Gallery'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Creo Project</title>
      </Head>
      <Banner />
      <Gallery />
      <ContactForm />
    </>
  )
}