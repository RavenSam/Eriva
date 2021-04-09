import Header from "@components/Header";
import NextNprogress from "nextjs-progressbar";

// Dummy Data
import { menu } from "dummyData";

export default function Default({ children }) {
	return (
		<>
			
				<NextNprogress
					options={{ showSpinner: false }}
					color="#111c22"
					startPosition={0.3}
				/>
				<Header menu={menu} />
				{children}
			
		</>
	);
}
