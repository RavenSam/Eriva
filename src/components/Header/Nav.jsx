import DropDown from "@components/shared/DropDown"
import Link from "next/link"
import { Fragment } from "react"
import LinkParent from "./LinkParent"

export default function Nav({ links }) {
   return (
      <>
         <nav className="hidden relative md:flex items-center">
            {links.map((link) => (
               <Fragment key={link.label}>
                  {link.child.length ? (
                     <LinkParent link={link} />
                  ) : (
                     <Link href={link.href}>
                        <a className=" text-base text-gray-500 p-3 hover:text-gray-900 capitalize font-semibold">
                           {link.label}
                        </a>
                     </Link>
                  )}
               </Fragment>
            ))}
         </nav>
      </>
   )
}
