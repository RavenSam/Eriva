import { useState } from "react";
import { useSelector } from "react-redux";

// Components
import SliderImage from "@components/Sections/SliderImage";
import SlideCards from "@components/Sections/SlideCards";
import ProductCard from "@components/Sections/ProductCard";
import Card from "@components/shared/Card";

// Dummy Data
import { collections, slides } from "dummyData";

export default function Home() {
  const { products } = useSelector((state) => state.shop);

  return (
    <>
      <div className=" my-8 max-w-6xl mx-auto p-4">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <ProductCard key={item} />
          ))}
        </div>

      </div>

   

      <SliderImage slides={slides} />

      <div className="mt-4 mb-20">
        <SlideCards slides={slides} />
      </div>
    </>
  );
}
