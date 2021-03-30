import { useState } from "react"
import MobileMenu from "./MobileMenu"
import NavRight from "./NavRight"
import Nav from "./Nav"

const navLink = [
   { label: "pricing", href: "#", child: [] },
   { label: "docs", href: "#", child: [] },
   {
      label: "parent",
      href: "#",
      child: [
         { label: "child 1", href: "#" },
         { label: "child 1", href: "#" },
      ],
   },
]

export default function Header() {
   return (
      <>
         <div className=" bg-white w-full ">
            <div className="max-w-6xl mx-auto px-4">
               <div className="flex justify-between items-center  py-6 md:justify-start">
                  <div className="flex justify-start lg:w-0 lg:flex-1 mr-3">
                     <a href="#">
                        <span className="sr-only">Workflow</span>
                        <img
                           className="h-8 w-auto sm:h-10"
                           src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                           alt=""
                        />
                     </a>
                  </div>

                  {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                                MOBILE MENU
                    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
                  <Nav links={navLink} />
                  {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

                  {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                                MOBILE MENU
                    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
                  <NavRight links={navLink} />
                  {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
               </div>
            </div>
         </div>
      </>
   )
}
