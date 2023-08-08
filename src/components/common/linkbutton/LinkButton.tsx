import React from "react";
import "./LinkButton.css";

interface Props {
  additionalClasses?: string;
  url: string;
  content: string;
}

const LinkButton: React.FC<Props> = ({ additionalClasses, url, content }) => {
  const buttonClassName = additionalClasses ? `btn ${additionalClasses}` : "btn";
  
  return (
    <a href={url} className={buttonClassName}>
      {content}
    </a>
  );
};

export default LinkButton;
