import SwiperCore, { Navigation, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { isEmpty } from "lodash"
import Link from "next/link"

export default function SlideCards({ slides }) {
   if (isEmpty(slides)) return null

   SwiperCore.use([Navigation, A11y])
   return (
      <>
         <div className="sliderCards">
            <Swiper spaceBetween={10} slidesPerView="auto" navigation>
               {slides.map((slide) => (
                  <SwiperSlide key={slide.label} className="">
                     <Link href="#">
                        <a className="card relative h-72 w-full rounded-sm shadow-lg border border-gray-400 bg-blue-400 flex flex-col items-start justify-end overflow-hidden">
                           <div className="overlay w-full h-full absolute top-0 left-0  duration-200 ease-in-out bg-pink-400 opacity-50 sm:opacity-0" />

                           <img
                              src={slide.img}
                              alt={slide.label}
                              className="w-full h-full"
                              width="380px"
                              height="288px"
                           />

                           <div className="content absolute w-full p-4  duration-500 ease-in-out">
                              <h2 className="  font-bold text-2xl">{slide.label}</h2>
                           </div>
                        </a>
                     </Link>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>

         <style>{`
            .sliderCards .swiper-container{
               padding:0 .8rem;
            }
            .sliderCards .swiper-slide{
               max-width: 380px ;
               min-width: 200px ;
            }

            .sliderCards .card:hover .overlay{
               opacity:0.5;
            }

            .sliderCards .card:hover .content{
               transform:translateY(0);
               opacity:1;
            }

            .sliderCards .content{
               transform:translateY(100%);
               opacity:0;
            }
         `}</style>
      </>
   )
}
