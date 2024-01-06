import Link from "next/link";
import { useRouter } from "next/router";
// import { AiOutlineMenu } from "react-icons/ai";

export default function NavBar() {
	const router = useRouter();
	const { pathname } = router;

	const inActiveLink =
		"hover:p-2 hover:text-textHoverDark  mr-8 p-2 inActiveLink inline-block relative text-textDark ";
	const activeLink =
		inActiveLink + "hover:p-2 text-textHoverDark mr-8 p-2 font-semibold";

	return (
		<>
			<header className="w-full bg-transparent backdrop-blur-md shadow-md fixed h-14 flex items-center mx-auto justify-around fontColor">
				<div>
					<Link
						className="font-extrabold inline-block text-transparent text-xl bg-clip-text bg-gradient-to-r from-black via-acuaGreen-100 via-40% to-black"
						href="/"
					>
						Cpe-Prog.
					</Link>
				</div>
				<nav className="flex ">
					<Link
						className={pathname === "/" ? activeLink : inActiveLink}
						href={"/"}
					>
						Home
					</Link>
					<Link
						className={pathname === "/About" ? activeLink : inActiveLink}
						href={"/About"}
					>
						About
					</Link>
					<Link
						className={pathname === "/Services" ? activeLink : inActiveLink}
						href={"/Services"}
					>
						Services
					</Link>
					<Link
						className={pathname === "/Projects" ? activeLink : inActiveLink}
						href={"/Projects"}
					>
						Projects
					</Link>
					<Link
						className={pathname === "/Contact" ? activeLink : inActiveLink}
						href={"/Contact"}
					>
						Contact
					</Link>
				</nav>
				{/* <div>
					<AiOutlineMenu />
				</div>
				<div className="flex text-xs">
					<ul>
						<li>
							<Link href={"/"}>Home</Link>
						</li>

						<Link href={"/About"}>About</Link>
						<Link href={"/Services"}>Services</Link>
						<Link href={"/Projects"}>Projects</Link>
						<Link href={"/Contact"}>Contact</Link>
					</ul>
				</div> */}
			</header>
		</>
	);
}
