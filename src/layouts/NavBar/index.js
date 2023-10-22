import Link from "next/link";

export default function NavBar() {
	return (
		<nav>
			<Link href={"/"}>
				<span className="text-2xl text-white pr-4 border-solid border-r-2 border-s-fuchsia-800 border-white font-bold">
					Home
				</span>
			</Link>

			<Link href={"/"}>
				<span className="text-2xl text-white pr-4 border-solid border-r-2 border-s-fuchsia-800 border-white font-bold">
					Portfolio
				</span>
			</Link>
			<Link href={"/"}>
				<span className="text-2xl text-white pr-4 border-solid border-r-2 border-s-fuchsia-800 border-white font-bold">
					About
				</span>
			</Link>
			<Link href={"/"}>
				<span className="text-2xl text-white pr-4 border-solid border-r-2 border-s-fuchsia-800 border-white font-bold">
					Contact
				</span>
			</Link>
		</nav>
	);
}
