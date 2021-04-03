import { ChakraProvider } from "@chakra-ui/react"

// CSS
import "typeface-montserrat/index.css"
import "typeface-poppins/index.css"
import "src/styles/index.css"

import "swiper/swiper-bundle.min.css"

import Layout from "src/layouts"

export default function MyApp({ Component, pageProps }) {
   return (
      <ChakraProvider>
         <Layout {...pageProps}>
            <Component {...pageProps} />
         </Layout>
      </ChakraProvider>
   )
}
