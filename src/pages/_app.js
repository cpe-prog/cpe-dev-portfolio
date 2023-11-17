import "@/styles/AnimatedBg.css";
import "@/styles/NavBar.css";
import "@/styles/globals.css";
import { Roboto } from "next/font/google";
import Head from "next/head";
import NavBar from "./../components/NavBar";
import About from "./About/index";
import Services from "./Services/index";

const roboto = Roboto({
	weight: "500",
	subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<main className={`${roboto.className} bg-bgLight w-full h-full`}>
				<NavBar />
				<Component {...pageProps} />
				<Services />
				<About />
			</main>
		</>
	);
}
