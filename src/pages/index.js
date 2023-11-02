/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import ProfileImage from "@/assets/images/MyProfile-2.png";
import { Layout } from "@/components/Layout/Home";
import { Tech } from "@/components/TechStackIcon";
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
					<div className="flex items-center justify-center gap-32 w-full">
						<div>
							<div></div>
							<h2 className="text-md cursor-default p-2 rounded-md mb-5 text-bgLight bg-textDark hoverBg">
								👋 Hi! I'm Grian Gajila
							</h2>
							<div>
								<h1 className="text-3xl text-bgDark font-extrabold mb-3">
									Front-End Web <br /> Developer
								</h1>
								<p className="font-normal">
									Turning ideas and imaginations into real life projects <br />{" "}
									by providing responsive web design and user interface.
								</p>
								<p className="mt-2">
									aspiring{" "}
									<span className="font-semibold text-bgDark">
										{"<Full Stack/>"}
									</span>{" "}
									Web Developer / Software Engineer.
								</p>
							</div>

							<div className="flex techStack mt-8 p-3 border-2 rounded-md">
								<h1 className=" border-r-2 border-solid pr-5 border-textDark ">
									Tech Stack
								</h1>
								<Tech />
							</div>
						</div>
						<div className="flex">
							<div className=" rounded-md bg-gradient-to-tl from-textDark via-bgLight to-textDark via-50% background-animate">
								<Image src={ProfileImage} alt="Profile.img" className="w-64" />
							</div>
						</div>
					</div>
				</Layout>
			</main>
		</>
	);
}
