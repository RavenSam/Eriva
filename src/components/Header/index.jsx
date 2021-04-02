import Link from "next/link"
import NavRight from "./NavRight"
import Nav from "./Nav"
import { isEmpty } from "lodash"

export default function Header({ menu }) {
   if (isEmpty(menu)) return null

   return (
      <>
         <div className=" bg-white w-full  duration-300 ease-in-out">
            <div className="max-w-6xl mx-auto px-4 transition duration-300 ease-in-out">
               <div className="flex justify-between items-center  py-4 md:justify-start">
                  {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                                WEBSITE LOGO
                    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
                  <div className="flex justify-start lg:w-0 lg:flex-1 mr-3">
                     <Link href="/">
                        <a>
                           <img className="h-8 w-auto sm:h-10" src={menu.logo} alt="Logo" />
                        </a>
                     </Link>
                  </div>
                  {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

                  {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                                NAVIGATION LINKS DISPLAY NONE ON SM
                    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
                  <Nav links={menu.navLinks} />
                  {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

                  {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                                RIGHT NAVIGATION 
                              | SEARCH BTN | SHOPPING CART BTN | SM MENU BTN
                    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
                  <NavRight menu={menu} />
                  {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
               </div>
            </div>
         </div>
      </>
   )
}
