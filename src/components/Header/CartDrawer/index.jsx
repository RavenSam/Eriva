import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { ShoppingBagOutline } from "heroicons-react";
import {
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import DrawerMain from "./DrawerMain";
import DrawerFoot from "./DrawerFoot";
import DrawerHead from "./DrawerHead";

export default function CartDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const { cart } = useSelector((state) => state.shop);

  const [cartCounter, setCartCounter] = useState(0);
  useEffect(() => {
    let count = 0;
    cart.forEach((item) => (count += item.qty));
    setCartCounter(count);
  }, [cart, cartCounter]);

  return (
    <>
      <button
        ref={btnRef}
        onClick={onOpen}
        aria-label="Shopping Cart"
        className="bg-white rounded-sm relative p-2 ml-2 inline-flex items-center justify-center text-primary-500 focus:outline-none "
      >
        <ShoppingBagOutline size="1.9rem" />

        <span className="text-xs  bg-primary-600 rounded-full h-5 w-5 text-center leading-5 text-white absolute top-0 right-0">
          {cartCounter}
        </span>
      </button>

      {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                                DRAWER
            >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
      <Drawer isOpen={isOpen} size="md" placement="right" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton mt=".5rem" _focus={{ outline: "none" }} />
            <DrawerHead cartCounter={cartCounter} />

            <DrawerMain cart={cart} />

            <DrawerFoot cart={cart} />
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
