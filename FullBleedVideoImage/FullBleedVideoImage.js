// FullBleedVideoImage.js

import React from 'react';
import './FullBleedVideoImageBlock.css';

const FullBleedVideoImage = ({ illustration, assetBlock, contentBlock, blockID }) => {
  const id = `a7-fullbleed-vid-img-${blockID}`;

  return (
    <section
      id={id}
      className={`block__a7-fullbleed-vid-img bg-bottom-left display-flex items-center site-ani-group justify-center bg-img-${illustration} ${
        !!(contentBlock.main_heading || contentBlock.script_heading) ? 'has__overlay' : ''
      }`}
    >
      {assetBlock.video_url || assetBlock.image ? (
        <div className="asset_container">
          {assetBlock.video_url ? (
            <div id="video-container" className="video-background" data-youtube={assetBlock.video_url}>
              {/* Video iframe will be inserted here */}
            </div>
          ) : (
            acfBlockGetImgTag(assetBlock.image)
          )}
        </div>
      ) : null}
      {contentBlock.main_heading || contentBlock.script_heading ? (
        <div
          className={`content_block site-ani-auto site-ani__slide-up padding-100-tablet padding-30-mobile padding-top-100-mobile padding-bottom-100-mobile ${
            contentBlock.main_heading ? 'width-600' : 'width-800'
          }`}
        >
          {contentBlock.script_heading && <h3 className="script-heading">{contentBlock.script_heading}</h3>}
          {contentBlock.main_heading && <h2 className="main-heading">{contentBlock.main_heading}</h2>}
          <p>{contentBlock.content}</p>
          {contentBlock.button?.url && (
            <a href={contentBlock.button.url} className="site-button">
              {contentBlock.button.label}
            </a>
          )}
        </div>
      ) : null}
    </section>
  );
};

export default FullBleedVideoImage;
