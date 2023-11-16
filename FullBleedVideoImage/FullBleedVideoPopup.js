import React from 'react';
import './FullBleedVideoImage.scss'; // Import the stylesheet

const FullBleedVideoPopup = ({ block }) => {
  const assetBlock = {
    video_url: 'yourVideoURL', // Replace with actual video data or fetch from API
    image: 'yourImageURL', // Replace with actual image data or fetch from API
    popup_video_url: 'yourPopupVideoURL', // Replace with actual popup video data or fetch from API
  };

  const contentBlock = {
    script_heading: 'Your Script Heading', // Replace with actual data or fetch from API
    main_heading: 'Your Main Heading', // Replace with actual data or fetch from API
    content: 'Your Content', // Replace with actual data or fetch from API
    button_text: 'Watch Video', // Replace with actual data or fetch from API
  };

  return (
    <section className={`block__a7-fullbleed-vid-img bg-bottom-left display-flex items-center site-ani-group justify-center ${contentBlock.main_heading || contentBlock.script_heading ? 'has__overlay' : ''}`}>
      {assetBlock.video_url || assetBlock.image ? (
        <div className="asset_container">
          {assetBlock.video_url ? (
            <div id="video-container" className="video-background" data-youtube={assetBlock.video_url}>
              {/* Video iframe will be inserted here */}
            </div>
          ) : (
            <img src={assetBlock.image} alt="Asset Image" />
          )}
        </div>
      ) : null}

      {(contentBlock.main_heading || contentBlock.script_heading) && (
        <div className="content_block site-ani-auto site-ani__slide-up padding-100-tablet padding-30-mobile padding-top-100-mobile padding-bottom-100-mobile width-600">
          <h3 className="script-heading">{contentBlock.script_heading}</h3>
          {contentBlock.main_heading && <h2 className="main-heading">{contentBlock.main_heading}</h2>}
          <p>{contentBlock.content}</p>
          <button id="openPopup" className="watch-video-btn">
            {contentBlock.button_text}
          </button>
          <div id="videoPopup" style={{ display: 'none' }} data-youtube-popup={assetBlock.popup_video_url}>
            <span id="closePopup"></span>
            {/* YouTube embed code goes here */}
          </div>
        </div>
      )}
    </section>
  );
};

export default FullBleedVideoPopup;
