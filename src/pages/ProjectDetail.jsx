import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from 'lucide-react'
import { getProjectById } from '../data/projects'
import './ProjectDetail.css'

const ProjectDetail = () => {
  const { id } = useParams()
  const project = getProjectById(id)

  if (!project) {
    return (
      <div className="project-detail-container">
        <div className="container">
          <div className="project-not-found">
            <h1>Project Not Found</h1>
            <p>The project you're looking for doesn't exist.</p>
            <Link to="/" className="btn btn-primary">
              <ArrowLeft size={18} />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="project-detail-container">
      <div className="container">
        <motion.div 
          className="project-detail"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="project-header">
            <Link to="/" className="back-link">
              <ArrowLeft size={20} />
              Back to Portfolio
            </Link>
            
            <div className="project-title-section">
              <div className="project-category-badge">{project.category}</div>
              <h1>{project.title}</h1>
              <p className="project-description">{project.description}</p>
            </div>
          </div>

          {/* Project Image */}
          <div className="project-image-container">
            <img 
              src={project.image} 
              alt={project.title}
              onError={(e) => {
                e.target.src = `https://via.placeholder.com/800x400/667eea/ffffff?text=${encodeURIComponent(project.title)}`
              }}
            />
          </div>

          {/* Project Meta */}
          <div className="project-meta">
            <div className="meta-section">
              <h3><Tag size={20} /> Technologies Used</h3>
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
              <h2>Project Overview</h2>
              <p>{project.details.overview}</p>
            </div>

            <div className="content-section">
              <h2>Challenges</h2>
              <ul className="challenges-list">
                {project.details.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>

            <div className="content-section">
              <h2>Solutions</h2>
              <ul className="solutions-list">
                {project.details.solutions.map((solution, index) => (
                  <li key={index}>{solution}</li>
                ))}
              </ul>
            </div>

            <div className="content-section">
              <h2>Results & Impact</h2>
              <ul className="results-list">
                {project.details.results.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="project-cta">
            <h3>Interested in Similar Solutions?</h3>
            <p>Let's discuss how I can bring innovative technical solutions to your organization.</p>
            <div className="cta-buttons">
              <a href="#contact" className="btn btn-primary">
                Get In Touch
              </a>
              <Link to="/" className="btn btn-secondary">
                View More Projects
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectDetail
