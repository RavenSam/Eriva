import React from "react"
import { ShoppingCartOutline } from "heroicons-react"
import MobileMenu from "./MobileMenu"
import Search from "./Search"

export default function NavRight({ menu }) {
   return (
      <>
         <div className="flex items-center justify-end md:flex-1 lg:w-0">
            <Search />

            <button
               aria-label="Shopping Cart"
               className="bg-white rounded-sm relative p-2 ml-2 inline-flex items-center justify-center text-primary-500 focus:outline-none "
            >
               <ShoppingCartOutline />
               <span className="text-xs  bg-red-600 rounded-full px-1 text-white absolute top-0 right-0">2</span>
            </button>

            {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                                MOBILE MENU
            >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
            <div className="ml-2 md:hidden">
               <MobileMenu menu={menu} />
            </div>
            {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
         </div>
      </>
   )
}
