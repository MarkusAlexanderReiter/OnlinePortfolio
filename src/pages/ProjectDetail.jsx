import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from 'lucide-react'
import { getProjectById } from '../data/projects'
import './ProjectDetail.css'

const ProjectDetail = () => {
  const { t } = useTranslation()
  const { id } = useParams()
  const project = getProjectById(id)

  if (!project) {
    return (
      <div className="project-detail-container">
        <div className="container">
          <div className="project-not-found">
            <h1>{t('projectDetail.notFound')}</h1>
            <p>{t('projectDetail.notFoundDescription')}</p>
            <Link to="/" className="btn btn-primary">
              <ArrowLeft size={18} />
              {t('hero.viewWork')}
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="project-detail-container">
      {/* Sticky Back Button */}
      <Link to="/" className="back-link-sticky">
        <ArrowLeft size={20} />
        {t('projectDetail.backToPortfolio')}
      </Link>
      
      <div className="container">
        <motion.div 
          className="project-detail"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header */}
          <div className="project-header">
            
            <div className="project-title-section">
              <div className="project-category-badge">{project.category}</div>
              <h1>{project.title}</h1>
              <p className="project-description">{project.description}</p>
            </div>
          </div>

          {/* Project Image */}
          <div className="project-image-container">
            <img 
              src={`https://via.placeholder.com/800x400/667eea/ffffff?text=${encodeURIComponent(project.title)}`}
              alt={project.title}
              loading="lazy"
            />
          </div>

          {/* Project Meta */}
          <div className="project-meta">
            <div className="meta-section">
              <h3><Tag size={20} /> {t('projectDetail.technologiesUsed')}</h3>
              <div className="technologies-list">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="project-content">
            <div className="content-section">
              <h2>{t('projectDetail.overview')}</h2>
              <p>{project.details.overview}</p>
            </div>

            <div className="content-section">
              <h2>{t('projectDetail.challenges')}</h2>
              <ul className="challenges-list">
                {project.details.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>

            <div className="content-section">
              <h2>{t('projectDetail.solutions')}</h2>
              <ul className="solutions-list">
                {project.details.solutions.map((solution, index) => (
                  <li key={index}>{solution}</li>
                ))}
              </ul>
            </div>

            <div className="content-section">
              <h2>{t('projectDetail.results')}</h2>
              <ul className="results-list">
                {project.details.results.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="project-cta">
            <h3>{t('projectDetail.interestedTitle')}</h3>
            <p>{t('projectDetail.interestedDescription')}</p>
            <div className="cta-buttons">
              <a href="#contact" className="btn btn-primary">
                {t('hero.getInTouch')}
              </a>
              <Link to="/" className="btn btn-secondary">
                {t('projectDetail.viewMoreProjects')}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectDetail
