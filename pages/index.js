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
      
      <Banner
        title="Welcome to the Basics"
        description="Learn how to build a simple, beautiful webpage using only HTML and CSS."
        backgroundImage="https://www.elegantthemes.com/blog/wp-content/uploads/2013/09/bg-11-full.jpg"
        titleColor="text-[#ffd479]"
        descColor="text-white/85"
        overlay="from-black/70 to-black/40"
      />

      
      <Gallery />
      <ContactForm />
    </>
  )
}
