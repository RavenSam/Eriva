import { DrawerHeader } from "@chakra-ui/react";

export default function DrawerHead({ cartCounter }) {
	return (
		<>
			<DrawerHeader>
				<h2 className="text-xl font-heading font-bold">
					Cart <span className="text-base text-gray-400">({cartCounter})</span>
				</h2>
			</DrawerHeader>
		</>
	);
}
