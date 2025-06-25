import Head from 'next/head'
import Banner from '@/components/Banner'
import Gallery from '@/components/Gallery'
import ContactForm from '@/components/ContactForm'
import SwiperSection from '@/components/SwiperSection'

const galleryItems = [
  {
    src: '/Images/codes.jpg',
    alt: 'Code photo',
    text: 'This is a code photo',
    desc: 'Front end needs coding, you are a Senior Frontend Developer after all Maria.',
    href: '/code'
  },
  {
    src: '/Images/website.jpg',
    alt: 'Website photo',
    text: 'This is a website photo',
    desc: 'It’s where art meets technology. Nowadays everything has a website.',
    href: '/website'
  },
  {
    src: '/Images/dog.jpg',
    alt: 'Dog photo',
    text: 'This is a dog photo',
    desc: 'This is Saadoun. Cute but an idiot as well. I hope you like dogs Maria.',
    href: '/dog'
  }
]

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
        descColor="text-[#f5e9d4]"
        overlay="from-black/60 to-black/30"
      />

      <Gallery items={galleryItems} />
      <ContactForm />
      <SwiperSection />
    </>
  )
}
