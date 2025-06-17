import Banner from '@/components/Banner'
import Gallery from '@/components/Gallery'

const aboutGalleryItems = [
  {
    src: '/Images/Aziz.jpg',
    alt: 'Aziz photo',
    text: 'Aziz ',
    desc: 'This is Aziz. He is the founder of a cafe called cafe abou Aziz for the middled aged people. '
  },
  {
    src: '/Images/Jessica.jpeg',
    alt: 'Jessica photo',
    text: 'Jessica',
    desc: 'This is Jessica. She has her own nail salon uptown for all the ladies who like to gossip about people (Mainly men) '
  },
  {
    src: '/Images/Taha.jpg',
    alt: 'Taha Photo',
    text: 'Taha',
    desc: 'Taha is a worker in a gas station and has a part time job security in a nearby nightclub.'
  }
]

export default function About() {
  return (
    <>
      <Banner
        title="About Us"
        description="Learn more about how to create a Next.js. Not only just that, how to apply Tailwind Css on our project and link the pages together."
        backgroundImage="/Images/Q-marks.jpg"
        titleColor="text-amber-300"
        descColor="text-white/90"
        overlay="from-[#1a1a1a]/80 to-[#111]/40"
      />

      <section className="px-6 py-16 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-primary mb-6">Who Am I</h2>
        <p className="text-gray-700 leading-7">
          A third-year Computer and Communication Engineering student specializing in multimedia, with a strong interest in digital content creation, graphic design, video editing, and UI/UX development. Skilled in Adobe Illustrator, Blender, and Figma, I have experience in animation, video production, and interactive media design. I am seeking opportunities to apply technical knowledge and creativity to real-world multimedia and engineering applications.
        </p>
      </section>

      <Gallery items={aboutGalleryItems} />
    </>
  )
}
