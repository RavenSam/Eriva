import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Magnifier from "react-magnifier";

import SliderGallery from "./Gallery/SliderGallery";

export default function ProductGallery({ product }) {
	const [hovered, setHovered] = useState(product.image);

	const changeFeatured = (src) => setHovered(src);

	return (
		<>
			<div className=" flex flex-col items-center justify-center">
				<div className="w-72">
					<Magnifier src={hovered} mgShape="square" />
				</div>

				<div className="flex items-center">
				{product.gallery &&
					<SliderGallery gallery={gallery} changeFeatured={changeFeatured} hovered={hovered} />
				}
				</div>
			</div>
		</>
	);
}
