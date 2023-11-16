// MastHeadHome.js

import React from 'react';
import './MastHeadHome.scss';

const MastHeadHome = ({ block }) => {
  // Simulate data fetching from your API or use state/props
  const contentBlock = {
    script_heading: 'Your Script Heading',
    main_heading: 'Your Main Heading',
    content: 'Your Content',
    primary_cta: {
      url: 'Your Primary CTA URL',
      label: 'Your Primary CTA Label',
    },
  };

  const video = 'yourVideo'; // Replace with actual video data or URL
  const wineImage = 'yourWineImage'; // Replace with actual image data or URL

  // Create the ID attribute for the block
  const id = `masthead-home-${block.id}`;

  return (
    <section className={`block__masthead-home padding-top-100 padding-top-0-mobile site-ani-group`} id={id}>
      <div className="video_wrapper">
        <div className="video_container">{/* Render video component or embed video directly */}</div>
        <div className="wine-bottle site-ani-auto site-ani__fade-in">
          {/* Render wine image component or embed image directly */}
        </div>
      </div>
      <div className="block__masthead-home__container site-align home__container__row flex-direction-column">
        <div className="content_block padding-top-80 padding-bottom-40 padding-top-20-mobile col-4 grid-span-12-mobile site-ani-auto site-ani__slide-up">
          <h3 className="script-heading">{contentBlock.script_heading}</h3>
          <h1 className="main-heading">{contentBlock.main_heading}</h1>
          <p>{contentBlock.content}</p>
          {contentBlock.primary_cta.url && (
            <a href={contentBlock.primary_cta.url} className="site-link">
              {contentBlock.primary_cta.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default MastHeadHome;
