// MastheadLandingPagesBlock.js

import React from 'react';
import './MastheadLandingPage.scss';

const MastheadLandingPages = ({ block }) => {
  // Simulate data fetching from your API or use state/props
  const background = 'yourBackground';
  const alignment = 'yourAlignment';
  const illustration = {
    leaf_illustration: 'yourLeafIllustration',
    position: 'yourPosition',
  };

  const contentBlock = {
    script_heading: 'Your Script Heading',
    main_heading: 'Your Main Heading',
    content: 'Your Content',
    content_paragraph_position: 'right',
    primary_cta: {
      url: 'Your Primary CTA URL',
      label: 'Your Primary CTA Label',
    },
    secondary_cta: {
      url: 'Your Secondary CTA URL',
      label: 'Your Secondary CTA Label',
    },
    awards: {
      image_1: 'Your Award Image 1 URL',
      image_2: 'Your Award Image 2 URL',
      image_3: 'Your Award Image 3 URL',
      image_4: 'Your Award Image 4 URL',
    },
  };

  // Create the ID attribute for the block
  const id = `c2-masthead-landing-pages-${block.id}`;

  return (
    <section
      id={id}
      className={`block__c2-masthead-landing-pages site-ani-group padding-top-200 padding-bottom-50 padding-top-100-mobile bg-color-${background} bg-img-${illustration.leaf_illustration} bg-${illustration.position}`}
    >
      {contentBlock && (
        <div className="block__c2-masthead-landing-pages__row site-align">
          <div className="content_col_left site-ani-auto site-ani__slide-up col-5 grid-span-12-mobile">
            <h3 className="script-heading">{contentBlock.script_heading}</h3>
            <h1 className="main-heading">{contentBlock.main_heading}</h1>
          </div>
          <div
            className={`content_col_right site-ani-auto site-ani__slide-up col-5 ${
              contentBlock.content_paragraph_position === 'right'
                ? 'grid-start-7 padding-top-60-desktop padding-top-0-mobile'
                : 'grid-start-1 grid-row-2'
            } grid-span-12-mobile margin-0`}
          >
            <p>{contentBlock.content}</p>
            {(contentBlock.primary_cta.url || contentBlock.secondary_cta.url) && (
              <div className="cta_block">
                {contentBlock.primary_cta.url && (
                  <a href={contentBlock.primary_cta.url} className="site-button">
                    {contentBlock.primary_cta.label}
                  </a>
                )}
                {contentBlock.secondary_cta.url && (
                  <a href={contentBlock.secondary_cta.url} className="site-link">
                    {contentBlock.secondary_cta.label}
                  </a>
                )}
              </div>
            )}
            {(contentBlock.awards.image_1 || contentBlock.awards.image_2 || contentBlock.awards.image_3 || contentBlock.awards.image_4) && (
              <div className="margin-top-30 awards">
                {acfBlockGetImgTag(contentBlock.awards.image_1)}
                {acfBlockGetImgTag(contentBlock.awards.image_2)}
                {acfBlockGetImgTag(contentBlock.awards.image_3)}
                {acfBlockGetImgTag(contentBlock.awards.image_4)}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default MastheadLandingPages;