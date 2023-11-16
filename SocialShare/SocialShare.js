import React, { useState } from 'react';
import './SocialShare.css'; // Import the stylesheet

const SocialShare = ({ block }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const heading = 'Your Heading'; // Replace with actual data or fetch from API

  const handleCopyLink = () => {
    // Implement copy to clipboard logic here
    setTooltipVisible(true);
    setTimeout(() => {
      setTooltipVisible(false);
    }, 2000);
  };

  return (
    <section className={`block__social-share site-ani-group padding-top-30 padding-bottom-30 site-align`}>
      <div className="social-share">
        <p className="category-heading">{heading}</p>
        <button className="share-button facebook" data-action="facebook"></button>
        <button className="share-button pinterest" data-action="pinterest"></button>
        <button className="copy-link-button" onClick={handleCopyLink}></button>
        {tooltipVisible && <div className="tooltip">Link copied to clipboard</div>}
      </div>
    </section>
  );
};

export default SocialShare;
