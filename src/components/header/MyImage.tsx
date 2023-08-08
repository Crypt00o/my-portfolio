import React from "react";
import image from "../../assets/my-image.png";


const MyImage: React.FC = () => (
	<div className="my-image">
		<img src={image} alt="my-image" />
	</div>
);


export default MyImage;


