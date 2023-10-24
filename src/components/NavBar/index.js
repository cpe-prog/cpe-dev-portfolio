import Link from "next/link";

export default function NavBar() {
	const inActiveLink = "hover:p-2  mr-8 p-2 Underline inline-block relative";
	return (
		<>
			<header className=" w-full bg-slate-900 h-20 flex items-center justify-center font-medium text-gray-700">
				<div className="bg-slate-200 p-1 w-[50%] flex items-center justify-between rounded-lg">
					<nav className="mr-20">
						<Link className="font-extrabold text-gray-700 pl-9" href="/">
							Cpe-Prog.
						</Link>
					</nav>
					<nav>
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
					</nav>
				</div>
			</header>
		</>
	);
}
