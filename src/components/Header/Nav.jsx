import DropDown from "@components/shared/DropDown"
import Link from "next/link"
import { Fragment } from "react"

export default function Nav({ links }) {
   return (
      <>
         <nav className="hidden md:flex space-x-10">
            {links.map((link) => (
               <Fragment key={link.label}>
                  {link.child.length ? (
                     <DropDown title={link.label}>
                        {link.child.map((item, index) => (
                           <Link key={index} href={item.href}>
                              <a
                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                 role="menuitem"
                              >
                                 {item.label}
                              </a>
                           </Link>
                        ))}
                     </DropDown>
                  ) : (
                     <Link href={link.href}>
                        <a className="text-base font-medium text-gray-500 hover:text-gray-900">{link.label}</a>
                     </Link>
                  )}
               </Fragment>
            ))}
         </nav>
      </>
   )
}
