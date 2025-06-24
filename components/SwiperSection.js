'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
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
  },
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

]

export default function SwiperSection() {
  return (
    <section className="bg-[#f9fafb] py-20 px-4 relative">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-4xl font-bold text-center text-[#004466] mb-12">
          Featured Highlights
        </h2>

        <div className="swiper-button-prev-custom absolute top-1/2 -translate-y-1/2 left-2 z-10 w-10 h-10 bg-white text-[#004466] flex items-center justify-center text-2xl rounded-full shadow hover:bg-[#004466] hover:text-white transition">
          ❮
        </div>
        <div className="swiper-button-next-custom absolute top-1/2 -translate-y-1/2 right-2 z-10 w-10 h-10 bg-white text-[#004466] flex items-center justify-center text-2xl rounded-full shadow hover:bg-[#004466] hover:text-white transition">
          ❯
        </div>

        <Swiper
          loop={true}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            768: {
              slidesPerView: 1.5
            },
            1024: {
              slidesPerView: 2.8
            }
          }}
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom'
          }}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="!pb-20"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  className={`transition-all duration-500 mx-auto w-full max-w-[480px] ${
                    isActive
                      ? 'scale-105 z-10 shadow-xl'
                      : 'scale-90 opacity-50 blur-[1px]'
                  }`}
                >
                  <div className="bg-white rounded-xl overflow-hidden">
                    <div className="w-full aspect-[4/3]">
                      <img
                        src={slide.img}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5 text-center">
                      <h3 className="text-xl sm:text-2xl font-semibold text-[#004466] mb-2">
                        {slide.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{slide.desc}</p>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        <style jsx global>{`
          .swiper-pagination {
            margin-top: 24px;
            text-align: center;
          }

          .swiper-pagination-bullet {
            background-color: #004466;
            opacity: 0.4;
            width: 10px;
            height: 10px;
            margin: 0 6px !important;
            transition: all 0.3s ease;
            border-radius: 50%;
          }

          .swiper-pagination-bullet-active {
            background-color: #ffa500;
            opacity: 1;
            transform: scale(1.3);
            box-shadow: 0 0 6px #ffa500;
          }
        `}</style>
      </div>
    </section>
  )
}
