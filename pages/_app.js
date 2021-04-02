import "typeface-montserrat/index.css"
import "typeface-poppins/index.css"
import "../src/styles/globals.css"

import "swiper/swiper-bundle.min.css"

import Layout from "src/layouts"

export default function MyApp({ Component, pageProps }) {
   return (
      <Layout {...pageProps}>
         <Component {...pageProps} />
      </Layout>
   )
}
