import React from 'react';
import './FooterMap.css';

export default function FooterMap() {
  return (
    <div className="map-container">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2724.0900347903334!2d28.83787911560046!3d47.01225683527595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97e5a8aa160d3%3A0x55262ae4c7e7c5c!2sstr.%20Bucure%C8%99ti%2076%2C%20Chi%C8%99in%C4%83u%2C%20Moldova!5e0!3m2!1sen!2s!4v1657644848910!5m2!1sen!2s"
        width="100%"
        height="570"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}


