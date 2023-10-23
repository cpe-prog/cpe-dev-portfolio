import "@/styles/globals.css";
import { Roboto } from "next/font/google";
import Head from "next/head";

const roboto = Roboto({
	weight: "400",
	subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<main className={`${roboto.className} bg-light w-full min-h-screen`}>
				<Component {...pageProps} />;
			</main>
		</>
	);
}
