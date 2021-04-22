import { useState, useEffect } from "react";

export default function OrderSummary({ cart }) {
const [totalPrice, setTotalPrice] = useState(0);
	const [totalItems, setTotalItems] = useState(0);

	useEffect(() => {
		let items = 0;
		let price = 0;
		cart.forEach((prod) => {
			items += prod.qty;
			price += prod.qty * prod.price;
		});

		setTotalItems(items);
		setTotalPrice(price.toFixed(2));
	}, [cart, totalItems, totalPrice]);

	return (
		<>
			<h2 className="text-2xl">Order Summary</h2>

			<hr className="my-5" />

			<div className="flex items-center justify-between mb-2">
				<p className="text-lg">Items {totalItems}</p>
				<p className="text-lg">$ {totalPrice}</p>
			</div>

			<p className="text-lg">Shipping</p>

			<hr className="my-5" />

			<div className="flex items-center justify-between">
				<p className="text-lg">Total cost</p>
				<p className="text-lg">$ {totalPrice}</p>
			</div>
		</>
	);
}
