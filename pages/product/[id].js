import { products } from "dummyData";

export default function Product({ product }) {
	return (
		<>
			<h1 className="text-2xl">Product</h1>
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
