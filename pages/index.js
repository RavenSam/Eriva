import { useState } from "react";
import { useSelector } from "react-redux";

// Components
import SliderImage from "@components/Sections/SliderImage";
import SlideCards from "@components/Sections/SlideCards";
import ProductCard from "@components/ProductDisplay/ProductCard";

// Dummy Data
import { collections, showcases,products } from "dummyData";

export default function Home({ data }) {
  // const { products } = useSelector((state) => state.shop);

  return (
    <>
      <SliderImage items={showcases} />

      <div className=" my-8 max-w-6xl mx-auto p-4 w-full overflow-x-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  // const data = await (await fetch("https://fakestoreapi.com/products")).json();



  return {
    props: {
      data:products,
    },
  };
}
