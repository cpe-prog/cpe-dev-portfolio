import { Image, Link } from "next/link";

export default function NavBar() {
	return (
		<nav className="bg-cyan-600 h-14 flex items-center justify-center font-medium text-white">
			<Image src="/profile.png" width={500} height={500} alt="cpe-dev-logo" />

			<Link className="mr-8" href={"/"}>
				<span className="">Logo</span>
			</Link>
			<Link className="mr-8" href={"/"}>
				<span className="">About Me</span>
			</Link>
			<Link className="mr-8" href={"/"}>
				<span className="">Skills</span>
			</Link>
			<Link className="mr-8" href={"/"}>
				<span className="">Projects</span>
			</Link>
			<Link className="mr-8" href={"/"}>
				<span className="">Contact</span>
			</Link>
		</nav>
	);
}
