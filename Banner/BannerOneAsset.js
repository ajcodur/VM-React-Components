import React from 'react';
import './Banner.scss'; // Import the stylesheet

const D1BannerOneAssetBlock = ({ block }) => {
  const background = 'yourBackground'; // Replace with actual data or fetch from API
  const alignment = 'yourAlignment'; // Replace with actual data or fetch from API
  const assetBlock1 = {
    video_1: 'yourVideo1URL', // Replace with actual data or fetch from API
    image_1: 'yourImage1URL', // Replace with actual data or fetch from API
  };
  const contentBlock = {
    script_heading: 'Your Script Heading', // Replace with actual data or fetch from API
    main_heading: 'Your Main Heading', // Replace with actual data or fetch from API
    notes_type: 'tasting-notes', // Replace with actual data or fetch from API
    tasting_notes: [
      { tasting_note: { value: '1', label: 'Note 1' } },
      { tasting_note: { value: '2', label: 'Note 2' } },
      // Add more tasting notes as needed
    ],
    varietal_notes: [
      { varietal_note: { value: '1', label: 'Varietal Note 1' } },
      { varietal_note: { value: '2', label: 'Varietal Note 2' } },
      // Add more varietal notes as needed
    ],
    content: 'Your Content', // Replace with actual data or fetch from API
    primary_cta: { url: 'yourURL', label: 'Your Label' }, // Replace with actual data or fetch from API
  };

  const assetBlockAlign = alignment === 'image-left' ? 'order-1-mobile' : 'order-2 grid-start-7 order-1-mobile';
  const contentBlockAlign = alignment === 'image-left' ? 'grid-start-8 order-2-mobile' : 'grid-start-1 order-1 order-2-mobile';

  return (
    <section className={`block__d1_banner block__d1_banner-1-asset site-padding site-padding__desktop site-ani-group bg-color-${background}`}>
      <div className="block__d1-banner-1-asset__row site-align-desktop">
        <div className={`asset_block_main site-ani-auto site-ani__fade-in col-6 grid-span-12-mobile ${assetBlockAlign}`}>
          <div className="asset_block_full_col">
            {assetBlock1.video_1 ? (
              <iframe title="video" width="100%" height="100%" src={assetBlock1.video_1} frameBorder="0" allowFullScreen></iframe>
            ) : (
              <img src={assetBlock1.image_1} alt="Asset Image" />
            )}
          </div>
        </div>
        {contentBlock && (
          <div className={`content_block site-ani-auto site-ani__slide-up col-5 margin-0 grid-span-12-mobile ${contentBlockAlign}`}>
            <h3 className="script-heading">{contentBlock.script_heading}</h3>
            {contentBlock.main_heading && <h2 className="main-heading">{contentBlock.main_heading}</h2>}
            {contentBlock.notes_type === 'tasting-notes' ? (
              <ul className="padding-top-20 notes">
                {contentBlock.tasting_notes.map((tastingNote, index) => (
                  <li key={index} className={`note-${tastingNote.tasting_note.value}`}>{tastingNote.tasting_note.label}</li>
                ))}
              </ul>
            ) : contentBlock.notes_type === 'varietal-notes' ? (
              <ul className="padding-top-20 notes">
                {contentBlock.varietal_notes.map((varietalNote, index) => (
                  <li key={index} className={`note-${varietalNote.varietal_note.value}`}>{varietalNote.varietal_note.label}</li>
                ))}
              </ul>
            ) : null}
            <p className="margin-bottom-20 margin-bottom-15-mobile">{contentBlock.content}</p>
            {contentBlock.primary_cta && (
              <div className="cta_button">
                <a href={contentBlock.primary_cta.url} className="site-button">{contentBlock.primary_cta.label}</a>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default D1BannerOneAssetBlock;
