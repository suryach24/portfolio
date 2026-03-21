import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState({ submitted: false, success: false, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ submitted: true, success: true, message: 'Thank you! I will get back to you soon.' });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <p className="section-label">Contact</p>
        <h2 className="section-title">Get In Touch</h2>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <p className="contact-availability">
            Currently at <strong>InvoiceCloud</strong> · Open to senior SRE / Staff Engineer roles
          </p>
          <p>Hit me up if you want to connect, collaborate, or discuss an opportunity.</p>

          <div className="contact-methods">
            <div className="contact-method">
              <span className="method-icon">📧</span>
              <a href="mailto:sckukunuri2020@gmail.com">sckukunuri2020@gmail.com</a>
            </div>
            <div className="contact-method">
              <span className="method-icon">🔗</span>
              <a href="https://linkedin.com/in/suryach24" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/suryach24
              </a>
            </div>
            <div className="contact-method">
              <span className="method-icon">💻</span>
              <a href="https://github.com/suryach24" target="_blank" rel="noopener noreferrer">
                github.com/suryach24
              </a>
            </div>
            <div className="contact-method">
              <span className="method-icon">📄</span>
              <a href="/Surya_Chandra_Resume.pdf" download>
                Download Resume (PDF)
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            {formStatus.submitted && (
              <div className={`form-message ${formStatus.success ? 'success' : 'error'}`}>
                {formStatus.message}
              </div>
            )}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} required />
            </div>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
