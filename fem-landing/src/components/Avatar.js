import React from "react";
import "./Avatar.css";
const Avatar = () => {
  return (
    <div className="avatar__container">
      <div class="avatar">
        <img
          class="avatar__image"
          alt="person"
          src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Prescription02&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=Hoodie&clotheColor=Blue03&eyeType=Happy&eyebrowType=DefaultNatural&mouthType=Twinkle&skinColor=Yellow"
        />
        <div className="avatar__username">
          <h3>Hi, I'm Diego</h3>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
