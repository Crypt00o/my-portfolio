import React from "react";
import IntroText from "./IntroText";
import ClickToAction from "./ClickToAction";
import "./Header.css";

const Header: React.FC = () => (
	<header>
		<div className="container header-container">
			<IntroText />
			<ClickToAction />
		</div>
	</header>
);

export default Header;
