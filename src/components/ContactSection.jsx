import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react'
import './ContactSection.css'

const ContactSection = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Create mailto link with form data
    const mailtoLink = `mailto:your.email@example.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`
    window.location.href = mailtoLink
  }

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Your City, Country',
      link: null
    }
  ]

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      color: '#333'
    },
    {
      icon: <Linkedin size={24} />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourprofile',
      color: '#0077b5'
    }
  ]

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>{t('contact.title')}</h2>
          <p>{t('contact.subtitle')}</p>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>{t('contact.letsConnect')}</h3>
            <p>
              {t('contact.description')}
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link}>{info.value}</a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <h4>{t('contact.followMe')}</h4>
              <div className="social-buttons">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-button"
                    style={{ '--social-color': social.color }}
                  >
                    {social.icon}
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>{t('contact.sendMessage')}</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">{t('contact.form.name')} *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">{t('contact.form.email')} *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">{t('contact.form.subject')} *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">{t('contact.form.message')} *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                <Send size={18} />
                {t('contact.form.send')}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
