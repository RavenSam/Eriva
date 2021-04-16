import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart, adjustQty } from "src/redux/Shopping/shopping-actions";
import Btn from "@components/shared/Btn";

import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuItemOption,
	MenuGroup,
	MenuOptionGroup,
	MenuIcon,
	MenuCommand,
	MenuDivider,
	Button,
	HStack,
	useToast 
} from "@chakra-ui/react";
import { ChevronDownOutline } from "heroicons-react";

export default function ProductInfo({ product }) {
	const [qty, setQty] = useState(1);
	const dispatch = useDispatch();
	const toast = useToast()

	const handleAdding = () => {
		dispatch(addToCart(product.id))
		dispatch(adjustQty(product.id,qty))
		toast({
          title: "Added Product To The Cart",
          position: "top-left",
          status: "success",
          duration: 4000,
          isClosable: true,
        })
	};

	return (
		<>
			<div className="py-4 lg:px-4">
				<h1 className="text-lg md:text-xl xl:text-2xl font-bold">{product.name}</h1>

				<p className="price text-xl my-5 text-primary-500 font-bold">$ {product.price}</p>

				<div className="flex items-center py-4">
					<HStack maxW="320px" mr="1.5rem">
						<button
							className="px-3 py-1 rounded-sm font-bold focus:outline-none"
							onClick={() => qty > 1 && setQty(qty - 1)}
						>
							-
						</button>
						<div className="text-center font-bold">{qty}</div>
						<button
							className="px-3 py-1 rounded-sm font-bold focus:outline-none"
							onClick={() => setQty(qty + 1)}
						>
							+
						</button>
					</HStack>

					<Menu>
						<MenuButton
							as={Button}
							bg="gray.50"
							_focus={{ outline: "none" }}
							_hover={{ outline: "none", bg: "gray.50" }}
							rightIcon={<ChevronDownOutline />}
						>
							Size
						</MenuButton>
						<MenuList>
							<MenuItem
								_hover={{ outline: "none", bg: "gray.50" }}
								_focus={{ outline: "none" }}
							>
								Size 1
							</MenuItem>
						</MenuList>
					</Menu>
				</div>

				<div className="my-4">
					<Btn onClick={handleAdding}>Add To Cart</Btn>
				</div>

				<hr className="my-4" />

				<div className="description">
					<h2 className="text-md md:text-lg xl:text-xl font-semibold">Description</h2>

					<p className="text-gray-500 my-2 max-w-md">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum rerum ipsam,
						cumque debitis optio iure maxime maiores eaque quam nesciunt impedit ratione
						officia. Nihil quam minima amet nemo quas molestias.
					</p>
				</div>
			</div>
		</>
	);
}
