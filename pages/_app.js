import { ChakraProvider } from "@chakra-ui/react";
import {theme} from "src/themes"
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import { wrapper } from "src/redux/store";

// CSS
import "typeface-montserrat/index.css";
import "typeface-poppins/index.css";
import "src/styles/index.css";
import "react-image-gallery/styles/css/image-gallery.css"

import "swiper/swiper-bundle.min.css";

import Layout from "src/layouts";

const MyApp = ({ Component, pageProps }) => {
	return (
		<ChakraProvider theme={theme}>
			<Layout {...pageProps}>
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	);
};

export default wrapper.withRedux(MyApp);
