/* eslint-disable @next/next/no-html-link-for-pages */
import { GithubIcon, LinkedinIcon } from "./icons";

export default function NavBar() {
	const inActiveLink =
		"hover:p-2 hover:text-textHoverDark hover:font-semibold mr-8 p-2 inActiveLink inline-block relative text-textDark focus:font-semibold focus:text-textHoverDark";

	return (
		<>
			<header className=" w-full bg-transparent backdrop-blur-md shadow-md fixed h-14 flex items-center justify-around fontColor">
				<div>
					<a
						className="font-extrabold inline-block text-transparent text-xl bg-clip-text bg-gradient-to-r from-black via-acuaGreen-100 via-40% to-black"
						href="/"
					>
						Cpe-Prog.
					</a>
				</div>
				<nav>
					<div>
						<a className={`${inActiveLink} `} href="#">
							Home
						</a>
						<a className={`${inActiveLink} `} href="#About">
							About
						</a>
						<a className={`${inActiveLink} `} href="#Projects">
							Projects
						</a>
						<a className={`${inActiveLink} `} href="#Contact">
							Contact
						</a>
					</div>
				</nav>
				<div className="flex items-center">
					<div className="flex justify-start gap-4">
						<a
							href={"https://www.linkedin.com/in/grian-gajila/"}
							target={"_blank"}
						>
							<LinkedinIcon />
						</a>
						<a href={"https://github.com/cpe-prog"} target={"_blank"}>
							<GithubIcon />
						</a>
					</div>
				</div>
			</header>
		</>
	);
}
