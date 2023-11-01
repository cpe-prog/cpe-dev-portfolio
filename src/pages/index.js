/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import ProfileImage from "@/assets/images/profile/MyProfile-2.png";
import { Layout } from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<Head>
				<title>CpeProg • Home</title>
				<meta name="desctiption" content="Generated By Create Next App" />
			</Head>
			<main className="flex items-center text-textDark w-full min-h-screen">
				<Layout className="pt-0">
					<div className="flex items-center justify-around w-full">
						<div className="text-xl">
							<h1 className="text-5xl text-textLight bg-bgDark">
								Hello I'm Grian Gajila
							</h1>
							<h2>UI/UX designer, Responsive Web Design</h2>
							<p>Aspiring Senior Full Stack Web Developer.</p>
						</div>
						<div className=" rounded-br-full rounded-bl-full bg-gradient-to-tl from-slate-800 via-cyan-300 to-slate-700 background-animate">
							<div className=" rounded-br-full rounded-tr-full bg-gradient-to-tl from-slate-800 via-cyan-300 to-slate-700 background-animate">
								<Image
									src={ProfileImage}
									alt="Profile.img"
									className="w-96 rounded-r-full rounded-l-3xl"
								/>
							</div>
						</div>
					</div>
				</Layout>
			</main>
		</>
	);
}
