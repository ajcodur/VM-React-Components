import React from 'react';
import './Banner.scss'; // Import the stylesheet

const BannerTwoAssetTextCentered = ({ block }) => {
  const background = 'yourBackground'; // Replace with actual data or fetch from API
  const illustration = {
    leaf_illustration: 'yourLeafIllustration', // Replace with actual data or fetch from API
    position: 'yourPosition', // Replace with actual data or fetch from API
  };
  const leftAssetBlock = {
    video_1: 'yourVideo1URL', // Replace with actual data or fetch from API
    image_1: 'yourImage1URL', // Replace with actual data or fetch from API
    asset_order_1: 'yourAssetOrder1', // Replace with actual data or fetch from API
  };
  const contentBlock = {
    script_heading: 'Your Script Heading', // Replace with actual data or fetch from API
    main_heading: 'Your Main Heading', // Replace with actual data or fetch from API
    content: 'Your Content', // Replace with actual data or fetch from API
    primary_cta: { url: 'yourURL', label: 'Your Label' }, // Replace with actual data or fetch from API
    secondary_cta: { url: 'yourURL', label: 'Your Label' }, // Replace with actual data or fetch from API
  };
  const rightAssetBlock = {
    video_2: 'yourVideo2URL', // Replace with actual data or fetch from API
    image_2: 'yourImage2URL', // Replace with actual data or fetch from API
    asset_order_2: 'yourAssetOrder2', // Replace with actual data or fetch from API
  };

  return (
    <section className={`block__d1_banner block__d1_banner__2-assets-text-centered site-ani-group site-padding padding-bottom-100 bg-color-${background}`}>
      <div className="site-align container">
        <div className="block__d1_banner__2-assets-text-centered__row">
          <div className={`col-4 grid-span-12-mobile padding-left-50 padding-left-20-mobile asset-${leftAssetBlock.asset_order_1} bg-img-${illustration.leaf_illustration}-full bg-${illustration.position} bg-bottom-left`}>
            <div className="left_asset_block site-ani-auto site-ani__fade-in">
              {leftAssetBlock.video_1 ? (
                <iframe title="video" width="100%" height="100%" src={leftAssetBlock.video_1} frameBorder="0" allowFullScreen></iframe>
              ) : (
                <img src={leftAssetBlock.image_1} alt="Asset Image" />
              )}
            </div>
          </div>
          {contentBlock && (
            <div className="content_block site-ani-auto site-ani__slide-up col-4 grid-span-5-base grid-span-12-mobile grid-start-1-mobile has-text-align-center padding-top-50 padding-bottom-50 padding-top-60-mobile margin-top-30-mobile padding-bottom-30-mobile">
              <h3 className="script-heading">{contentBlock.script_heading}</h3>
              <h2 className="main-heading">{contentBlock.main_heading}</h2>
              <p className="margin-bottom-20 margin-bottom-15-mobile">{contentBlock.content}</p>
              <div className="cta_button">
                {contentBlock.primary_cta && (
                  <a href={contentBlock.primary_cta.url} className="site-button">{contentBlock.primary_cta.label}</a>
                )}
                {contentBlock.secondary_cta && (
                  <a href={contentBlock.secondary_cta.url} className="site-link">{contentBlock.secondary_cta.label}</a>
                )}
              </div>
            </div>
          )}
          <div className={`right_asset_block col-3 site-ani-auto site-ani__fade-in grid-start-10 grid-span-12-mobile asset-${rightAssetBlock.asset_order_2}`}>
            {rightAssetBlock.video_2 ? (
              <iframe title="video" width="100%" height="100%" src={rightAssetBlock.video_2} frameBorder="0" allowFullScreen></iframe>
            ) : (
              <img src={rightAssetBlock.image_2} alt="Asset Image" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerTwoAssetTextCentered;
