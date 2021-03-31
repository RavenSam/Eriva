import React from "react"
//import { useSpring, animated } from "react-spring"

export default function SearchNav({ open, setOpen }) {
   const searchOpen = open ? "opacity-1 " : " hidden opacity-0"

//   const hidden = { opacity: 0, display: "none", zIndex: "-10" }
//   const show = { opacity: 1, display: "flex", zIndex: "10" }
  // const config = { mass: 1, tension: 120, friction: 14 }

 //  const styled = open ? { ...show, from: hidden, config } : { ...hidden, from: show, config }

  // const animation = useSpring(styled)

   return (
      <>
         <div
           
            onClick={() => setOpen(false)}
            className={` bg-whiteAlpha-900 w-full p-2 flex items-center justify-center absolute top-0 left-0 h-screen`}
         >
            <div
               onClick={(e) => e.stopPropagation()}
               className={`${searchOpen} duration-500 delay-700 ease search flex items-center justify-center flex-wrap mx-auto w-full max-w-sm`}
            >
               <input
                  type="search"
                  className="bg-gray-200 rounded-sm p-3 block focus:outline-none"
                  placeholder="Search"
               />

               <button className="rounded-sm bg-primary-600 py-3 px-4 text-white hover:bg-primary-500 focus:outline-none">
                  Search
               </button>
            </div>
         </div>
      </>
   )
}
