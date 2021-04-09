export default function imageZoom(imgID, ratio = 2) {
	let img = document.getElementById(imgID);
	let lens = document.getElementById("lens");

	lens.style.backgroundImage = `url( ${img.src} )`;

	lens.style.backgroundSize = img.width * ratio + "px " + img.height * ratio + "px ";

	img.addEventListener("mousemove", moveLens);
	img.addEventListener("touchmove", moveLens);
	lens.addEventListener("mousemove", moveLens);
	lens.addEventListener("mouseleave", leaveLens);

	// Funcion to not display the lens if not hovering it
	function leaveLens(){
		lens.style.display="none"
	}

	// Function sets sets position of lens over image and background image of lens
	function moveLens() {
		// Display the Lens
		lens.style.display="block"
		//   1 - Get cursor position
		let pos = getCursor();

		//   2 - Set top and left position using cursor position - lens width & height / 2
		let positionLeft = pos.x - lens.offsetWidth / 2;
		let positionTop = pos.y - lens.offsetHeight / 2;

		// 5 - Set lens bounds
		if (positionLeft < 0) positionLeft = 0;

		if (positionTop < 0) positionTop = 0;

		if (positionLeft > img.width - lens.offsetWidth / 3) {
			positionLeft = img.width - lens.offsetWidth / 3;
		}

		if (positionTop > img.height - lens.offsetHeight / 3) {
			positionTop = img.height - lens.offsetHeight / 3;
		}

		// 3 - Set lens top/left positions based on cursor results
		lens.style.left = positionLeft + "px";
		lens.style.top = positionTop + "px";

		// 4 - Set lens background position & invert
		lens.style.backgroundPosition = "-" + pos.x * ratio + "px -" + pos.y * ratio + "px";
	}

	// Function gets position of mouse in dom and bounds
	// of image to know where mouse is over image when moved
	function getCursor() {
		// 1 - set "e" to window events
		let e = window.event;

		// 2 - Get bounds of image
		let bounds = img.getBoundingClientRect();

		// 3 - set x to position of mouse on image using pageX/pageY - bounds.left/bounds.top
		let x = e.pageX - bounds.left;
		let y = e.pageY - bounds.top;

		// 4- Return x and y coordinates for mouse position on image
		x = x - window.pageXOffset;
		y = y - window.pageYOffset;

		return { x, y };
	}
}
