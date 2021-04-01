import { useState } from "react"
import { useTransition, animated } from "react-spring"

export default function Home() {
   const [show, setShow] = useState(false)

   const transition = useTransition(show, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
   })

   return (
      <>
         <div className=" my-10 flex items-center justify-center flex-col">
            <button
               className="py-2 px-5 bg-blue-600 text-white rounded-full focus:outline-none"
               onClick={() => setShow(!show)}
            >
               {show ? "Hide" : "Show"}
            </button>

            <div className=" my-10 flex items-center justify-center flex-col">
               {transition(
                  (style, item) =>
                     item && <animated.div style={style} className="w-32 h-32 bg-pink-600 shadow-2xl rounded-md" />
               )}
            </div>
         </div>
      </>
   )
}
