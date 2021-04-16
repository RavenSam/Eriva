import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Magnifier from "react-magnifier";

import SliderGallery from "./Gallery/SliderGallery";

export default function ProductGallery({ gallery }) {
	const [hovered, setHovered] = useState(gallery[0].src);

	const changeFeatured = (src) => setHovered(src);

	return (
		<>
			<div className=" flex flex-col items-center justify-center">
				<div className="w-72">
					<Magnifier src={hovered} mgShape="square" />
				</div>

				<div className="flex items-center">
					<SliderGallery gallery={gallery} changeFeatured={changeFeatured} hovered={hovered} />
				</div>
			</div>
		</>
	);
}
