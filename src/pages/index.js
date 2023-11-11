/* eslint-disable react/no-unescaped-entities */

import ProfileImage from "@/assets/images/MyProfile-2.png";
import { Layout } from "@/components/Layout/Layout";
import { Tech } from "@/components/icons";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<Head>
				<title>CpeProg • Home</title>
				<meta name="desctiption" content="Generated By Create Next App" />
			</Head>
			<Layout className="flex items-center pt-0 text-textDark w-full min-h-screen">
				<div className="flex items-center justify-center gap-32 w-full">
					<div>
						<div></div>
						<h2 className="text-md cursor-default p-2 w-48 rounded-md mb-5 text-bgLight bg-gradient-to-l from-textDark to-activeBorderBottom via-50% gradiantBackground">
							👋 Hi! I'm Grian Gajila
						</h2>
						<div>
							<h1 className="text-3xl text-bgDark font-extrabold mb-3">
								Front-End Web <br /> Developer
							</h1>
							<p className="font-normal">
								Turning ideas and imaginations into real life projects <br /> by
								providing responsive web design and user interface.
							</p>
							<p className="mt-2">
								aspiring{" "}
								<span className="font-semibold text-bgDark">
									{"<Full-Stack/>"}
								</span>{" "}
								Web Developer.
							</p>
						</div>

						<div className="flex mt-10 p-2 border-2 rounded-md">
							<h1 className=" border-r-2 border-solid pr-5 border-textDark ">
								Tech Stack
							</h1>
							<Tech />
						</div>
					</div>
					<div className="flex">
						<motion.div
							whileHover={{ y: -4 }}
							className=" rounded-tl-full rounded-br-full rounded-tr-full bg-gradient-to-tl from-activeBorderBottom via-bgLight to-activeBorderBottom via-50% background-animate"
						>
							<Image
								src={ProfileImage}
								alt="Profile.img"
								className="w-64 rounded-br-full rounded-tr-full"
							/>
						</motion.div>
					</div>
				</div>
			</Layout>
		</>
	);
}
