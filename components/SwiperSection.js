'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export default function SwiperSection() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#004466]">Swiper Showcase</h2>
        <Swiper spaceBetween={40} slidesPerView={2}>
          <SwiperSlide>
            <div className="p-6 bg-gray-100 rounded-md text-center font-semibold text-gray-800 shadow">
              Slide 1
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-6 bg-gray-100 rounded-md text-center font-semibold text-gray-800 shadow">
              Slide 2
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-6 bg-gray-100 rounded-md text-center font-semibold text-gray-800 shadow">
              Slide 3
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-6 bg-gray-100 rounded-md text-center font-semibold text-gray-800 shadow">
              Slide 4
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}
