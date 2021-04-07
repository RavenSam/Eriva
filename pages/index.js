import { useState } from "react";
import { connect, useSelector } from "react-redux";

// Components
import SliderImage from "@components/Sections/SliderImage";
import SlideCards from "@components/Sections/SlideCards";
import Card from "@components/shared/Card";

// Dummy Data
import { collections, slides } from "dummyData";

export default function Home() {
   const { products } = useSelector((state) => state.shop);

   return (
      <>
         <div className="mt-4 mb-20 max-w-xl mx-auto">
            {products.map((product) => (
               <Card item={product} key={product.id} />
            ))}
         </div>

         <SliderImage slides={slides} />

         <div className="mt-4 mb-20">
            <SlideCards slides={slides} />
         </div>
      </>
   );
}
