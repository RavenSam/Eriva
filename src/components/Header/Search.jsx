import { useState } from "react"
import { useTransition, animated } from "react-spring"
import { SearchOutline } from "heroicons-react"

export default function Search() {
   const [openSearch, setOpenSearch] = useState(false)

   const transition = useTransition(openSearch, {
      from: { y: "-100%", opacity: 0 },
      enter: { y: "0", opacity: 1 },
      leave: { opacity: 0 },
   })

   return (
      <>
         <button
            onClick={() => setOpenSearch(!openSearch)}
            aria-label="Search"
            className="bg-white rounded-sm p-2 ml-2 inline-flex items-center justify-center text-gray-400  duration-200 ease hover:text-primary-500  focus:outline-none "
         >
            <SearchOutline />
         </button>

         {transition(
            (style, item) =>
               item && (
                  <animated.div
                     style={style}
                     onClick={() => setOpenSearch(false)}
                     className="bg-whiteAlpha-900 w-full p-2  items-center justify-center absolute top-0 left-0 h-screen  transition-all flex z-10 "
                  >
                     <animated.div
                        style={style}
                        onClick={(e) => e.stopPropagation()}
                        className="duration-500 delay-700 ease search flex items-center justify-center flex-wrap mx-auto w-full max-w-sm"
                     >
                        <input
                           type="search"
                           autoFocus={true}
                           className="bg-gray-200 w-9/12 rounded-sm p-3 block focus:outline-none"
                           placeholder="Search"
                        />

                        <button className="rounded-sm bg-primary-600 py-3 w-3/12 text-white hover:bg-primary-500 focus:outline-none">
                           Search
                        </button>
                     </animated.div>
                  </animated.div>
               )
         )}
      </>
   )
}
