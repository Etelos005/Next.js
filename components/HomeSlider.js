'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function HomeSlider() {
  return (
    <div className="w-full bg-black text-white py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Our Highlights</h2>
      <div className="max-w-5xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={40}
          slidesPerView={1}
        >
          <SwiperSlide className="bg-gray-800 p-12 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3">Design Brilliance</h3>
            <p>UI/UX experiences that feel just right.</p>
          </SwiperSlide>

          <SwiperSlide className="bg-gray-800 p-12 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3">Code Artistry</h3>
            <p>Build maintainable apps with Next.js and Tailwind CSS.</p>
          </SwiperSlide>

          <SwiperSlide className="bg-gray-800 p-12 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3">Media Creation</h3>
            <p>Animations and graphics that pop.</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
