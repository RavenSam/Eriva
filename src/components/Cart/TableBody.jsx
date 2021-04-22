import { useDispatch } from "react-redux";
import { removeFromCart, adjustQty } from "src/redux/Shopping/shopping-actions";
import { HStack } from "@chakra-ui/react";

export default function TableBody({ product }) {
	return (
		<tbody className="bg-white divide-y divide-gray-200">
			<tr>
				<td className="px-5 py-4 whitespace-nowrap ">
					<div className="flex items-center">
						<div className="flex-shrink-0 w-16">
							<img
								src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
								alt="product image"
							/>
						</div>

						<div className="ml-4">
							<div className="text-sm font-medium text-gray-900">Product Name</div>
						</div>
					</div>
				</td>

				<td className="px-5 py-4 whitespace-nowrap ">
					<HStack maxW="320px">
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
				</td>

				<td className="px-5 py-4 whitespace-nowrap text-sm text-gray-500">$ 22.00</td>

				<td className="px-5 py-4 whitespace-nowrap text-sm text-gray-500">Admin</td>
				<td className="px-5 py-4 whitespace-nowrap text-right text-sm font-medium">
					<a href="#" className="text-pink-600 hover:text-pink-900">
						remove
					</a>
				</td>
			</tr>
		</tbody>
	);
}
