import React from "react";

export function Navbar() {
	return (
		<div className="navbar mt-5">
			<nav className="navbar text-white navbar-dark bg-dark fixed-top navbar-expand-md">
				<div className="container">
					<a className="navbar-brand" href="#">
						Start Bootstrap
					</a>
					{/*  https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_navbar_right&stacked=h */}
					<ul className="nav navbar-nav navbar-right">
						<li className="nav-item mr-2 active">
							<a className="nav-link active" href="#">
								Home
							</a>
						</li>
						<li className="nav-item mr-2">
							<a className="nav-link" href="#">
								About
							</a>
						</li>
						<li className="nav-item mr-2">
							<a className="nav-link" href="#">
								Services
							</a>
						</li>
						<li className="nav-item mr-2">
							<a className="nav-link" href="#">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
