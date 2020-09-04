import React from "react";
import PropTypes from "prop-types";
import { ButtonPrimary } from "../button-primary.js";
import rigoImage from "../../../img/rigo-baby.jpg";

export function Card(props) {
	//console.log(props.cardImgURL);
	//let lol = props.cardImgURL;
	//const logo = require(props.cardImgURL); // with require

	if (props.cardShow === true) {
		return (
			<div className="card col-3 p-1">
				<img
					className="card-img-top"
					src={rigoImage}
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">{props.cardTitle}</h5>
					<p className="card-text">{props.cardText}</p>
					<ButtonPrimary
						buttonLabel={props.cardButtonLabel}
						buttonURL={props.cardButtonURL}
					/>
				</div>
			</div>
		);
	} else {
		return null;
	}
}

Card.propTypes = {
	cardImgURL: PropTypes.string,
	cardTitle: PropTypes.string,
	cardText: PropTypes.string,
	cardButtonURL: PropTypes.string,
	cardButtonLabel: PropTypes.string,
	cardShow: PropTypes.bool
};
