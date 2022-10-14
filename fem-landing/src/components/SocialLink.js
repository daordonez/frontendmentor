import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import "./SocialLink.css";

const SocialLink = ({ Name = "web", Link = "#" }) => {
  let icon;

  switch (Name) {
    case "linkedin":
      icon = <FontAwesomeIcon icon={faLinkedinIn} size={"xl"} />;
      break;
    case "github":
      icon = <FontAwesomeIcon icon={faGithubSquare} size={"xl"}/>;
      break;
    default:
      icon = <FontAwesomeIcon icon={faCompass} size={"xl"} />;
      break;
  }

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  let linkName = capitalizeFirstLetter(Name);

  return (
    <div className="link__container">
      <div className="link__icon">{icon}</div>
      <div className="link__description">
        <a href={Link} >{linkName}</a>
      </div>
    </div>
  );
};

export default SocialLink;
