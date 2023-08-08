import React from "react";
import "./LinkButton.css";

interface Props {
  className?: string;
  url: string;
  content: string;
}

const LinkButton: React.FC<Props> = ({ className, url, content }) => {
  const buttonClassName = className ? `btn ${className}` : "btn";
  
  return (
    <a href={url} className={buttonClassName}>
      {content}
    </a>
  );
};

export default LinkButton;
