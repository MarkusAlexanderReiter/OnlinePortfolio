import React from 'react'
import { motion } from 'framer-motion'
import { Server, Network, Code, Wrench } from 'lucide-react'
import './AboutSection.css'

const AboutSection = () => {
  const skills = [
    {
      icon: <Server size={32} />,
      title: 'System Administration',
      description: 'Linux/Windows server management, virtualization, and infrastructure automation'
    },
    {
      icon: <Network size={32} />,
      title: 'Network Management',
      description: 'Multi-site network design, VPN implementation, and security configuration'
    },
    {
      icon: <Code size={32} />,
      title: 'Development',
      description: 'Automation scripts, monitoring solutions, and IoT project development'
    },
    {
      icon: <Wrench size={32} />,
      title: 'Problem Solving',
      description: 'Troubleshooting complex issues and implementing innovative technical solutions'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <p>Passionate about technology with a hands-on approach to solving real-world problems</p>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>My Journey in IT</h3>
            <p>
              I started my IT career at 18 in tech support, driven by curiosity and a passion for 
              understanding how technology works. Over the years, I've worked my way up to become 
              the sole network and system administrator for three mid-sized company locations.
            </p>
            <p>
              What sets me apart is my hands-on approach to learning and problem-solving. Rather than 
              following traditional academic paths, I've built my expertise through real-world experience, 
              personal projects, and continuous self-improvement.
            </p>
            <p>
              From building home server infrastructures to developing IoT solutions for everyday problems, 
              I believe in learning by doing. This practical experience has given me a deep understanding 
              of both the technical and business sides of IT operations.
            </p>
          </motion.div>

          <motion.div 
            className="skills-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="skill-card"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <h4>{skill.title}</h4>
                <p>{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
