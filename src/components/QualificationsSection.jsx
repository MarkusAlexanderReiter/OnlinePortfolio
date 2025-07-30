import React from 'react'
import { motion } from 'framer-motion'
import { Award, Calendar, MapPin, Building } from 'lucide-react'
import './QualificationsSection.css'

const QualificationsSection = () => {
  const qualifications = [
    {
      title: 'WIFI Network Admin Certificate',
      issuer: 'Certification Authority',
      date: '2023',
      type: 'certification',
      description: 'Advanced wireless network administration and security'
    },
    {
      title: 'CompTIA Network+ (In Progress)',
      issuer: 'CompTIA',
      date: '2024',
      type: 'certification',
      description: 'Comprehensive networking fundamentals and troubleshooting'
    }
  ]

  const workHistory = [
    {
      title: 'Network & System Administrator',
      company: 'Multi-Location Company',
      location: 'Three Locations',
      period: '2021 - Present',
      type: 'work',
      responsibilities: [
        'Sole administrator for network infrastructure across three mid-sized locations',
        'Implemented and maintained server virtualization environments',
        'Designed and deployed security protocols and monitoring systems',
        'Managed user accounts, permissions, and IT asset lifecycle'
      ]
    },
    {
      title: 'IT Support Specialist',
      company: 'Previous Company',
      location: 'Local Area',
      period: '2019 - 2021',
      type: 'work',
      responsibilities: [
        'Provided technical support for 100+ users across multiple departments',
        'Troubleshot hardware and software issues',
        'Assisted with network maintenance and upgrades',
        'Documented processes and created user training materials'
      ]
    },
    {
      title: 'Tech Support Representative',
      company: 'Entry-Level Position',
      location: 'Local Area',
      period: '2018 - 2019',
      type: 'work',
      responsibilities: [
        'Started IT career providing customer technical support',
        'Learned fundamental troubleshooting and communication skills',
        'Gained experience with various operating systems and software',
        'Developed problem-solving methodology and customer service skills'
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="qualifications" className="qualifications-section section-padding">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Qualifications & Experience</h2>
          <p>Building expertise through hands-on experience and continuous learning</p>
        </motion.div>

        <div className="qualifications-content">
          {/* Certifications */}
          <div className="qualifications-column">
            <h3><Award size={24} /> Certifications</h3>
            <motion.div 
              className="items-list"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {qualifications.map((qual, index) => (
                <motion.div 
                  key={index} 
                  className="qualification-item"
                  variants={itemVariants}
                >
                  <div className="item-header">
                    <h4>{qual.title}</h4>
                    <span className="item-date">{qual.date}</span>
                  </div>
                  <div className="item-meta">
                    <span className="item-issuer">{qual.issuer}</span>
                  </div>
                  <p className="item-description">{qual.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Work Experience */}
          <div className="qualifications-column">
            <h3><Building size={24} /> Work Experience</h3>
            <motion.div 
              className="items-list"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {workHistory.map((job, index) => (
                <motion.div 
                  key={index} 
                  className="work-item"
                  variants={itemVariants}
                >
                  <div className="item-header">
                    <h4>{job.title}</h4>
                    <span className="item-date">{job.period}</span>
                  </div>
                  <div className="item-meta">
                    <span className="item-company">
                      <Building size={16} /> {job.company}
                    </span>
                    <span className="item-location">
                      <MapPin size={16} /> {job.location}
                    </span>
                  </div>
                  <ul className="responsibilities-list">
                    {job.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>{resp}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="experience-note text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            <strong>My Approach:</strong> While my career path may seem non-traditional, each role has built 
            upon the last, giving me a comprehensive understanding of IT from the ground up. I believe 
            practical experience and continuous learning are just as valuable as formal education.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default QualificationsSection
