import React from 'react';
import "./Social.css";
import SocialLink from "./SocialLink";
const Social = () => {
  return (
    <div className='social__container'>
      <SocialLink Name={'linkedin'} />
      <SocialLink Name={'github'} />
      <SocialLink />
    </div>
  );
}
 
export default Social;