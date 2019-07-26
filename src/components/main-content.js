import React from "react";

import TextContent from "./text-content";

import ArticlePic from "../../static/assets/banners/quip.jpg";
import square1 from "../../static/assets/backgrounds/eventbrite.jpg";
import square2 from "../../static/assets/backgrounds/ministry-safe.jpg";
import logo1 from "../../static/assets/icons/facebook.png";
import logo2 from "../../static/assets/icons/instagram.png";
import logo3 from "../../static/assets/icons/twitter.png";
import logo4 from "../../static/assets/icons/whatsapp.png";

export default function() {
  return (
    <div>
      <div className="main-content-wrapper">
        <div className="header-wrapper">
          <div className="article-pic">
            <img src={ArticlePic} />
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
              <img src={square1} />
            </div>
          </div>
          <div className="second-column">
            <div className="squares-pic">
              <img src={square2} />
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
              <img src={logo1} />
              <img src={logo2} />
              <img src={logo3} />
              <img src={logo4} />
            </div>
          </div>
        </div>
        <div> Copyright 2019 of Toothbrushing.LLC</div>
      </div>
    </div>
  );
}
