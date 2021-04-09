import { SimpleGrid, Box, Container } from "@chakra-ui/react";

// Dummy Data
import { products } from "dummyData";

// Components
import ProductGallery from "@components/Sections/ProductGallery";

export default function Product({ product }) {
	return (
		<>
			<Container maxW="container.xl">
				<h1 className="text-2xl">Product</h1>

				<SimpleGrid columns={[1, null, null, 2]} spacing="10px">
					<Box bg="tomato" minH="100px">
						<ProductGallery />
					</Box>
					<Box bg="tomato" minH="100px"></Box>
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
