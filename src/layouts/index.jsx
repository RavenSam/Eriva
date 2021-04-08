import Header from "@components/Header"


// Dummy Data
import { menu } from "dummyData";

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
