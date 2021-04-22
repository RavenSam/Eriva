import TableHead from "./TableHead";
import TableBody from "./TableBody";

export default function ProductInCart({ cart }) {
	return (
		<>
			<div className="flex flex-col">
				<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
						<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-sm">
							<table className="min-w-full divide-y divide-gray-200">
								<TableHead />

								{cart.map((product) => (
									<TableBody product={product} />
								))}
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
