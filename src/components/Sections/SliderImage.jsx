import SwiperCore, { Navigation, Pagination, A11y, EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { isEmpty } from "lodash";

export default function SliderImage({ items }) {
  if (isEmpty(items)) return null;

  SwiperCore.use([Navigation, Pagination, A11y, EffectFade, Autoplay]);

  return (
    <>
      <div className="sliderImage">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 5000 }}
          loop
          effect="fade"
          pagination={{ clickable: true }}
        >
          {items.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                style={{ backgroundImage: `url(${slide.image})` }}
                className="relative h-full bg-center flex flex-col items-center justify-center"
              >
                <div className="absolute top-0 left-0 w-full h-full bg-whiteAlpha-300" />

                <div className="z-2 max-w-xl mx-auto">
                  <h2
                    style={{ textShadow: "2px 2px 2px rgba(206,89,55,0)" }}
                    className="text-center font-black text-4xl uppercase text-primary-500"
                  >
                    {slide.text}
                  </h2>
                </div>
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
  );
}
