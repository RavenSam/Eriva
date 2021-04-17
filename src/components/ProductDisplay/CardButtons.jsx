import { useState } from "react";
import { HeartOutline, ArrowsExpandOutline, ShoppingCartOutline } from "heroicons-react";
import { useDispatch } from "react-redux";
import { useTransition, animated } from "react-spring";
import { addToCart } from "src/redux/Shopping/shopping-actions";
import { useToast } from "@chakra-ui/react";

import ProductModal from "./ProductModal/index";

export default function CardButtons({ id, hovered }) {
	const dispatch = useDispatch();
	const toast = useToast();

	const handleAdd = (id) => {
		dispatch(addToCart(id));
		toast({
			position: "top-left",
			title: "Added to cart",
			status: "success",
			duration: 9000,
			isClosable: true,
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
							onClick={() => handleAdd(id)}
							aria-label="add to card"
							className="bg-primary-600 rounded-full w-10 h-10 text-white mb-2 focus:outline-none"
						>
							<ShoppingCartOutline className="mx-auto" />
						</button>

						<ProductModal />

						<button
							aria-label="white list"
							className="bg-primary-600 rounded-full w-10 h-10 text-white mb-2 focus:outline-none "
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
