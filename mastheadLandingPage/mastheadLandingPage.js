// YourReactComponent.js

import React from "react";
import "./mastheadLandingPage.scss"; // Import the stylesheet

const mastheadLandingPage = () => {
  // Simulating the data fetch you would typically do in a React component
  const data = {
    background: "yourBackground", // Replace with actual data fetching logic
    alignment: "yourAlignment",
    illustration: {
      leaf_illustration: "yourLeafIllustration", // Replace with actual data fetching logic
      position: "yourPosition", // Replace with actual data fetching logic
    },
    content_block: {
      script_heading: "Your Script Heading", // Replace with actual data fetching logic
      main_heading: "Your Main Heading", // Replace with actual data fetching logic
      content: "Your Content", // Replace with actual data fetching logic
      content_paragraph_position: "right", // Replace with actual data fetching logic
      primary_cta: {
        url: "Your Primary CTA URL", // Replace with actual data fetching logic
        label: "Your Primary CTA Label", // Replace with actual data fetching logic
      },
      secondary_cta: {
        url: "Your Secondary CTA URL", // Replace with actual data fetching logic
        label: "Your Secondary CTA Label", // Replace with actual data fetching logic
      },
      awards: {
        image_1: "Your Award Image 1 URL", // Replace with actual data fetching logic
        image_2: "Your Award Image 2 URL", // Replace with actual data fetching logic
        image_3: "Your Award Image 3 URL", // Replace with actual data fetching logic
        image_4: "Your Award Image 4 URL", // Replace with actual data fetching logic
      },
    },
  };

  const id = `c2-masthead-landing-pages-123`; // Replace with actual ID logic

  return (
    <section
      id={id}
      className={`block__c2-masthead-landing-pages site-ani-group padding-top-200 padding-bottom-50 padding-top-100-mobile bg-color-${data.background} bg-img-${data.illustration.leaf_illustration} bg-${data.illustration.position}`}
    >
      {data.content_block && (
        <div className="block__c2-masthead-landing-pages__row site-align">
          <div className="content_col_left site-ani-auto site-ani__slide-up col-5 grid-span-12-mobile">
            <h3 className="script-heading">
              {data.content_block.script_heading}
            </h3>
            <h1 className="main-heading">{data.content_block.main_heading}</h1>
          </div>
          <div
            className={`content_col_right site-ani-auto site-ani__slide-up col-5 ${
              data.content_block.content_paragraph_position === "right"
                ? "grid-start-7 padding-top-60-desktop padding-top-0-mobile"
                : "grid-start-1 grid-row-2"
            } grid-span-12-mobile margin-0`}
          >
            <p>{data.content_block.content}</p>
            {(!empty(data.content_block.primary_cta.url) ||
              !empty(data.content_block.secondary_cta.url)) && (
              <div className="cta_block">
                {!empty(data.content_block.primary_cta.url) && (
                  <a
                    href={data.content_block.primary_cta.url}
                    className="site-button"
                  >
                    {data.content_block.primary_cta.label}
                  </a>
                )}
                {!empty(data.content_block.secondary_cta.url) && (
                  <a
                    href={data.content_block.secondary_cta.url}
                    className="site-link"
                  >
                    {data.content_block.secondary_cta.label}
                  </a>
                )}
              </div>
            )}
            {!empty(data.content_block.awards.image_1) && (
              <div className="margin-top-30 awards">
                {acf_block_get_img_tag(data.content_block.awards.image_1)}
                {acf_block_get_img_tag(data.content_block.awards.image_2)}
                {acf_block_get_img_tag(data.content_block.awards.image_3)}
                {acf_block_get_img_tag(data.content_block.awards.image_4)}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default mastheadLandingPage;
