import React, { useEffect, useState } from 'react';
import './EnergySection.css';
import { useLanguage } from '../context/LanguageContext';
import { client } from '../sanityClient';
import emailjs from 'emailjs-com';

import worker from '../assets/engineer.png';

export default function EnergySection() {
  const { lang } = useLanguage();
  const [data, setData] = useState(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    client
      .fetch(`*[_type == "energySection"][0]{
        title1, title2, description,
        formTitle, submitText, licenseText,
        linkedinUrl, formPlaceholders,
        backgroundImage{ asset->{url} },
        formRecipientEmail
      }`)
      .then(setData);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      'your_service_id',
      'your_template_id',
      {
        to_email: data.formRecipientEmail,
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        message: form.message,
      },
      'your_public_key'
    )
    .then(() => {
      alert('Message sent!');
      setForm({ name: '', email: '', phone: '', message: '' });
    })
    .catch((err) => {
      console.error('EmailJS Error:', err);
      alert('Failed to send. Try again later.');
    });
  };

  if (!data) return null;

  return (
    <section
      className="energy"
      id="contacts"
      style={{
        backgroundImage: data.backgroundImage
          ? `url(${data.backgroundImage.asset.url})`
          : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="energy-container">
        <div className="energy-text">
          <h2>
            {data.title1?.[lang]} <br /> {data.title2?.[lang]}
          </h2>
          <p>{data.description?.[lang]}</p>
          <div className="energy-links">
            {data.linkedinUrl && (
              <a href={data.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>
            )}
            <a href="/files/Reperfectatã la data de - 25.02.2025.pdf" download>
              {data.licenseText?.[lang]}
            </a>
          </div>
        </div>

        <div className="energy-form-container">
          <form className="energy-form" onSubmit={sendEmail}>
            <h3>{data.formTitle?.[lang]}</h3>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={data.formPlaceholders?.name?.[lang] || 'Name'}
              required
            />
            <div className="input-row">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={data.formPlaceholders?.email?.[lang] || 'Email'}
                required
              />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder={data.formPlaceholders?.phone?.[lang] || 'Phone'}
              />
            </div>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={data.formPlaceholders?.message?.[lang] || 'Message'}
              required
            />
            <button type="submit">{data.submitText?.[lang]}</button>
          </form>

          <div className="energy-image">
            <img src={worker} alt="Worker" />
          </div>
        </div>
      </div>
    </section>
  );
}