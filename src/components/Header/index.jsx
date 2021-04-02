import { useState } from "react"
import MobileMenu from "./MobileMenu"
import NavRight from "./NavRight"
import Nav from "./Nav"
import { isEmpty } from "lodash"

export default function Header({ menu }) {
   if (isEmpty(menu)) return null

   return (
      <>
         <div className=" bg-white w-full  duration-300 ease-in-out">
            <div className="max-w-6xl mx-auto px-4 transition duration-300 ease-in-out">
               <div className="flex justify-between items-center  py-6 md:justify-start">
                  <div className="flex justify-start lg:w-0 lg:flex-1 mr-3">
                     <a href="#">
                        <span className="sr-only">Workflow</span>
                        <img className="h-8 w-auto sm:h-10" src={menu.logo} alt="" />
                     </a>
                  </div>

                  {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                                MOBILE MENU
                    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
                  <Nav links={menu.navLinks} />
                  {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

                  {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                                MOBILE MENU
                    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
                  <NavRight menu={menu} />
                  {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
               </div>
            </div>
         </div>
      </>
   )
}
