import React, { useEffect, useState } from "react";
import "./WhereWeOperate.css";
import { useLanguage } from "../context/LanguageContext";
import { client } from "../sanityClient";
import sampleMap from "../assets/sample-map.png"; // ← локальная картинка

export default function WhereWeOperate() {
  const { lang } = useLanguage();
  const [data, setData] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "whereWeOperate"][0]{
        title,
        subtitle,
        description,
        buttonText,
        countries,
        licenseFile {
          asset->{
            url
          }
        }
      }`)
      .then(setData);
  }, []);

  if (!data) return null;

  return (
    <section className="where" id="activity">
      <div className="where-container">
        <div className="title-line">
          <h2>{data.title?.[lang]}</h2>
          <div className="line" />
        </div>

        <div className="where-content">
          <div className="map-side">
            <img src={sampleMap} alt="electric map" /> {/* локальное изображение */}
            <div className="circle-btn-wrapper">
              <a href="#contacts" className="circle-btn">
            <span className="arrow">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.6577 0.5H13.1577V2.1875H24.6242L0.746094 26.0572L1.93578 27.2469L25.8139 3.37719V14H27.5014V1.34375C27.5014 1.11997 27.4125 0.905362 27.2543 0.747129C27.096 0.588895 26.8814 0.5 26.6577 0.5Z" fill="black"/>
              </svg>
            </span>
          </a>
            </div>
          </div>

          <div className="cards-side">
            <div className="card-operate">
              <h3>{data.subtitle?.[lang]}</h3>
              <p>{data.description?.[lang]}</p>
            </div>

            <div className="card-operate">
              <h3>Country Market Activity</h3>
              {data.countries?.map((country, i) => (
                <div className="entry" key={i}>
                  <span><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0654 15.7705C12.5232 18.2283 16.508 18.2283 18.9658 15.7705C21.4236 13.3127 21.4236 9.32789 18.9658 6.87012C16.508 4.41234 12.5232 4.41234 10.0654 6.87012C7.60765 9.32789 7.60765 13.3127 10.0654 15.7705Z" stroke="#FFCC00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5156 26.611V20.252" stroke="#FFCC00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 {country.name?.[lang]}</span>
                  <p>{country.description?.[lang]}</p>
                </div>
              ))}

              {data.licenseFile?.asset?.url && (
                <a
                  href={data.licenseFile.asset.url}
                  download
                  className="yellow-btn"
                >
                  {data.buttonText?.[lang] || "Download License"}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}