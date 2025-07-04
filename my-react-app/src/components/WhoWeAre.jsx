import React from "react";
import "./WhoWeAre.css";
import { useLanguage } from "../context/LanguageContext";
import sample1 from "../assets/sample1.png";
import sample2 from "../assets/sample2.png";
import FadeInOnView from "../components/FadeInOnView";

export default function WhoWeAre() {
  const { t } = useLanguage();

  return (
    <section className="who" id="about">
      <div className="who-container">
        <div className="title-line">
          <div className="line" />
          <FadeInOnView>
            <h2>{t.whowetitle}</h2>
          </FadeInOnView>
        </div>

        <div className="who-grid">
          <div className="who-img">
            <FadeInOnView>
              <img src={sample1} alt="Tower" />
            </FadeInOnView>
          </div>

          <div className="who-text">
            <FadeInOnView>
              <h3>{t.whowesubtitle}</h3>
            </FadeInOnView>
            <FadeInOnView delay={0.2}>
              <p>{t.whowep1}</p>
              <p>{t.whowep2}</p>
              <p>{t.whowep3}</p>
            </FadeInOnView>
          </div>

          <div className="who-arrow">
            <a href="#contacts" className="circle-btn">
              <span className="arrow">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.6577 0.5H13.1577V2.1875H24.6242L0.746094 26.0572L1.93578 27.2469L25.8139 3.37719V14H27.5014V1.34375C27.5014 1.11997 27.4125 0.905362 27.2543 0.747129C27.096 0.588895 26.8814 0.5 26.6577 0.5Z"
                    fill="black"
                  />
                </svg>
              </span>
            </a>
          </div>

          <div className="who-extra-img">
            <FadeInOnView delay={0.4}>
              <img src={sample2} alt="People" />
            </FadeInOnView>
          </div>
        </div>
      </div>
    </section>
  );
}