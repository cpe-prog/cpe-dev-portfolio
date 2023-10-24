import Link from "next/link";

export default function NavBar() {
	const inActiveLink = "hover:p-2  mr-8 p-2 Underline relative";
	return (
		<>
			<header className=" w-full h-14 bg-slate-200 flex items-center justify-between font-medium text-gray-700">
				<nav>
					<Link className="font-extrabold unde text-gray-700 pl-9" href={"/"}>
						Cpe-Prog.
					</Link>
				</nav>
				<nav>
					<Link className={inActiveLink} href="/AboutMe">
						About Me
					</Link>
					<Link className={inActiveLink} href={"/"}>
						Skills
					</Link>
					<Link className={inActiveLink} href={"/"}>
						Projects
					</Link>
					<Link className={inActiveLink} href={"/"}>
						Contact
					</Link>
				</nav>
			</header>
		</>
	);
}
