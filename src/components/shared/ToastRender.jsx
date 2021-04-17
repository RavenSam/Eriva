export default function ToastRender({ children }) {
	return (
		<div
			style={{ boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
			className="bdf bg-whiteAlpha-700 p-3 bg-black text-black max-w-md rounded-sm border-l-4 font-semibold border-black "
		>
			{children}
		</div>
	);
}
