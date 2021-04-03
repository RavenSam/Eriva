import SwiperCore, { Navigation, Pagination, A11y, EffectFade, Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { isEmpty } from "lodash"

export default function SliderImage({ slides }) {
   if (isEmpty(slides)) return null

   SwiperCore.use([Navigation, Pagination, A11y, EffectFade, Autoplay])

   return (
      <>
         <div className="sliderImage">
            <Swiper spaceBetween={50} slidesPerView={1} navigation loop effect="fade" pagination={{ clickable: true }}>
               {slides.map((slide) => (
                  <SwiperSlide key={slide.label}>
                     <div className="h-full bg-pink-400 flex flex-col items-center justify-center">
                        <h2 className="text-center font-bold text-6xl">{slide.label}</h2>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>

         <style>{`
            .sliderImage .swiper-slide{
               height:450px;
            }
         `}</style>
      </>
   )
}
