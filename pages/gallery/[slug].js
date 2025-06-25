import Head from 'next/head'
import Banner from '@/components/Banner'
import { useRouter } from 'next/router'

const galleryData = {
  code: {
    title: 'Code Mastery',
    description: 'Explore the beauty of clean code and modern development.',
    image: '/Images/codes.jpg',
    heading: 'Coding Excellence',
    content:
      'Front-end development is where design meets functionality. Mastering HTML, CSS, React, and JS builds the bridge between user and experience.'
  },
  website: {
    title: 'Website Wonder',
    description: 'Design meets purpose in every modern website.',
    image: '/Images/website.jpg',
    heading: 'Web Presence',
    content:
      'A website is your digital identity. From portfolio to e-commerce, it’s the home for your ideas and services online. Not only just that, it\'s like a whole new world that you can discover anytime, anywhere.'
  },
  dog: {
    title: 'Meet Saadoun',
    description: 'The dog who stole the spotlight.',
    image: '/Images/dog.jpg',
    heading: 'Saadoun the Goat',
    content:
      'Loyal, cute, and maybe a bit chaotic and idiot. Saadoun reminds us that sometimes the best companion doesn’t speak our language but still understands our heart.'
  }
}

export default function GallerySlugPage() {
  const router = useRouter()
  const { slug } = router.query
  const item = galleryData[slug]

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold text-[#004466] mb-4">Page Not Found</h1>
        <p className="text-gray-600 text-lg">Oopsie Daisy! This gallery item doesn’t exist.</p>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>{item.title}</title>
      </Head>

      <Banner
        title={item.title}
        description={item.description}
        backgroundImage={item.image}
        titleColor="text-[#fff]"
        descColor="text-[#ddd]"
        overlay="from-black/70 to-black/30"
      />

      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">{item.heading}</h2>
        <p className="text-white-700 text-lg">{item.content}</p>
      </section>
    </>
  )
}
