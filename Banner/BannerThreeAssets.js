import React from 'react';
import './Banner.scss'; // Import the stylesheet

const BannerThreeAssets = ({ block }) => {
  const background = 'yourBackground'; // Replace with actual data or fetch from API
  const assetBlock1 = {
    video_1: 'yourVideo1URL', // Replace with actual data or fetch from API
    image_1: 'yourImage1URL', // Replace with actual data or fetch from API
    asset_order_1: 'yourAssetOrder1', // Replace with actual data or fetch from API
    caption_1: 'Your Caption 1', // Replace with actual data or fetch from API
  };
  const assetBlock2 = {
    video_2: 'yourVideo2URL', // Replace with actual data or fetch from API
    image_2: 'yourImage2URL', // Replace with actual data or fetch from API
    asset_order_2: 'yourAssetOrder2', // Replace with actual data or fetch from API
    caption_2: 'Your Caption 2', // Replace with actual data or fetch from API
  };
  const assetBlock3 = {
    video_3: 'yourVideo3URL', // Replace with actual data or fetch from API
    image_3: 'yourImage3URL', // Replace with actual data or fetch from API
    asset_order_3: 'yourAssetOrder3', // Replace with actual data or fetch from API
    caption_3: 'Your Caption 3', // Replace with actual data or fetch from API
  };

  return (
    <section className={`block__d1_banner block__d1_banner__3assets site-ani-group site-padding bg-color-${background}`}>
      <div className="block__d1-banner__3assets__row site-align">
        <div className={`asset_block_col1 site-ani-auto site-ani__fade-in col-4 grid-span-12-mobile asset-order-${assetBlock1.asset_order_1}`}>
          <div className="asset_block_container">
            {assetBlock1.video_1 ? (
              <iframe title="video" width="100%" height="100%" src={assetBlock1.video_1} frameBorder="0" allowFullScreen></iframe>
            ) : (
              <img src={assetBlock1.image_1} alt="Asset Image" />
            )}
          </div>
          <p>{assetBlock1.caption_1}</p>
        </div>
        <div className={`asset_block_col2 site-ani-auto site-ani__fade-in col-5 grid-span-12-mobile asset-order-${assetBlock2.asset_order_2}`}>
          <div className="asset_block_container">
            {assetBlock2.video_2 ? (
              <iframe title="video" width="100%" height="100%" src={assetBlock2.video_2} frameBorder="0" allowFullScreen></iframe>
            ) : (
              <img src={assetBlock2.image_2} alt="Asset Image" />
            )}
          </div>
          <p>{assetBlock2.caption_2}</p>
        </div>
        <div className={`asset_block_col3 site-ani-auto site-ani__fade-in col-3 grid-span-12-mobile asset-order-${assetBlock3.asset_order_3}`}>
          <div className="asset_block_container">
            {assetBlock3.video_3 ? (
              <iframe title="video" width="100%" height="100%" src={assetBlock3.video_3} frameBorder="0" allowFullScreen></iframe>
            ) : (
              <img src={assetBlock3.image_3} alt="Asset Image" />
            )}
          </div>
          <p>{assetBlock3.caption_3}</p>
        </div>
      </div>
    </section>
  );
};

export default BannerThreeAssets;
