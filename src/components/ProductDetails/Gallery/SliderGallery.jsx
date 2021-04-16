import Image from "next/image";
import { ChevronLeftOutline, ChevronRightOutline } from "heroicons-react";

export default function SliderGallery({ gallery, changeFeatured, hovered }) {
	const scrollLeft = () => (document.getElementById("slider").scrollLeft -= 180);
	const scrollRight = () => (document.getElementById("slider").scrollLeft += 180);

	return (
		<>
			<div id="slide-wrapper" className="flex items-center max-w-md">
				<button
					className="rounded-full text-primary-600 focus:outline-none"
					onClick={scrollLeft}
				>
					<ChevronLeftOutline size="1.2rem" />
				</button>

				<div id="slider" className="flex flex-nowrap overflow-x-auto w-full scroll">
					{gallery.map((image, index) => (
						<div key={index} style={{ minWidth: "100px" }} className="m-2">
							<Image
								onMouseEnter={() => changeFeatured(image.src)}
								width={100}
								height={200}
								alt="gallery image"
								src={image.src}
								className={`${
									hovered.includes(image.src) ? "opacity-100" : "opacity-70"
								} hover:opacity-100 object-contain cursor-pointer`}
								alt="image"
							/>
						</div>
					))}
				</div>

				<button
					className="rounded-full text-primary-600 focus:outline-none"
					onClick={scrollRight}
				>
					<ChevronRightOutline size="1.2rem" />
				</button>
			</div>
			<style>{`
		#slider{
		  scroll-behavior: smooth;
		}
		#slider::-webkit-scrollbar {
				display:none;
		}
		.gImage div {
			display:block;
		}
			`}</style>
		</>
	);
}
