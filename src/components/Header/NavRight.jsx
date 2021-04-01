import React from "react"
import { ShoppingCartOutline } from "heroicons-react"
import MobileMenu from "./MobileMenu"
import Search from "./Search"

export default function NavRight({ links, setOpenSearch, openSearch }) {
   return (
      <>
         <div className="flex items-center justify-end md:flex-1 lg:w-0">
            <Search />

            <button
               aria-label="Shopping Cart"
               className="bg-white rounded-sm p-2 ml-2 inline-flex items-center justify-center text-primary-500  hover:bg-gray-100 focus:outline-none "
            >
               <ShoppingCartOutline />
            </button>

            {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                                MOBILE MENU
            >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
            <div className="ml-2 md:hidden">
               <MobileMenu links={links} />
            </div>
            {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
         </div>
      </>
   )
}
