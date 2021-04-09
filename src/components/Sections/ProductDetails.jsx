import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, adjustQty } from "src/redux/Shopping/shopping-actions";

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
} from "@chakra-ui/react";
import { ChevronDownOutline } from "heroicons-react";

export default function ProductDetails({ product }) {
	const [qty, setQty] = useState(1);
	const dispatch = useDispatch();

	return (
		<>
			<h1 className="text-md md:text-lg xl:text-xl font-bold">{product.name}</h1>

			<p className="price text-xl my-5 text-primary-500 font-bold">$ {product.price}</p>

			<div className="flex items-center py-4">
				<HStack maxW="320px" mr="1.5rem">
					<button
						className="px-3 py-1 rounded-sm font-bold focus:outline-none"
						onClick={() => qty && setQty(qty - 1)}
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
						_focus={{ outline: "none" }}
						rightIcon={<ChevronDownOutline />}
					>
						Size
					</MenuButton>
					<MenuList>
						<MenuItem
							_hover={{ outline: "none", bg: "gray.100" }}
							_focus={{ outline: "none" }}
						>
							Size 1
						</MenuItem>
						<MenuItem
							_hover={{ outline: "none", bg: "gray.100" }}
							_focus={{ outline: "none" }}
						>
							Size 2
						</MenuItem>
						<MenuItem
							_hover={{ outline: "none", bg: "gray.100" }}
							_focus={{ outline: "none" }}
						>
							Size 3
						</MenuItem>
					</MenuList>
				</Menu>
			</div>
		</>
	);
}
