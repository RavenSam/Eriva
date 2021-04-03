import React from "react"

export default function Btn({ className = "", type = "primary", h = "h1", children }) {
   const clas =
      type === "primary"
         ? "border-primary-600 bg-primary-600 text-white hover:bg-primary-400"
         : " text-primary-600 border-primary-600 hover:text-white btn  "

   return (
      <>
         <button
            className={` ${className} ${clas} relative overflow-hidden border-2  px-6 py-3 rounded-sm   font-semibold font-heading`}
         >
            {children}
         </button>

         <style>{`
            .btn::before{
                content:"";
                position:absolute;
                top:50%;
                left:50%;
                transform:translate(-50%,-50%);
                z-index:-1;
                transition:all 0.6s ease;
            }
            ${hoverEffect()[h]}
         `}</style>
      </>
   )
}

const hoverEffect = (color = "#111c22") => {
   const h1 = `.btn::before{
                background:${color};
                width:0;
                height:100%;
            }
            .btn:hover::before{
                width:100%
            }`

   const h2 = `.btn::before{
                background:${color};
                width:100%;
                height:0;
            }
            .btn:hover::before{
                height:100%
            }`

   return { h1, h2 }
}
