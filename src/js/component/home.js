import React from "react";

//include images into your bundle
import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";
import { Footer } from "./footer.js";

//create your first component
export function Home() {
	let cards = [
		{
			imgURL: "../../img/rigo-baby.jpg",
			title: "Card Title 1",
			text:
				"Wisi forensibus mnesarchum in cum. Per id impetus abhorreant, his no magna definiebas, inani rationibus",
			buttonURL: "https://www.google.es/",
			buttonLabel: "Button 1",
			show: true
		},
		{
			imgURL: "../../img/rigo-baby.jpg",
			title: "Card Title 2",
			text:
				"Has maiorum habemus detraxit at. Timeam fabulas splendide et his. Facilisi aliquando sea ad, vel",
			buttonURL: "https://www.google.es/",
			buttonLabel: "Button 2",
			show: true
		},
		{
			imgURL: "../../img/rigo-baby.jpg",
			title: "Card Title 3",
			text:
				"Lorem salutandi eu mea, eam in soleat iriure assentior. Tamquam lobortis id qui. Ea sanctus",
			buttonURL: "https://www.google.es/",
			buttonLabel: "Button 3",
			show: false
		},
		{
			imgURL: "../../img/rigo-baby.jpg",
			title: "Card Title 4",
			text:
				"No his munere interesset. At soluta accusam gloriatur eos, ferri commodo sed id, ei tollit",
			buttonURL: "https://www.google.es/",
			buttonLabel: "Button 4",
			show: true
		}
	];

	let CardsHTML = cards.map((card, index) => {
		return (
			<Card
				key={index}
				cardImgURL={card.imgURL}
				cardTitle={card.title}
				cardText={card.text}
				cardButtonURL={card.buttonURL}
				cardButtonLabel={card.buttonLabel}
				cardShow={card.show}
			/>
		);
	});

	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="cards d-flex flex-row">{CardsHTML}</div>
			</div>
			<Footer />
		</div>
	);
}
