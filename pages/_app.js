import "typeface-montserrat/index.css";
import "typeface-poppins/index.css";

import Layout from "src/layouts"

import "../src/styles/globals.css"

export default function MyApp({ Component, pageProps }) {
   return (
      <Layout>
         <Component {...pageProps} />
      </Layout>
   )
}
