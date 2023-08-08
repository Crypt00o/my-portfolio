import React from "react";
import IntroText from "./IntroText";
import ClickToAction from "./ClickToAction";
import MySocialAccounts from "./MySocialAccounts";
import MyImage from "./MyImage";
import "./Header.css";

const Header: React.FC = () => (
	<header>
		<div className="container header-container">
			<IntroText />
			<ClickToAction />
			<MySocialAccounts />
			<MyImage />
			<a href="#contact" className="scroll-down"> Scroll Down</a>
		</div>
	</header>
);

export default Header;
