import React from "react";
import ClickToAction from "./ClickToAction";
import "./Header.css";

const Header: React.FC = () => (
	<header>
		<div className="container header-container">
			<ClickToAction />
		</div>
	</header>
);

export default Header;
