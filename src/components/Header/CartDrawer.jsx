import { useState, useRef } from "react"
import { ShoppingCartOutline, XOutline } from "heroicons-react"
import {
   Drawer,
   DrawerBody,
   DrawerFooter,
   DrawerHeader,
   DrawerOverlay,
   DrawerContent,
   DrawerCloseButton,
   useDisclosure,
   Divider,
   HStack,
   Button,
   Input,
} from "@chakra-ui/react"
import Btn from "@components/shared/Btn"

export default function CartDrawer() {
   const { isOpen, onOpen, onClose } = useDisclosure()
   const btnRef = useRef()
   const [cartContent, setCartContent] = useState([{}, {}])
   const [quantity, setQuantity] = useState(1)

   const inc = () => setQuantity(+quantity + 1)
   const dec = () => quantity && setQuantity(+quantity - 1)


   return (
      <>
         <button
            ref={btnRef}
            onClick={onOpen}
            aria-label="Shopping Cart"
            className="bg-white rounded-sm relative p-2 ml-2 inline-flex items-center justify-center text-primary-500 focus:outline-none "
         >
            <ShoppingCartOutline />
            <span className="text-xs  bg-primary-600 rounded-full px-1 text-white absolute top-0 right-0">2</span>
         </button>

         {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                                DRAWER
            >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
         <Drawer isOpen={isOpen} size="md" placement="right" onClose={onClose} finalFocusRef={btnRef}>
            <DrawerOverlay>
               <DrawerContent>
                  <DrawerCloseButton mt=".5rem"  />
                  <DrawerHeader>
                     <h2 className="text-xl font-heading font-bold">
                        Cart <span className="text-base text-gray-400">({cartContent.length})</span>
                     </h2>
                  </DrawerHeader>

                  <DrawerBody>
                     <div className="drawerBody  w-full flex items-start justify-start">
                        <img src="/images/img.jpg" alt="image" className="w-20 h-20" />

                        <div className="Product px-2 pl-4 w-full">
                           <div className="flex items-center justify-between">
                              <h3 className="text-gray-700 text-sm font-heading font-semibold">White shirt</h3>

                              <button
                                 aria-label="Remove product"
                                 type="button"
                                 className="bg-white rounded-sm inline-flex items-center justify-center text-gray-400  focus:outline-none "
                              >
                                 <XOutline size="1rem" />
                              </button>
                           </div>

                           <div className="flex items-center justify-between mt-4">
                              <HStack maxW="320px" border="1px solid #333">
                                 <button
                                    className="px-3 py-1 rounded-sm focus:outline-none"
                                    onClick={dec}
                                 >
                                    -
                                 </button>
                                 <div className="text-center" >
                                 {quantity}
                                 </div>
                                 <button
                                    className="px-3 py-1 rounded-sm focus:outline-none"
                                    onClick={inc}
                                 >
                                    +
                                 </button>
                              </HStack>

                              <p className="text-base text-gray-600">$59.99</p>
                           </div>
                        </div>
                     </div>
                     <Divider mt=".5rem" mb="1rem" />
                  </DrawerBody>

                  <DrawerFooter>
                     <div className="flex flex-col w-full">
                        <Btn type="secondary" className="w-full mb-2">
                           Chokout
                        </Btn>
                        <Btn type="primary" className="w-full">
                           Cart
                        </Btn>
                     </div>
                  </DrawerFooter>
               </DrawerContent>
            </DrawerOverlay>
         </Drawer>
      </>
   )
}




