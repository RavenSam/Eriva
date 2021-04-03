import SliderImage from "@components/Sections/SliderImage"
import SlideCards from "@components/Sections/SlideCards"
import { useState } from "react"

const slides = [
   { label: "slide 1", img: "/images/img.jpg" },
   { label: "slide 2", img: "/images/img.jpg" },
   { label: "slide 3", img: "/images/img.jpg" },
   { label: "slide 4", img: "/images/img.jpg" },
   { label: "slide 5", img: "/images/img.jpg" },
   { label: "slide 6", img: "/images/img.jpg" },
   { label: "slide 7", img: "/images/img.jpg" },
   { label: "slide 8", img: "/images/img.jpg" },
]

export default function Home() {
   return (
      <>
         <SliderImage slides={slides} />

         <div className="mt-4 mb-20">
            <SlideCards slides={slides} />
         </div>
      </>
   )
}
