import Link from "next/link";

export default function NavBar() {
	const inActiveLink =
		"hover:bg-cyan-200 hover:text-cyan-800 hover:p-2 hover:rounded-md mr-8 p-2";
	return (
		<nav className=" h-14  flex items-center justify-between font-medium text-gray-700">
			<Link className="font-extrabold text-gray-700 pl-9" href={"/"}>
				Cpe-Prog.
			</Link>
			<div>
				<Link className={inActiveLink} href={"/"}>
					<span>About Me</span>
				</Link>
				<Link className={inActiveLink} href={"/"}>
					<span className="">Skills</span>
				</Link>
				<Link className={inActiveLink} href={"/"}>
					<span className="">Projects</span>
				</Link>
				<Link className={inActiveLink} href={"/"}>
					<span className="">Contact</span>
				</Link>
			</div>
		</nav>
	);
}
