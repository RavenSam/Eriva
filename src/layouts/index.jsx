import Header from "@components/Header"

const menu = {
   logo: "https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",
   navLinks: [
      { label: "pricing", href: "#", child: [] },
      { label: "docs", href: "#", child: [] },
      {
         label: "categories",
         href: "#",
         child: [
            { label: "men", href: "#", description: "All the men cloth that you want" },
            { label: "women", href: "#", description: "Women cloth made exactly for you" },
         ],
      },
   ],
}

export default function Default({ children }) {
   return (
      <>
         <div className="font-body">
            <Header menu={menu} />
            {children}
         </div>
      </>
   )
}
