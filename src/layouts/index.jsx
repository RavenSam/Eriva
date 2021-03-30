import Header from "@components/Header"

export default function Default({ children }) {
   return (
      <>
         <div className="font-body">
            <Header />
            {children}
         </div>
      </>
   )
}
