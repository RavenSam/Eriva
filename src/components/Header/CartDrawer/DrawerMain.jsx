import { useState, useEffect } from "react";
import { XOutline } from "heroicons-react";
import { useDispatch } from "react-redux";
import { removeFromCart, adjustQty } from "src/redux/Shopping/shopping-actions";
import { motion, AnimatePresence } from "framer-motion";
import { Divider, HStack, DrawerBody } from "@chakra-ui/react";

// Dummy Data
import { products } from "dummyData";

export default function DrawerMain({ cart }) {
	const [fetchedCart, setFetchedCart] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		let productIncart = [];
		products.forEach((item) => {
			cart.forEach((prod) => {
				if (prod.id === item.id) {
					productIncart.push({ ...item, qty: prod.qty });
				}
			});
		});

		setFetchedCart(productIncart);
	}, [cart]);

	console.log(fetchedCart)

	return (
		<DrawerBody overflowX="hidden">
			<AnimatePresence>
				{fetchedCart.map((product) => (
					<motion.div
						key={product.id}
						transition={{ duration: 0.35 }}
						exit={{ opacity: 0, x: "50%", height: 0 }}
					>
						<div className="drawerBody  w-full flex items-start justify-start py-2">
							<img src={product.image} alt="image" className="w-20" />

							<div className="Product px-2 pl-6 w-full">
								<div className="flex items-start justify-between">
									<h3 className="text-gray-700 text-sm font-heading font-semibold">
										{product.title}
									</h3>

									<button
										onClick={() => dispatch(removeFromCart(product.id))}
										aria-label="Remove product"
										type="button"
										className="bg-white rounded-sm inline-flex items-center justify-center text-gray-400  focus:outline-none "
									>
										<XOutline size="1rem" />
									</button>
								</div>

								<div className="flex items-center justify-between mt-4">
									<HStack maxW="320px">
										<button
											className="px-3 py-1 rounded-sm focus:outline-none"
											onClick={() =>
												product.qty && dispatch(adjustQty(product.id, product.qty - 1))
											}
										>
											-
										</button>
										<div className="text-center">{product.qty}</div>
										<button
											className="px-3 py-1 rounded-sm focus:outline-none"
											onClick={() => dispatch(adjustQty(product.id, product.qty + 1))}
										>
											+
										</button>
									</HStack>

									<p className="text-base text-gray-600">${product.price}</p>
								</div>
							</div>
						</div>
						<Divider mt=".5rem" mb="1rem" />
					</motion.div>
				))}
			</AnimatePresence>
		</DrawerBody>
	);
}
