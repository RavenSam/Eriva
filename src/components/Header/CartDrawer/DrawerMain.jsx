import { useState, useRef, Fragment } from "react";
import { ShoppingCartOutline, XOutline } from "heroicons-react";
import { useDispatch } from "react-redux";
import { removeFromCart, adjustQty } from "src/redux/Shopping/shopping-actions";
import { Divider, HStack,DrawerBody } from "@chakra-ui/react";

export default function DrawerMain({ cart }) {
	const dispatch = useDispatch();

	return (
		<>
			<DrawerBody>
				{cart.map((product) => (
					<Fragment key={product.id}>
						<div  className="drawerBody  w-full flex items-start justify-start">
							<img src={product.image} alt="image" className="w-20" />

							<div className="Product px-2 pl-6 w-full">
								<div className="flex items-center justify-between">
									<h3 className="text-gray-700 text-sm font-heading font-semibold">{product.name}</h3>

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
									<HStack maxW="320px" border="1px solid #333">
										<button
											className="px-3 py-1 rounded-sm focus:outline-none"
											onClick={() => product.qty && dispatch(adjustQty(product.id, product.qty - 1))}
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
					</Fragment>
				))}
			</DrawerBody>
		</>
	);
}
