import React from "react";
import { ButtonPrimary } from "./button-primary.js";

export function Jumbotron() {
	return (
		<div className="jumbotron row">
			<h1 className="display-4">A Warm Welcome!</h1>
			<p className="lead">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
				blandit dolor in tortor dictum vestibulum. Integer a odio
				suscipit, maximus sem in, maximus magna.
			</p>
			<p className="lead">
				<ButtonPrimary />
			</p>
		</div>
	);
}
