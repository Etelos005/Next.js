import Head from 'next/head'
import Banner from '@/components/Banner'

export default function WebsitePage() {
  return (
    <>
      <Head>
        <title>Website Design</title>
      </Head>

      <Banner
        title="Website Wonder"
        description="Design meets purpose in every modern website."
        backgroundImage="/Images/website.jpg"
        titleColor="text-[#fff]"
        descColor="text-[#ddd]"
        overlay="from-black/70 to-black/30"
      />

      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Web Presence</h2>
        <p className="text-white-700 text-lg">
          A website is your digital identity. From portfolio to e-commerce, it’s the home for your ideas and services online. Not only just that, it's like a whole new world that you can discover anytime, anywhere.
        </p>
      </section>
    </>
  )
}
