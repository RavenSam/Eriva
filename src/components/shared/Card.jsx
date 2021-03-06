import { HeartOutline } from "heroicons-react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { addToCart } from "src/redux/Shopping/shopping-actions";

export default function CardGrid({ item }) {
	const dispatch = useDispatch();

	return (
		<div className="flex shadow-lg border border-gray-200 rounded-sm mb-8">
			<div className="flex-none w-48 relative">
				<img
					src={item.image}
					alt={item.name}
					className="absolute inset-0 w-full h-full object-contain"
				/>
			</div>

			<div className="flex-auto p-6">
				<div className="flex flex-wrap">
					<h1 className="flex-auto text-xl font-semibold">{item.name}</h1>
					<div className="text-xl font-semibold text-gray-500 my-4">
						${item.price}
					</div>
				</div>
				<div className="flex space-x-3 mb-4 text-sm font-medium">
					<div className="flex-auto flex space-x-3 ">
						<Link href={`/product/${item.id}`}>
							
								<a
									className="w-1/2 flex items-center justify-center rounded-sm bg-black text-white"
									type="submit"
								>
									See
								</a>
							
						</Link>
						<button
							onClick={() => dispatch(addToCart(item.id))}
							className="w-1/2 flex items-center justify-center rounded-sm border border-gray-300"
							type="button"
						>
							Add to cart
						</button>
					</div>
					<button
						className="flex-none flex items-center justify-center w-9 h-9 rounded-sm text-gray-400 border border-gray-300"
						type="button"
						aria-label="like"
					>
						<HeartOutline />
					</button>
				</div>
			</div>
		</div>
	);
}
