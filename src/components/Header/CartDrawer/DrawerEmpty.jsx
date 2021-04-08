import { ShoppingCartOutline } from "heroicons-react";

export default function DrawerEmpty() {
	return (
		<>
			<div className="w-full h-full flex flex-col items-center justify-center">
				<div className="border border border-4 border-gray-400 rounded-full p-6 mb-6">
					<ShoppingCartOutline size="3rem" className="text-gray-400" />
				</div>

				<h2 className="text-xl text-primary-600 font-semibold text-center">
					Your Cart is Empty
				</h2>
			</div>
		</>
	);
}
