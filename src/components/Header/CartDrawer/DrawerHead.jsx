import { DrawerHeader } from "@chakra-ui/react";

export default function DrawerHead({ cartCounter }) {
	return (
		<>
			<DrawerHeader>
				<h2 className="text-xl md:text-2xl font-heading font-bold">
					My Cart <span className="text-base text-gray-400">({cartCounter})</span>
				</h2>
			</DrawerHeader>
		</>
	);
}
