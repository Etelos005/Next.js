import { useState } from 'react'
import Banner from '@/components/Banner'
import Gallery from '@/components/Gallery'
import {
  LightBulbIcon,
  CodeBracketIcon,
  VideoCameraIcon
} from '@heroicons/react/24/outline'

const servicesGalleryItems = [
  {
    src: '/Images/UiUx.avif',
    alt: 'UI/UX Design',
    text: 'UI/UX Showcase',
    desc: 'A sneak peek into the world of user interface and experience design.'
  },
  {
    src: '/Images/frontend.jpg',
    alt: 'Frontend Dev',
    text: 'Frontend Magic',
    desc: 'Responsive and clean front-end structures with Tailwind and Next.js.'
  },
  {
    src: '/Images/edits.avif',
    alt: 'Multimedia Tools',
    text: 'Editing Suite',
    desc: 'Animation, post-production, and media design in action.'
  }
]

const tabData = {
  'Main Services': [
    { img: '/Images/edits.avif', title: 'Service One' },
    { img: '/Images/frontend.jpg', title: 'Service Two' },
  ],
  'Extra Options': [
    { img: '/Images/UiUx.avif', title: 'Option One' },
    { img: '/Images/codes.jpg', title: 'Option Two' }
  ]
}

export default function Services() {
  const [activeTab, setActiveTab] = useState('Main Services')

  return (
    <>
      <Banner
        title="Our Services"
        description="Discover what we offer to help you grow your skills and deliver stunning digital experiences."
        backgroundImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
        titleColor="text-[#00e4d4]"
        descColor="text-white"
        overlay="from-black/80 to-black/40"
      />

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

      <Gallery items={servicesGalleryItems} />

      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex space-x-8 justify-start mb-10 border-b border-gray-700 pb-2">
            {Object.keys(tabData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-lg font-semibold px-4 pb-2 ${
                  activeTab === tab
                    ? 'border-b-2 border-[#00e4d4] text-[#00e4d4]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {tabData[activeTab].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-4 bg-[#111] p-4 rounded-lg shadow hover:bg-[#1a1a1a] transition"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <h3 className="text-white font-medium text-lg">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
