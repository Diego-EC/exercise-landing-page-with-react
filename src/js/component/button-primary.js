import React from "react";
import PropTypes from "prop-types";

export function ButtonPrimary(props) {
	return (
		<button className="border-0 px-0">
			<a
				href={props.buttonURL}
				className="btn btn-primary"
				target="_blank"
				rel="noopener noreferrer">
				{props.buttonLabel}
			</a>
		</button>
	);
}

ButtonPrimary.propTypes = {
	buttonURL: PropTypes.string,
	buttonLabel: PropTypes.string
};

ButtonPrimary.defaultProps = {
	buttonURL: "#",
	buttonLabel: "Call to action!"
};
