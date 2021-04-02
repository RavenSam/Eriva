import SliderImage from "@components/Sections/SliderImage"
import { useState } from "react"

const slides = [{ label: "slide 1" }, { label: "slide 2" }, { label: "slide 3" }, { label: "slide 4" }]

export default function Home() {
   return (
      <>
         <SliderImage slides={slides} />
      </>
   )
}
