import { HeartOutline, ArrowsExpandOutline, ShoppingCartOutline } from "heroicons-react";
import { useEffect } from "react";

import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
} from "@chakra-ui/react";

export default function ProductModal({ product, setHovered, setMOpen }) {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleOpen = () => {
		setMOpen(true);
		onOpen();
	};

	const handleClose = () => {
		setMOpen(false);
		setHovered(false)
		onClose();
	};

	return (
		<>
			<button
				onClick={handleOpen}
				aria-label="quick view"
				className="bg-primary-600 rounded-full w-10 h-10 text-white mb-2 focus:outline-none"
			>
				<ArrowsExpandOutline className="mx-auto" />
			</button>

			<Modal isOpen={isOpen} onClose={onClose} size="3xl">
				<ModalOverlay onClick={handleClose} />

				<ModalContent borderRadius="2px">
					<ModalHeader>Product</ModalHeader>
					<ModalCloseButton _focus={{ outline: "none" }} onClick={handleClose} />

					<ModalBody>
						<h1 className="text-2xl">{product.title}</h1>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}
