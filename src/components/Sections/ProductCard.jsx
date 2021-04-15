import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeartOutline, ZoomInOutline, ShoppingCartOutline } from "heroicons-react";
import { useTransition, animated } from "react-spring";
import { addToCart } from "src/redux/Shopping/shopping-actions";
import { useDispatch } from "react-redux";
import { useToast } from "@chakra-ui/react";

export default function Productcard(id = 1) {
	const [hovered, setHovered] = useState(false);
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
			<div
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
				className="text-center max-w-md relative mx-auto"
			>
				<figure className="w-full  featuredImage">
					<Image
						src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
						width="200"
						height="300"
						className="object-contain"
					/>
				</figure>

				{transition((style, item) =>
					item ? (
						<animated.div
							style={style}
							className="absolute top-2 right-2 flex flex-col items-center justify-center"
						>
							<button
								onClick={() => handleAdd(id)}
								aria-label="add to card"
								className="bg-primary-600 rounded-full w-10 h-10 text-white mb-2 "
							>
								<ShoppingCartOutline className="mx-auto" />
							</button>

							<button
								aria-label="quick view"
								className="bg-primary-600 rounded-full w-10 h-10 text-white mb-2 "
							>
								<ZoomInOutline className="mx-auto" />
							</button>

							<button
								aria-label="white list"
								className="bg-primary-600 rounded-full w-10 h-10 text-white mb-2 "
							>
								<HeartOutline className="mx-auto" />
							</button>
						</animated.div>
					) : null
				)}

				<div className="content p-4">
					<Link href="#">
						<a className="text-lg capitalize font-semibold">
							Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
						</a>
					</Link>

					<h3 className="font-bold py-3 px-5">$33.99</h3>
				</div>
			</div>
		</>
	);
}
