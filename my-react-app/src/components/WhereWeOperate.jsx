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
                <span className="arrow">↗</span>
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
                  <span>📍 {country.name?.[lang]}</span>
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