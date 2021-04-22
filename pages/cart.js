import { useSelector } from "react-redux";

// Components
import ProductInCart from "@components/Cart/ProductInCart";
import OrderSummary from "@components/Cart/OrderSummary";

export default function Cart() {
	const { cart } = useSelector((state) => state.shop);

	return (
		<>
			<div className="grid grid-cols-9 gap-2 w-full">
				<div className="col-span-6 bg-pink-500">
					<ProductInCart cart={cart} />
				</div>

				<div className="col-span-3 bg-blue-500">
					<OrderSummary cart={cart} />
				</div>
			</div>
		</>
	);
}
