import React, { useState } from "react";
import { images } from "../../constant";
import "./contact.scss";

const contacts = [
  {
    name: "Instagram",
    icon: images.instagram,
    link: "https://www.instagram.com/deepakat1?igsh=MXJoemN1NzNqNW55bg%3D%3D&utm_source=qr",
  },
  {
    name: "Whatsapp",
    icon: images.whatsapp,
    link: "https://wa.me/+917667567283",
  },
  {
    name: "Telegram",
    icon: images.telegram,
    link: "https://t.me/deepakat1",
  }
];

const Contact = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(false);
    setIsFormSubmitted(true);
  };

  return (
    <div className="app__contact" id="contacts">
      <h2 className="head-text">
        <span>Chat </span>with me
      </h2>
      <div className="app__contact-cards">
        <a href="mailto:deepaktheartist9@gmail.com" className="p-text">
          <div className="app__contact-card">
            <img src={images.email} alt="email" />
            deepaktheartist9@gmail.com
          </div>
        </a>
        <a href="tel:+917667567283" className="p-text">
          <div className="app__contact-card">
            <img src={images.mobile} alt="mobile" />
            +917667567283
          </div>
        </a>
      </div>

      <div className="app__contact-container">
        <div className="app__contact-list">
          {contacts.map((contact) => (
            <div className="app__contact-item">
              <div className="contact">
                <a href={contact.link} target="_blank" rel="noreferrer">
                  <img src={contact.icon} alt={contact.name} />
                </a>
              </div>
              <p className="p-text">{contact.name}</p>
            </div>
          ))}
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__contact-form ">
          <div>
            <input
              className="p-text"
              type="text"
              name="name"
              placeholder="Your Name"
            />
          </div>
          <div>
            <input
              className="p-text"
              type="email"
              name="email"
              placeholder="Your Email"
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "Sending" : "Send Message"}
          </button>
        </div>
      ) : (
        <div className="thanks">
          <h3 className="head-text">Thank you for getting in touch</h3>
        </div>
      )}
      
    </div>
  );
};

export default Contact;
