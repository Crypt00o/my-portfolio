import React from "react";
import { GrLinkedin, GrTwitter, GrGithub, } from "react-icons/gr";
import { ImWhatsapp } from "react-icons/im";

const MySocialAccounts: React.FC = () => {
	const [openMode,iconSize] = ["_blink",20];
	const [linkedinUrl,twitterUrl,whatsappUrl,githubUrl] = ["https://www.linkedin.com/in/eslam-mohamed-moawed","https://twitter.com/0xCrypt00o","https://wa.me/+201095456354","https://github.com/Crypt00o"];
	return (
		<div className="my-social-accounts">
			<a href={linkedinUrl} target={openMode} > <GrLinkedin size={iconSize} /> </a>
			<a href={twitterUrl} target={openMode} > <GrTwitter size={iconSize} /> </a>
			<a href={whatsappUrl} target={openMode} > <ImWhatsapp size={iconSize} /> </a>
			<a href={githubUrl} target={openMode} >  <GrGithub size={iconSize} /> </a>
		</div>
	);
};

export default MySocialAccounts;
