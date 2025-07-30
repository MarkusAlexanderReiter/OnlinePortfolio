import React from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { getFeaturedProjects } from '../data/projects'
import './ProjectsSection.css'

const ProjectsSection = () => {
  const { t } = useTranslation()
  const featuredProjects = getFeaturedProjects()

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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <section id="projects" className="projects-section section-padding">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          <h2>{t('projects.title')}</h2>
          <p>{t('projects.subtitle')}</p>
        </motion.div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredProjects.map((project) => (
            <motion.div 
              key={project.id} 
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.1 }}
            >
              <div className="project-image">
                <img 
                  src={`https://via.placeholder.com/400x250/667eea/ffffff?text=${encodeURIComponent(project.title)}`}
                  alt={project.title}
                  loading="lazy"
                />
                <div className="project-overlay">
                  <Link to={`/project/${project.id}`} className="project-link">
                    <ExternalLink size={20} />
                  </Link>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-category">{project.category}</div>
                <h3>{project.title}</h3>
                <p>{project.shortDescription}</p>
                
                <div className="project-technologies">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-more">+{project.technologies.length - 3}</span>
                  )}
                </div>
                
                <Link to={`/project/${project.id}`} className="project-cta">
                  {t('projects.learnMore')} <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="projects-footer text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          viewport={{ once: true }}
        >
          <p>{t('projects.moreProjects')}</p>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection
