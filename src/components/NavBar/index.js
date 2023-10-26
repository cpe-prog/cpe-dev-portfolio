import Link from "next/link";

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
				<nav>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="2"
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
						/>
					</svg>
				</nav>
			</header>
		</>
	);
}
