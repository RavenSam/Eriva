import { useState } from "react";
import {connect} from "react-redux"

// Components
import SliderImage from "@components/Sections/SliderImage";
import SlideCards from "@components/Sections/SlideCards";
import Card from "@components/shared/Card";

// Dummy Data
import { collections,  slides } from "dummyData";

const Home = ({products}) => {
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


const mapStateToProps =(state)=>{
   return{
      products:state.shop.products
   }
}

export default connect(mapStateToProps)(Home)