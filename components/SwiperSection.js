'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const slides = [
  {
    title: 'Clean UI/UX',
    desc: 'Elegant interfaces that are easy to navigate.',
    img: '/Images/UiUx.avif'
  },
  {
    title: 'Responsive Code',
    desc: 'Adaptive layouts for all devices.',
    img: '/Images/frontend.jpg'
  },
  {
    title: 'Creative Media',
    desc: 'Motion graphics and animations that stand out.',
    img: '/Images/edits.avif'
  }
]

export default function SwiperSection() {
  return (
    <section className="bg-[#f9fafb] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#004466] mb-12">
          Featured Highlights
        </h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false
          }}
          loop={true}
          modules={[Pagination, Autoplay]}
          className="!pb-12"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-[300px] sm:h-[400px] object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold text-[#004466] mb-2">{slide.title}</h3>
                  <p className="text-gray-600 text-sm">{slide.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
