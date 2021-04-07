import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "src/redux/store"

// CSS
import "typeface-montserrat/index.css";
import "typeface-poppins/index.css";
import "src/styles/index.css";

import "swiper/swiper-bundle.min.css";

import Layout from "src/layouts";

export default function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<Provider store={store} >
				<Layout {...pageProps}>
					<Component {...pageProps} />
				</Layout>
			</Provider>
		</ChakraProvider>
	);
}
