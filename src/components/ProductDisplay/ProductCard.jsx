import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "@chakra-ui/react";

import CardButtons from "./CardButtons";

export default function Productcard(id = 1) {
	const [isLargerThan850] = useMediaQuery("(min-width: 850px)");
	const [hovered, setHovered] = useState(!isLargerThan850);

	return (
		<>
			<div
				onMouseEnter={() => isLargerThan850 && setHovered(true)}
				onMouseLeave={() => isLargerThan850 && setHovered(false)}
				className="text-center max-w-md relative mx-auto"
			>
				<figure className="w-full featuredImage">
					<Image
						src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
						width="200"
						height="300"
						className="object-contain"
					/>
				</figure>

				<div className="p-4">
					<Link href="#">
						<a className="text-lg capitalize font-semibold">
							Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
						</a>
					</Link>

					<h3 className="font-bold py-3 px-5">$33.99</h3>
				</div>

				<CardButtons id={id} hovered={hovered} />
			</div>
		</>
	);
}
