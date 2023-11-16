import React from 'react';
import './Banner.scss'; // Import the stylesheet

const BannerTwoAsset = ({ block }) => {
  const background = 'yourBackground'; // Replace with actual data or fetch from API
  const alignment = 'yourAlignment'; // Replace with actual data or fetch from API
  const illustration = {
    leaf_illustration: 'yourLeafIllustration', // Replace with actual data or fetch from API
    position1: 'yourPosition1', // Replace with actual data or fetch from API
  };
  const assetBlock1 = {
    video_1: 'yourVideo1URL', // Replace with actual data or fetch from API
    image_1: 'yourImage1URL', // Replace with actual data or fetch from API
  };
  const contentBlock = {
    script_heading: 'Your Script Heading', // Replace with actual data or fetch from API
    main_heading: 'Your Main Heading', // Replace with actual data or fetch from API
    content_block_1: {
      content_title: 'Your Content Title 1', // Replace with actual data or fetch from API
      content: 'Your Content 1', // Replace with actual data or fetch from API
    },
    content_block_2: {
      content_title: 'Your Content Title 2', // Replace with actual data or fetch from API
      content: 'Your Content 2', // Replace with actual data or fetch from API
    },
    primary_cta: { url: 'yourURL', label: 'Your Label' }, // Replace with actual data or fetch from API
  };

  const assetBlockAlign = alignment === 'image-left' ? 'order-1-mobile' : 'order-2 grid-start-7 order-1-mobile';
  const contentBlockAlign = alignment === 'image-left' ? 'grid-start-8 order-2-mobile' : 'grid-start-1 order-1 order-2-mobile';

  return (
    <section className={`block__d1_banner site-ani-group block__d1_banner__1-asset-2col site-padding site-padding__desktop bg-color-${background} bg-img-${illustration.leaf_illustration} bg-${illustration.position1}`}>
      <div className="block__d1-banner-1-asset__row site-align-desktop">
        <div className={`asset_block_main col-5 grid-span-12-mobile ${assetBlockAlign}`}>
          <div className="asset_block_full_col site-ani-auto site-ani__fade-in">
            {assetBlock1.video_1 ? (
              <iframe title="video" width="100%" height="100%" src={assetBlock1.video_1} frameBorder="0" allowFullScreen></iframe>
            ) : (
              <img src={assetBlock1.image_1} alt="Asset Image" />
            )}
          </div>
        </div>
        {contentBlock && (
          <div className={`content_block site-ani-auto site-ani__slide-up col-6 margin-0 grid-span-12-mobile grid-start-1-mobile padding-top-50 padding-bottom-50-desktop padding-top-40-mobile padding-bottom-30-mobile site-align-mobile ${contentBlockAlign}`}>
            <h3 className="script-heading">{contentBlock.script_heading}</h3>
            <h2 className="main-heading">{contentBlock.main_heading}</h2>
            <div className="display-flex flex-direction-column-mobile padding-top-20 padding-top-10-mobile content_cols">
              <div>
                <h6>{contentBlock.content_block_1.content_title}</h6>
                <p>{contentBlock.content_block_1.content}</p>
              </div>
              <div>
                <h6>{contentBlock.content_block_2.content_title}</h6>
                <p>{contentBlock.content_block_2.content}</p>
              </div>
            </div>
            <div>
              {contentBlock.primary_cta && (
                <a href={contentBlock.primary_cta.url} className="site-button">{contentBlock.primary_cta.label}</a>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BannerTwoAsset;
