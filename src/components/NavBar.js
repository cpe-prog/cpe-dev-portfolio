import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import { AiOutlineMenu } from "react-icons/ai";

export default function NavBar() {
	const router = useRouter();
	const { pathname } = router;
	const [nav, setNav] = useState(false);

	const links = [
		{
			id: 1,
			link: "/",
		},
		{
			id: 2,
			link: "/About",
		},
		{
			id: 3,
			link: "/Services",
		},
		{
			id: 4,
			link: "/Projects",
		},
		{
			id: 5,
			link: "/Contact",
		},
	];
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

				<ul className="hidden md:flex">
					{links.map(({ id, link }) => (
						<li
							key={id}
							className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
						>
							<Link href={link}>{link}</Link>
						</li>
					))}
				</ul>

				<div
					onClick={() => setNav(!nav)}
					className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
				>
					{nav ? <FaTimes size={30} /> : <FaBars size={30} />}
				</div>

				{nav && (
					<ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
						{links.map(({ id, link }) => (
							<li
								key={id}
								className="px-4 cursor-pointer capitalize py-6 text-4xl"
							>
								<Link onClick={() => setNav(!nav)} href={link}>
									{link}
								</Link>
							</li>
						))}
					</ul>
				)}
				{/* <nav className="flex ">
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
				</nav> */}
			</header>
		</>
	);
}
