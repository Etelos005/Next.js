import Head from 'next/head'
import Banner from '@/components/Banner'

export default function CodePage() {
  return (
    <>
      <Head>
        <title>Code Gallery</title>
      </Head>

      <Banner
        title="Code Mastery"
        description="Explore the beauty of clean code and modern development."
        backgroundImage="/Images/codes.jpg"
        titleColor="text-[#fff]"
        descColor="text-[#ddd]"
        overlay="from-black/70 to-black/30"
      />

      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-White mb-6">Coding Excellence</h2>
        <p className="text-white-700 text-lg">
          Front-end development is where design meets functionality. Mastering HTML, CSS, React, and JS builds the bridge between user and experience.
        </p>
      </section>
    </>
  )
}
