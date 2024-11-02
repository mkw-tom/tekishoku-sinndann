// import Image from "next/image";
import FirstView from "./components/FirstView";

export default function Home() {
	return (
		<main className="h-auto dark:bg-gray-800">
			<div className="mx-5 h-full pb-48 pt-20 md:mx-10">
				<FirstView />
			</div>
		</main>
	);
}
