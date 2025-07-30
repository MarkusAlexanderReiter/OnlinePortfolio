// Project data - easily editable for content updates
export const projects = [
  {
    id: 'home-server',
    title: 'Home Server Infrastructure',
    category: 'System Administration',
    description: 'Custom-built home server running multiple services including file storage, media streaming, and development environments.',
    shortDescription: 'Multi-service home server with virtualization and network storage',
    technologies: ['Linux', 'Docker', 'Proxmox', 'NAS', 'VPN'],
    image: '/images/home-server.jpg', // Placeholder - user will provide
    featured: true,
    details: {
      overview: 'Built and configured a comprehensive home server infrastructure to support development work and personal projects.',
      challenges: [
        'Implementing secure remote access',
        'Optimizing performance for multiple concurrent services',
        'Setting up automated backups and monitoring'
      ],
      solutions: [
        'Configured VPN access with proper firewall rules',
        'Used containerization to isolate services and manage resources',
        'Implemented monitoring stack with alerting capabilities'
      ],
      results: [
        '99.9% uptime over 2+ years of operation',
        'Reduced cloud storage costs by 80%',
        'Enabled remote development capabilities'
      ]
    }
  },
  {
    id: 'arduino-plant-watering',
    title: 'Arduino Plant Watering System',
    category: 'IoT Development',
    description: 'Automated plant watering system using Arduino, sensors, and mobile notifications for smart garden management.',
    shortDescription: 'IoT-enabled automated plant care with remote monitoring',
    technologies: ['Arduino', 'C++', 'Sensors', 'WiFi', 'Mobile App'],
    image: '/images/plant-watering.jpg', // Placeholder - user will provide
    featured: true,
    details: {
      overview: 'Designed and built an intelligent plant watering system that monitors soil moisture and automatically waters plants when needed.',
      challenges: [
        'Accurate soil moisture detection',
        'Reliable wireless connectivity',
        'Power management for outdoor use'
      ],
      solutions: [
        'Calibrated multiple soil sensors for different plant types',
        'Implemented WiFi with fallback connectivity options',
        'Added solar charging capability with battery backup'
      ],
      results: [
        'Reduced plant mortality by 90%',
        'Automated care for 20+ plants',
        'Remote monitoring via mobile notifications'
      ]
    }
  },
  {
    id: 'network-infrastructure',
    title: 'Multi-Site Network Infrastructure',
    category: 'Network Administration',
    description: 'Designed and implemented network infrastructure across three company locations with centralized management.',
    shortDescription: 'Enterprise network design and implementation for multi-site operations',
    technologies: ['Cisco', 'VLAN', 'VPN', 'Firewall', 'Monitoring'],
    image: '/images/network-infrastructure.jpg', // Placeholder - user will provide
    featured: true,
    details: {
      overview: 'Led the complete network infrastructure overhaul for a multi-location company, improving security and performance.',
      challenges: [
        'Connecting three geographically separated sites',
        'Ensuring secure inter-site communication',
        'Maintaining high availability and performance'
      ],
      solutions: [
        'Implemented site-to-site VPN connections',
        'Designed segmented VLAN architecture',
        'Deployed centralized monitoring and management'
      ],
      results: [
        'Improved network performance by 300%',
        'Reduced security incidents by 95%',
        'Enabled seamless resource sharing across sites'
      ]
    }
  },
  {
    id: 'monitoring-dashboard',
    title: 'Infrastructure Monitoring Dashboard',
    category: 'DevOps',
    description: 'Custom monitoring solution providing real-time visibility into server health, network performance, and service availability.',
    shortDescription: 'Real-time infrastructure monitoring with custom alerting',
    technologies: ['Grafana', 'Prometheus', 'Python', 'Docker', 'APIs'],
    image: '/images/monitoring-dashboard.jpg', // Placeholder - user will provide
    featured: false,
    details: {
      overview: 'Built a comprehensive monitoring solution to track infrastructure health and performance across all company systems.',
      challenges: [
        'Collecting metrics from diverse systems',
        'Creating meaningful visualizations',
        'Implementing intelligent alerting'
      ],
      solutions: [
        'Developed custom collectors for legacy systems',
        'Designed intuitive dashboards for different stakeholders',
        'Implemented smart alerting to reduce noise'
      ],
      results: [
        'Reduced mean time to detection by 80%',
        'Prevented 15+ potential outages',
        'Improved team response time by 60%'
      ]
    }
  }
]

export const getProjectById = (id) => {
  return projects.find(project => project.id === id)
}

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured)
}
