import { useEffect, useState, useRef } from "react";
import { ChevronLeftOutline, ChevronRightOutline } from "heroicons-react";
import imageZoom from "src/utils/imageZoom";

const images = [
	{ src: "/products/shoe1.jpg" },
	{ src: "/products/shoe2.jpg" },
	{ src: "/products/shoe3.jpg" },
	{ src: "/products/shoe1.jpg" },
	{ src: "/products/shoe2.jpg" },
	{ src: "/products/shoe3.jpg" },
];

export default function ProductGallery() {
	const [hovered, setHovered] = useState(images[0].src);

	const scrollLeft = () => (document.getElementById("slider").scrollLeft -= 180);
	const scrollRight = () => (document.getElementById("slider").scrollLeft += 180);

	const changeFeatured = (e) => setHovered(e.target.src);

	useEffect(() => imageZoom("featured"), [hovered]);

	return (
		<>
			<div className="p-4">
				<div className="img-container w-full relative">
					<div id="lens" className="w-32 h-32 z-2 absolute border-2 border-black"></div>
					<img id="featured" src={hovered} className="object-cover cursor-pointer w-full" />
				</div>

				<div id="slide-wrapper" className="flex items-center">
					<button
						className="rounded-full text-primary-600 focus:outline-none"
						onClick={scrollLeft}
					>
						<ChevronLeftOutline size="1.2rem" />
					</button>

					<div id="slider" className="flex flex-nowrap overflow-x-auto w-full scroll">
						{images.map((image, index) => (
							<img
								onMouseEnter={changeFeatured}
								key={index}
								src={image.src}
								className={`${
									hovered.includes(image.src) ? "opacity-100" : "opacity-50"
								} hover:opacity-100 object-fit cursor-pointer my-2 mx-1 h-32`}
								alt="image"
							/>
						))}
					</div>

					<button
						className="rounded-full text-primary-600 focus:outline-none"
						onClick={scrollRight}
					>
						<ChevronRightOutline size="1.2rem" />
					</button>
				</div>
			</div>

			<style>{`
		#slider{
		  scroll-behavior: smooth;
		}

		#slider::-webkit-scrollbar {
				display:none;

		}
			`}</style>
		</>
	);
}
