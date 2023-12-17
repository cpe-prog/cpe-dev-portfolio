import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function NavBar() {
	const router = useRouter();
	const { pathname } = router;
	const [isNavVisible, setIsNavVisible] = useState(false);

	const inActiveLink =
		"hover:p-2 hover:text-textHoverDark  mr-8 p-2 inActiveLink inline-block relative text-textDark ";
	const activeLink =
		inActiveLink + "hover:p-2 text-textHoverDark mr-8 p-2 font-semibold";

	const toggleNavVisibility = () => {
		setIsNavVisible(!isNavVisible);
	};

	const closeNav = () => {
		setIsNavVisible(false);
	};

	return (
		<>
			<header className="w-full bg-transparent backdrop-blur-md shadow-md fixed h-14 flex items-center justify-around fontColor">
				<div>
					<Link
						className="font-extrabold inline-block text-transparent text-xl bg-clip-text bg-gradient-to-r from-black via-acuaGreen-100 via-40% to-black"
						href="/"
					>
						Cpe-Prog.
					</Link>
				</div>
				<div className="md:hidden">
					<span
						className="text-3xl cursor-pointer mx-2"
						onClick={toggleNavVisibility}
					>
						<button name="menu">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
								/>
							</svg>
						</button>
					</span>
					{isNavVisible && (
						<div className="absolute top-16 right-0 bg-white shadow-md p-4 z-10">
							<nav>
								<Link
									className={pathname === "/" ? activeLink : inActiveLink}
									href="/"
								>
									Home
								</Link>
								<Link
									className={pathname === "/About" ? activeLink : inActiveLink}
									href="/About"
								>
									About
								</Link>
								<Link
									className={
										pathname === "/Services" ? activeLink : inActiveLink
									}
									href="/Services"
								>
									Services
								</Link>
								<Link
									className={
										pathname === "/Projects" ? activeLink : inActiveLink
									}
									href="/Projects"
								>
									Projects
								</Link>
								<Link
									className={
										pathname === "/Contact" ? activeLink : inActiveLink
									}
									href="/Contact"
								>
									Contact
								</Link>
							</nav>
							<button className="text-xl cursor-pointer" onClick={closeNav}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
					)}
				</div>
			</header>
		</>
	);
}
