import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "@chakra-ui/react";

import CardButtons from "./CardButtons";

export default function Productcard({ product }) {
	const [isLargerThan850] = useMediaQuery("(min-width: 850px)");
	const [hovered, setHovered] = useState(!isLargerThan850);
	const [mOpen, setMOpen] = useState(false);

	

	return (
		<>
			<div
				onMouseEnter={() => isLargerThan850 && setHovered(true)}
				onMouseLeave={() => !mOpen && isLargerThan850 && setHovered(false)}
				className="text-center max-w-md relative mx-auto"
			>
				<figure style={{maxWidth:"12rem"}} className="w-full featuredImage mx-auto">
					<Image
						src={product.image}
						width="400"
						height="500"
						className="object-contain object-bottom"
					/>
				</figure>

				<div className="p-4">
					<Link href="#">
						<a className="text-lg capitalize font-semibold">{product.title}</a>
					</Link>

					<h3 className="font-bold py-3 px-5">${product.price}</h3>
				</div>

				<CardButtons product={product} hovered={hovered} setMOpen={setMOpen} setHovered={setHovered} />
			</div>
		</>
	);
}
