import { SimpleGrid, Box, Container } from "@chakra-ui/react";
import { useRouter } from "next/router";

// Dummy Data
import { products } from "dummyData";

// Components
import ProductDetails from "@components/ProductDetails";
import ProductBreadCrumb from "@components/shared/ProductBreadCrumb";

export default function Product({ product }) {
	const router = useRouter();

	// If the page is not yet generated, this will be displayed
	// initially until getStaticProps() finishes running
	if (router.isFallback) return <p className="text-center">Loading...</p>;

	return (
		<>
			<Container maxW="container.xl">
				<div className="my-5">
					<ProductBreadCrumb category={product.category} />
				</div>

				<div className="mt-10">
					<ProductDetails product={product} />
				</div>
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

		revalidate: 10,
	};
}

export async function getStaticPaths() {
	const paths = products.map((product) => {
		return { params: { id: product.id.toString() } };
	});

	return {
		paths,
		fallback: "blocking",
	};
}
