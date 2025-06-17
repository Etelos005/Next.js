import { LightBulbIcon, CodeBracketIcon, VideoCameraIcon } from '@heroicons/react/24/outline'

export default function Services() {
  return (
    <>
      <div
        className="bg-cover bg-center h-[400px] flex flex-col items-center justify-center text-center px-6 sm:px-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')`
        }}
      >
        <div className="bg-black/60 px-8 py-6 rounded-lg mb-4">
          <h1 className="text-white text-4xl font-bold">Our Services</h1>
        </div>
        <div className="bg-white/70 text-gray-800 px-6 py-4 rounded-md text-lg shadow-lg mt-4 sm:mt-0 max-w-[600px]">
          Discover what we offer to help you grow your skills and deliver stunning digital experiences.
        </div>
      </div>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#004466] mb-12">What We Offer</h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-xl shadow-md text-left transform transition duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-2xl hover:ring-2 hover:ring-[#004466]/60 hover:ring-offset-2">
              <LightBulbIcon className="w-10 h-10 text-[#004466] mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[#004466]">UI/UX Design</h3>
              <p className="text-gray-700 leading-6">
                Clean and modern interfaces built with Figma, optimized for user engagement and accessibility.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-left transform transition duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-2xl hover:ring-2 hover:ring-[#004466]/60 hover:ring-offset-2">
              <CodeBracketIcon className="w-10 h-10 text-[#004466] mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[#004466]">Frontend Development</h3>
              <p className="text-gray-700 leading-6">
                Responsive websites using Next.js and Tailwind CSS. Structured, performant, and mobile-friendly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-left transform transition duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-2xl hover:ring-2 hover:ring-[#004466]/60 hover:ring-offset-2">
              <VideoCameraIcon className="w-10 h-10 text-[#004466] mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[#004466]">Multimedia Production</h3>
              <p className="text-gray-700 leading-6">
                Motion graphics, animation, and video editing using Blender, After Effects, and Adobe Premiere.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
