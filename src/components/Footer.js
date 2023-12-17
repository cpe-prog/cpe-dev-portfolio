import { GithubIcon, GmailIcon, LinkedinIcon } from "./icons";
function Menu(e) {
	let list = document.querySelector("ul");
	e.name === "menu"
		? ((e.name = "close"),
		  list.classList.add("top-[80px]"),
		  list.classList.add("opacity-100"))
		: ((e.name = "menu"),
		  list.classList.remove("top-[80px]"),
		  list.classList.remove("opacity-100"));
}
export default function Footer() {
	return (
		<>
			<footer className="relative">
				<div className="text-sm grid grid-cols-1 lg:grid-cols-2 items-center justify-center border-t border-gray-400 p-6">
					<div className="flex  justify-center">
						&copy; {new Date().getFullYear()} CpeProg. All Rights Reserved.
					</div>
					<div className="flex items-center justify-center ">
						<a
							href="https://github.com/cpe-prog"
							target="_blank"
							className="text-white items-center hover:text-gray-400 mx-2"
						>
							<GithubIcon />
						</a>
						<a
							href="https://www.linkedin.com/in/grian-gajila/"
							target="_blank"
							className="text-white hover:text-gray-400 mx-2"
						>
							<LinkedinIcon />
						</a>
						<a
							href="cpedev2@gmail.com"
							className="text-white hover:text-gray-400 mx-2"
						>
							<GmailIcon />
						</a>
					</div>
				</div>
			</footer>
		</>
	);
}
