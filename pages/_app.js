import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import { wrapper } from "src/redux/store";

// CSS
import "typeface-montserrat/index.css";
import "typeface-poppins/index.css";
import "src/styles/index.css";

import "swiper/swiper-bundle.min.css";

import Layout from "src/layouts";

const MyApp = ({ Component, pageProps }) => {
	return (
		<ChakraProvider>
			<Layout {...pageProps}>
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	);
};

export default wrapper.withRedux(MyApp);
