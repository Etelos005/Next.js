'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

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
    <section className="bg-[#f9fafb] py-20 px-4 relative">
      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-4xl font-bold text-center text-[#004466] mb-12">
          Featured Highlights
        </h2>

        <div className="swiper-button-prev-custom absolute top-1/2 -translate-y-1/2 left-0 sm:left-4 z-10 cursor-pointer w-10 h-10 bg-white text-[#004466] flex items-center justify-center text-2xl rounded-full shadow-md hover:bg-[#004466] hover:text-white transition duration-300">
          ❮
        </div>
        <div className="swiper-button-next-custom absolute top-1/2 -translate-y-1/2 right-0 sm:right-4 z-10 cursor-pointer w-10 h-10 bg-white text-[#004466] flex items-center justify-center text-2xl rounded-full shadow-md hover:bg-[#004466] hover:text-white transition duration-300">
          ❯
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          centeredSlides={true}
          loop={false}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom'
          }}
          breakpoints={{
            768: {
              slidesPerView: 1.5
            },
            1024: {
              slidesPerView: 3
            }
          }}
          modules={[Pagination, Navigation]}
          className="!pb-20"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  className={`transition-all duration-500 flex justify-center ${
                    isActive
                      ? 'scale-105 shadow-2xl z-10'
                      : 'scale-90 opacity-60 blur-[1px]'
                  }`}
                >
                  <div className="bg-white rounded-xl overflow-hidden max-w-[400px] w-full">
                    <img
                      src={slide.img}
                      alt={slide.title}
                      className="w-full h-[400px] object-cover rounded-t-xl"
                    />
                    <div className="p-6 text-center">
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
            margin-top: 20px;
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
