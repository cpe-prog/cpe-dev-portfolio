import Link from "next/link";

export default function NavBar() {
	const inActiveLink = "hover:p-2  mr-8 p-2 Underline inline-block relative";
	return (
		<>
			<header className=" w-full h-14 bg-slate-200 flex items-center justify-between font-medium text-gray-700">
				<nav>
					<Link className="font-extrabold unde text-gray-700 pl-9" href="/">
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
			</header>
		</>
	);
}
