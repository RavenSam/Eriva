import SwiperCore, { Navigation, Pagination, A11y, EffectFade, Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { isEmpty } from "lodash"

export default function SliderImage({ slides }) {
   if (isEmpty(slides)) return null

   SwiperCore.use([Navigation, Pagination, A11y, EffectFade, Autoplay])

   return (
      <>
         <Swiper spaceBetween={50} slidesPerView={1} navigation loop effect="fade" pagination={{ clickable: true }}>
            {slides.map((slide) => (
               <SwiperSlide>
                  <div className="h-96 bg-pink-400 flex flex-col items-center justify-center">
                     <h1 className="text-center font-bold text-6xl">{slide.label}</h1>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </>
   )
}
