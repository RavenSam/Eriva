import { useState } from "react"
import Link from "next/link"
import { MenuOutline, XOutline } from "heroicons-react"

export default function MobileMenu({ menu }) {
   const [open, setOpen] = useState(false)

   const menuClasses = open
      ? " duration-200 ease-out opacity-100 scale-100 z-1"
      : " duration-100 ease-in opacity-0 scale-95 -z-1"
   return (
      <>
         {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                                MOBILE MENU
        >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}

         <button
            onClick={() => setOpen(true)}
            type="button"
            aria-label="Open Menu"
            className="bg-white rounded-sm p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none "
            aria-expanded="false"
         >
            <MenuOutline />
         </button>

         {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                                MOBILE MENU
        >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}

         <div className={`${menuClasses} absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden`}>
            <div className="rounded-sm shadow-md ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
               <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                     <div>
                        <img className="h-8 w-auto" src={menu.logo} alt="Workflow" />
                     </div>
                     <div className="-mr-2">
                        <button
                           onClick={() => setOpen(false)}
                           aria-label="Close Menu"
                           type="button"
                           className="bg-white rounded-sm p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none "
                        >
                           <XOutline />
                        </button>
                     </div>
                  </div>
                  <div className="mt-6">
                     <nav className="grid gap-y-8">
                        {menu.navLinks.map((item) => (
                           <Link href={item.href} key={item.label}>
                              <a className="-m-3 p-3 flex items-center rounded-sm hover:bg-gray-100">
                                 <span className="ml-3 text-base font-medium text-gray-900">{item.label}</span>
                              </a>
                           </Link>
                        ))}
                     </nav>
                  </div>
               </div>
               <div className="py-6 px-5 space-y-6">
                  <div>
                     <a
                        href="#"
                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-sm shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700"
                     >
                        Sign up
                     </a>
                     <p className="mt-6 text-center text-base font-medium text-gray-500">
                        Existing customer?
                        <a href="#" className="text-primary-600 hover:text-primary-500">
                           Sign in
                        </a>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
