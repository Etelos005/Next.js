import Head from 'next/head'
import Banner from '@/components/Banner'

export default function DogPage() {
  return (
    <>
      <Head>
        <title>Dog Gallery</title>
      </Head>

      <Banner
        title="Meet Saadoun"
        description="The dog who stole the spotlight."
        backgroundImage="/Images/dog.jpg"
        titleColor="text-[#fff]"
        descColor="text-[#ddd]"
        overlay="from-black/70 to-black/30"
      />

      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Saadoun the Goat</h2>
        <p className="text-white-700 text-lg">
          Loyal, cute, and maybe a bit chaotic and idiot. Saadoun reminds us that sometimes the best companion doesn’t speak our language but still understands our heart.
        </p>
      </section>
    </>
  )
}
