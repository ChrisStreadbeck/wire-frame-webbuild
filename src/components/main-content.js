import React from "react";

import TextContent from "./text-content";

export default function() {
  return (
    <div>
      <div className="main-content-wrapper">
        <div className="header-wrapper">
          <div className="article-pic">
            <img src="/assets/banners/quip.jpg" />
          </div>
          <h1>New Research: Brushing Helps Teeth!</h1>
          <h3>...not actually new research.</h3>
        </div>

        <div className="opening-text">
          <TextContent />
        </div>

        <div className="squares-wrapper">
          <div className="first-column">
            <div className="squares-text">
              <TextContent />
            </div>
            <div className="squares-pic">
              <img src="/assets/backgrounds/eventbrite.jpg" />
            </div>
          </div>
          <div className="second-column">
            <div className="squares-pic">
              <img src="/assets/backgrounds/ministry-safe.jpg" />
            </div>

            <div className="squares-text">
              <TextContent />
            </div>
          </div>
        </div>
        <button className="btn" type="submit">
          Back to Top
        </button>
        <div className="main-content-bottom-wrapper">
          <div className="social-media-wrapper">
            <div>
              <img src="/assets/icons/facebook.png" />
              <img src="/assets/icons/instagram.png" />
              <img src="/assets/icons/twitter.png" />
              <img src="/assets/icons/whatsapp.png" />
            </div>
          </div>
        </div>
        <div> Copyright 2019 of Toothbrushing.LLC</div>
      </div>
    </div>
  );
}
