import React from 'react';
import './Contact.css'; // Import your CSS file for styling

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact</h2>
      <p>
        I'd love to hear from you! Feel free to reach out through the following channels:
      </p>

      <div className="contact-method">
        <strong>Email:</strong> sankalpvk18@gmail.com
      </div>

      <div className="contact-method">
        <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sankalpvk18" target="_blank" rel="noopener noreferrer">linkedin.com/in/sankalpvk18</a>
      </div>

      <div className="contact-method">
        <strong>GitHub:</strong> <a href="https://github.com/sankalpvk18" target="_blank" rel="noopener noreferrer">github.com/sankalpvk18</a>
      </div>

      <p>
        Looking forward to connecting with you!
      </p>
    </div>
  );
};

export default Contact;
