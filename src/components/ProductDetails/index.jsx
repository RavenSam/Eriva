import { SimpleGrid, Box, Container } from "@chakra-ui/react";

import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";

export default function ProductDetails({ product }) {
	return (
		<SimpleGrid columns={[1, null, null, 2]} spacing="10px">
			<Box minH="100px">
				<ProductGallery gallery={product.gallery} />
			</Box>

			<Box minH="100px">
				<ProductInfo product={product} />
			</Box>
		</SimpleGrid>
	);
}
