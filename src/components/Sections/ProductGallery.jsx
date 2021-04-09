import { useEffect, useState, useRef } from "react";
import { ChevronLeftOutline, ChevronRightOutline } from "heroicons-react";
import imageZoom from "src/utils/imageZoom";



export default function ProductGallery({gallery}) {
	const [hovered, setHovered] = useState(gallery[0].src);

	const scrollLeft = () => (document.getElementById("slider").scrollLeft -= 180);
	const scrollRight = () => (document.getElementById("slider").scrollLeft += 180);

	const changeFeatured = (e) => setHovered(e.target.src);

	useEffect(() => imageZoom("featured"), [hovered]);

	return (
		<>
			<div className="">
				<div className="img-container w-full relative">
					<div id="lens" className="w-32 h-32 z-2 absolute hidden border-2 border-black"></div>
					<img id="featured" src={hovered} style={{maxHeight:"80vh"}} className="object-cover cursor-pointer mx-auto max-w-full" />
				</div>

				<div id="slide-wrapper" className="flex items-center">
					<button
						className="rounded-full text-primary-600 focus:outline-none"
						onClick={scrollLeft}
					>
						<ChevronLeftOutline size="1.2rem" />
					</button>

					<div id="slider" className="flex flex-nowrap overflow-x-auto w-full scroll">
						{gallery.map((image, index) => (
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
