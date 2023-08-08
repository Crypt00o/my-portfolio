import React from "react";
import cv from "../../assets/cv.pdf";
import LinkButton from "../common/linkbutton/LinkButton";

const ClickToAction: React.FC = () => (
	<div className="cta">
		<LinkButton url={cv} content="Download CV" />
		<LinkButton url="#contact" additionalClasses="btn-primary" content="Let,s Talk" />
	</div>
);

export default ClickToAction;
