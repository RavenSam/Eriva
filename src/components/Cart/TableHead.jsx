export default function TableHead() {
	return (
		<thead className="bg-gray-50">
			<tr>
				<th
					scope="col"
					className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
				>
					Product Details
				</th>
				<th
					scope="col"
					className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
				>
					quatity
				</th>
				<th
					scope="col"
					className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
				>
					Price
				</th>
				<th
					scope="col"
					className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
				>
					Total
				</th>
				<th scope="col" className="relative px-6 py-3">
					<span className="sr-only">Edit</span>
				</th>
			</tr>
		</thead>
	);
}
