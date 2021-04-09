import { SimpleGrid, Box, Container } from "@chakra-ui/react";

// Dummy Data
import { products } from "dummyData";

// Components
import ProductGallery from "@components/Sections/ProductGallery";
import ProductDetails from "@components/Sections/ProductDetails";



export default function Product({ product }) {

	


	return (
		<>
			<Container maxW="container.xl">
				<SimpleGrid columns={[1, null, null, 2]} spacing="10px">
					<Box  minH="100px">
						<ProductGallery gallery={product.gallery} />
					</Box>
					<Box  minH="100px">
						<ProductDetails product={product} />
					</Box>
				</SimpleGrid>
			</Container>
		</>
	);
}

export async function getStaticProps({ params }) {
	const product = products.find((item) => +item.id === +params.id);

	return {
		props: {
			product,
		},
	};
}

export async function getStaticPaths() {
	const paths = products.map((product) => {
		return { params: { id: product.id.toString() } };
	});

	return {
		paths,
		fallback: false,
	};
}
