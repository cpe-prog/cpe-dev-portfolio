/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
import { useRouter } from "next/router";
import { ThemeMode } from "../icons/icon";

export default function NavBar() {
	const router = useRouter();
	const { pathname } = router;
	const inActiveLink =
		"hover:p-2 hover:text-textHoverDark mr-8 p-2 inActiveLink inline-block relative text-textDark ";
	const activeLink = inActiveLink + "hover:p-2 text-textHoverDark mr-8 p-2";

	return (
		<>
			<header className=" w-full bg-bgLight drop-shadow-xl shadow-black fixed h-16 flex items-center justify-around fontColor">
				<nav>
					<Link
						className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-black via-acuaGreen-100 via-40% to-black"
						href="/"
					>
						Cpe-Prog.
					</Link>
				</nav>
				<nav>
					<div>
						<Link
							className={pathname === "/About" ? activeLink : inActiveLink}
							href={"/About"}
						>
							About Me
						</Link>
						<Link
							className={pathname === "/Skills" ? activeLink : inActiveLink}
							href={"/Skills"}
						>
							Skills
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
					</div>
				</nav>
				<nav className="flex items-center gap-6">
					<button>
						<ThemeMode />
					</button>
				</nav>
			</header>
		</>
	);
}
