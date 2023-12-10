export default function Footer() {
	return (
		<>
			<footer className="relative bg-slate-500  p-6">
				<div className="container mx-auto text-center">
					<div className="text-sm text-cyan-100  mb-4">
						As Computer Engineering graduate and aspiring full-stack Web
						Developer. Front-End focused web development by turning ideas into
						real life projects. <br /> I am looking forward and confident to be
						a full stack developer someday.
					</div>

					<div className="flex flex-col items-center">
						<div className="mt-4 flex justify-end">
							<a
								href="#"
								target="_blank"
								className="text-white hover:text-gray-400 mx-2"
							>
								<i className="fab fa-github">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										x="0px"
										y="0px"
										width="100"
										height="100"
										viewBox="0 0 40 40"
									>
										<path
											fill="#b6c9d6"
											d="M38.5,20c0,10.299-8.391,18.5-18.5,18.5C9.892,38.5,1.5,30.299,1.5,20S9.701,1.5,20,1.5 S38.5,9.701,38.5,20z"
										></path>
										<path
											fill="#fff"
											d="M33.171,19.24c0,2.306-1.191,5.51-3.148,7.102c-1.582,1.289-3.672,1.695-6.034,1.823 c0.888,0.539,1.479,1.515,1.479,2.629v7.636C23.979,38.8,22.429,39,20.832,39c-1.582,0-3.127-0.195-4.606-0.565v-5.017 c-0.642,0.2-1.484,0.318-2.568,0.262c-3.595-0.19-4.108-2.372-4.683-3.913c-0.58-1.541-2.378-1.736-2.121-2.372 c1.241-0.426,2.215-0.02,2.874,0.482c0.523,0.398,0.887,0.961,1.131,1.571c0.279,0.697,1.02,1.86,2.86,1.86 c1.299,0,2.069-0.303,2.511-0.601c0.026-1.089,0.621-2.033,1.494-2.552c-2.506-0.159-4.704-0.632-6.321-2.039 c-1.797-1.561-2.881-4.678-2.881-6.876c0-1.833,0.755-4.093,2.049-5.515c0.041-0.041,0.077-0.087,0.128-0.128 c-0.298-0.894-0.642-2.66,0.195-4.822c2.49-0.046,4.457,1.315,5.258,1.972c1.448-0.334,3.03-0.493,4.694-0.493 c1.705,0,3.333,0.149,4.806,0.493c0.801-0.657,2.773-2.018,5.258-1.967c0.873,2.249,0.467,4.072,0.164,4.925 C32.401,15.229,33.171,17.391,33.171,19.24z"
										></path>
										<path
											fill="#788b9c"
											d="M20,39C9.523,39,1,30.477,1,20C1,9.346,9.346,1,20,1s19,8.346,19,19C39,30.477,30.477,39,20,39z M20,2C9.907,2,2,9.907,2,20c0,9.925,8.075,18,18,18s18-8.075,18-18C38,9.907,30.093,2,20,2z"
										></path>
									</svg>
								</i>
							</a>
							<a
								href="#"
								target="_blank"
								className="text-white hover:text-gray-400 mx-2"
							>
								<i className="fab fa-linkedin"></i>
							</a>
							<a
								href="mailto:your.email@gmail.com"
								className="text-white hover:text-gray-400 mx-2"
							>
								<i className="far fa-envelope"></i>
							</a>
						</div>
					</div>
				</div>

				<div className="text-sm text-white late-800 mt-4 border-t border-gray-400 pt-4">
					&copy; {new Date().getFullYear()} CpeProg. All Rights Reserved.
				</div>
			</footer>
		</>
	);
}
