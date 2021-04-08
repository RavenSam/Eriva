import { useState, useEffect } from "react";

import { DrawerFooter } from "@chakra-ui/react";

import Btn from "@components/shared/Btn";

export default function DrawerFoot({ cart }) {
	const [totalPrice, setTotalPrice] = useState(0);
	const [totalItems, setTotalItems] = useState(0);

	useEffect(() => {
		let items = 0;
		let price = 0;
		cart.forEach((prod) => {
			items += prod.qty;
			price += prod.qty * prod.price;
		});

		setTotalItems(items.toFixed(2));
		setTotalPrice(price.toFixed(2));
	}, [cart,totalItems, totalPrice]);

	return (
		<>
			<DrawerFooter>
				<div className="flex flex-col w-full">
					<ul className=" w-full mb-4 text-base md:text-xl">
						<li className="flex items-center justify-between mb-2">
							<span>Subtotal</span>
							<span>${totalPrice}</span>
						</li>

						<li className="flex items-center justify-between mb-2">
							<span>Shipping</span>
							<span>FREE</span>
						</li>

						<hr className="my-2 md:my-4" />

						<li className="flex items-center justify-between mb-2">
							<span className="font-bold">Total</span>
							<span className="font-bold">${totalPrice}</span>
						</li>
					</ul>

					<Btn type="secondary" className="w-full mb-2">
						Checkout
					</Btn>
					<Btn type="primary" className="w-full">
						Cart
					</Btn>
				</div>
			</DrawerFooter>
		</>
	);
}
