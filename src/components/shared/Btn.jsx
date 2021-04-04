import React from "react"

export default function Btn({ className = "", type = "primary", h = "h1", children }) {
   const clas =
      type === "primary"
         ? "border-none bg-gradient-to-r from-primary-300 to-primary-700 text-white primary"
         : " text-primary-600 border-primary-600 hover:text-white secondary  "

   return (
      <>
         <button
            className={` ${className} ${clas} relative overflow-hidden border-2  px-6 py-3 rounded-sm   font-semibold font-heading`}
         >
            {children}
         </button>

         <style>{`
            .secondary::before{
                content:"";
                position:absolute;
                top:50%;
                left:50%;
                transform:translate(-50%,-50%);
                z-index:-1;
                transition:all 0.6s ease;
            }

            .primary::before{
               content:"";
               position:absolute;
               height:100px;
               width:80px;
               background:#f3f3f3;
               box-shadow: 0 0 10px #fff;
               filter:blur(1px);
               opacity:0.8;
               top:-30px;
               left:-50px;
               transition:0.6s;
               transform:rotate(20deg) translateX(-50px);
            }
            .primary:Hover::before{
               transform:rotate(20deg) translateX(50px);
               left:100%;
               opacity:0.35;
               width:40px;
            }
            ${hoverEffect()[h]}
         `}</style>
      </>
   )
}

const hoverEffect = (color = "#111c22") => {
   const h1 = `.secondary::before{
                background:${color};
                width:0;
                height:100%;
            }
            .secondary:hover::before{
                width:100%
            }`

   const h2 = `.secondary::before{
                background:${color};
                width:100%;
                height:0;
            }
            .secondary:hover::before{
                height:100%
            }`

   return { h1, h2 }
}
