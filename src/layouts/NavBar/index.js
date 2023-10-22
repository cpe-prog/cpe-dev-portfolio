import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
	const router = useRouter();
	const { pathname } = router;

	const inactiveLink = "flex gap-2 p-2 rounded-lg hover:bg-gray-500";
	const activeLink =
		inactiveLink +
		"flex gap-2 p-2 rounded-lg bg-gray-300 text-slate-700 font-medium hover:bg-gray-500 hover:text-white";
	return (
		<nav className="">
			<Link href={"/"}>
				<span className="text-2xl text-white pr-4 border-solid border-r-2 border-s-fuchsia-800 border-white font-bold">
					Logo
				</span>
			</Link>
			<Link className={pathname === "/" ? activeLink : inactiveLink} href={"/"}>
				<span className="text-2xl text-white pr-4 border-solid border-r-2 border-s-fuchsia-800 border-white font-bold">
					About Me
				</span>
			</Link>

			<Link href={"/"}>
				<span className="text-2xl text-white pr-4 border-solid border-r-2 border-s-fuchsia-800 border-white font-bold">
					Skills
				</span>
			</Link>
			<Link href={"/"}>
				<span className="text-2xl text-white pr-4 border-solid border-r-2 border-s-fuchsia-800 border-white font-bold">
					Projects
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
