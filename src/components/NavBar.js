/* eslint-disable @next/next/no-html-link-for-pages */
import { useRouter } from "next/router";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function NavBar() {
	const router = useRouter();
	const { pathname } = router;
	const inActiveLink =
		"hover:p-2 hover:text-textHoverDark hover:font-semibold mr-8 p-2 inActiveLink inline-block relative text-textDark ";
	const activeLink =
		inActiveLink + "hover:p-2 text-textHoverDark mr-8 p-2 font-semibold";

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
						<a
							className={pathname === "/" ? activeLink : inActiveLink}
							href="/"
						>
							Home
						</a>
						<a
							className={pathname === "#About" ? activeLink : inActiveLink}
							href="#About"
						>
							About
						</a>
						<a
							className={pathname === "#Projects" ? activeLink : inActiveLink}
							href="#Projects"
						>
							Projects
						</a>
						<a
							className={pathname === "#Contact" ? activeLink : inActiveLink}
							href="#Contact"
						>
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
