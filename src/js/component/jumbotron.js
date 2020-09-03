import React from "react";
import { Button } from "./button.js";

export function Jumbotron() {
	return (
		<div className="jumbotron">
			<h1 className="display-4">A Warm Welcome!</h1>
			<p className="lead">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
				blandit dolor in tortor dictum vestibulum. Integer a odio
				suscipit, maximus sem in, maximus magna.
			</p>
			<p className="lead">
				<Button />
			</p>
		</div>
	);
}
