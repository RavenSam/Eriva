import { useState } from "react";
import { HeartOutline, ArrowsExpandOutline, ShoppingCartOutline } from "heroicons-react";
import { useDispatch } from "react-redux";
import { useTransition, animated } from "react-spring";
import { addToCart } from "src/redux/Shopping/shopping-actions";
import { useToast } from "@chakra-ui/react";
import ToastRender from "@components/shared/ToastRender";

import ProductModal from "./ProductModal/index";

export default function CardButtons({ product, hovered, setHovered,setMOpen }) {
	const dispatch = useDispatch();
	const toast = useToast();

	const handleAdd = (id) => {
		dispatch(addToCart(id));
		toast({
			position: "top-left",
			render: () => <ToastRender>Added to the cart</ToastRender>,
		});
	};

	const transition = useTransition(hovered, {
		from: { x: 30, opacity: 0 },
		enter: { x: 0, opacity: 1 },
		leave: { x: 30, opacity: 0 },
	});

	return (
		<>
			{transition((style, item) =>
				item ? (
					<animated.div
						style={style}
						className="absolute top-2 right-2 flex flex-col items-center justify-center"
					>
						<button
							onClick={() => handleAdd(product.id)}
							aria-label="add to card"
							className="bg-primary-600 opacity-80 hover:opacity-100 rounded-full w-10 h-10 text-white mb-2 focus:outline-none"
						>
							<ShoppingCartOutline className="mx-auto" />
						</button>

						<ProductModal product={product}  setHovered={setHovered}  setMOpen={setMOpen} />

						<button
							aria-label="white list"
							className="bg-primary-600  opacity-80 hover:opacity-100  rounded-full w-10 h-10 text-white mb-2 focus:outline-none "
						>
							<HeartOutline className="mx-auto" />
						</button>
					</animated.div>
				) : (
					""
				)
			)}
		</>
	);
}
