import { useState } from "react"
import { ChevronDown } from "heroicons-react"

export default function DropDown({ btnClasses = "", menuClasses = "", children, title }) {
   const [show, setShow] = useState(false)

   const dropClasses = show
      ? "transition ease-out duration-100 transform opacity-100 scale-100"
      : "transition ease-in duration-75 transform opacity-0 scale-95 -z-1"

   return (
      <>
         <div className="relative inline-block text-left">
            <div>
               <button
                  onClick={() => setShow(!show)}
                  onBlur={() => setShow(false)}
                  type="button"
                  className={` ${btnClasses} inline-flex justify-between w-fullbg-white text-sm text-gray-500 capitalize font-semibold hover:bg-gray-50 focus:outline-none `}
                  id="options-menu"
                  aria-expanded="true"
                  aria-haspopup="true"
               >
                  {title}
                  <ChevronDown />
               </button>
            </div>

            <div
               className={` ${dropClasses} ${menuClasses} origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-sm bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
               role="menu"
               aria-orientation="vertical"
               aria-labelledby="options-menu"
            >
               <div className="py-1" role="none">
                  {children}
               </div>
            </div>
         </div>
      </>
   )
}
