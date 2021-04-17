import { useState } from "react";
import Image from "next/image";
import { useTransition, animated } from "react-spring";
import Link from "next/link";
import { useMediaQuery } from "@chakra-ui/react";

import CardButtons from "./CardButtons";

export default function Productcard(id = 1) {
	const [isLargerThan850] = useMediaQuery("(min-width: 850px)");
	const [hovered, setHovered] = useState(!isLargerThan850);

		const transition = useTransition(hovered, {
		from: { x: 30, opacity: 0 },
		enter: { x: 0, opacity: 1 },
		leave: { x: 30, opacity: 0 },
	});

	return (
		<>
			<div
				onMouseEnter={() => isLargerThan850 && setHovered(true)}
				onMouseLeave={() => isLargerThan850 && setHovered(false)}
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
				<CardButtons id={id} hovered={hovered} />
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
