import { HeartOutline, ArrowsExpandOutline, ShoppingCartOutline } from "heroicons-react";

import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure 
} from "@chakra-ui/react";

export default function ProductModal() {
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<>
			<button
				onClick={onOpen}
				aria-label="quick view"
				className="bg-primary-600 rounded-full w-10 h-10 text-white mb-2 focus:outline-none"
			>
				<ArrowsExpandOutline className="mx-auto" />
			</button>

			<Modal isOpen={isOpen} onClose={onClose} size="3xl">
				<ModalOverlay />

				<ModalContent>
					<ModalHeader>Product</ModalHeader>
					<ModalCloseButton _focus={{ outline: "none" }} />

					<ModalBody>
						<h1 className="text-3xl">Product</h1>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}
