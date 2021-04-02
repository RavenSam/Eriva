import { useState } from "react"
import Link from "next/link"
import { Photograph } from "heroicons-react"

export default function LinkParent({ link }) {
   const [show, setShow] = useState(false)

   const dropClasses = show
      ? "transition ease-out duration-200 opacity-100 translate-y-0 z-10"
      : "transition ease-in duration-150 opacity-0 translate-y-1 -z-1 pointer-events-none"

   return (
      <>
         <Link href={link.href}>
            <a
               onMouseOver={() => setShow(true)}
               onMouseLeave={() => setShow(false)}
               className=" text-base text-gray-500  p-3 hover:text-gray-900 capitalize font-semibold "
            >
               {link?.label}
            </a>
         </Link>

         <div
            onMouseOver={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            className={` ${dropClasses} absolute top-7  -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2`}
         >
            <div className="rounded-sm shadow-md ring-1 ring-black ring-opacity-5 overflow-hidden">
               <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {link.child.map((item) => (
                     <Link href="#">
                        <a className="-m-3 p-3 flex items-start rounded-sm hover:bg-gray-50">
                           <Photograph />
                           <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">{item.label}</p>
                              <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                           </div>
                        </a>
                     </Link>
                  ))}
               </div>
            </div>
         </div>
      </>
   )
}
