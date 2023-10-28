/* eslint-disable @next/next/no-html-link-for-pages */
import { motion } from "framer-motion";
import Link from "next/link";
import { ThemeMode } from "../icons/icon";
import { GithubIcon } from "./../icons/icon";

export default function NavBar() {
	const inActiveLink = "hover:p-2  mr-8 p-2 Underline inline-block relative";
	return (
		<>
			<header className=" w-full h-16 flex items-center justify-around fontColor">
				<nav className="mr-20">
					<Link
						className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-black via-acuaGreen-100 via-40% to-black"
						href="/"
					>
						Cpe-Prog.
					</Link>
				</nav>
				<nav className="p-2 bg">
					<div>
						<Link className={inActiveLink} href="/About">
							About Me
						</Link>
						<Link className={inActiveLink} href="/Skills">
							Skills
						</Link>
						<Link className={inActiveLink} href="/Projects">
							Projects
						</Link>
						<Link className={inActiveLink} href="/Contact">
							Contact
						</Link>
					</div>
				</nav>
				<nav className="flex items-center gap-6">
					<button>
						<ThemeMode />
					</button>
					<motion.a
						href="https://github.com/cpe-prog"
						target={"_blank"}
						whileHover={{ y: -4 }}
						whileTap={{ scale: 0.8 }}
					>
						<GithubIcon />
					</motion.a>
				</nav>
			</header>
		</>
	);
}
