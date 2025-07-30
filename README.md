# Personal Portfolio Website

A modern, responsive portfolio website built with React and Vite, designed to showcase practical IT skills, system administration experience, and innovative projects.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Project Showcase**: Interactive project cards with detailed case studies
- **Hero Section**: Video background with overlay (placeholder included)
- **Contact Form**: Functional contact form with mailto integration
- **Easy Updates**: Modular structure for easy content management

## 🛠️ Tech Stack

- **React 18** - Modern UI library
- **Vite** - Fast build tool and dev server
- **Framer Motion** - Smooth animations and transitions
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons
- **CSS3** - Custom styling with CSS variables

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation bar
│   ├── Footer.jsx      # Site footer
│   ├── HeroSection.jsx # Hero section with video background
│   ├── ProjectsSection.jsx # Featured projects display
│   ├── AboutSection.jsx    # About me and skills
│   ├── QualificationsSection.jsx # Certifications and work history
│   └── ContactSection.jsx     # Contact form and info
├── pages/              # Page components
│   ├── Home.jsx        # Main homepage
│   └── ProjectDetail.jsx # Individual project pages
├── data/               # Content data
│   └── projects.js     # Project information and details
├── App.jsx             # Main app component
├── main.jsx           # App entry point
└── index.css          # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/CV.git
cd CV
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📝 Content Management

### Adding/Editing Projects

Projects are managed in `src/data/projects.js`. Each project object contains:

```javascript
{
  id: 'unique-project-id',
  title: 'Project Title',
  category: 'Project Category',
  description: 'Brief description',
  shortDescription: 'Card description',
  technologies: ['Tech1', 'Tech2'],
  image: '/images/project-image.jpg',
  featured: true, // Show on homepage
  details: {
    overview: 'Detailed overview',
    challenges: ['Challenge 1', 'Challenge 2'],
    solutions: ['Solution 1', 'Solution 2'],
    results: ['Result 1', 'Result 2']
  }
}
```

### Updating Personal Information

- **Contact Info**: Edit `src/components/ContactSection.jsx`
- **About Text**: Edit `src/components/AboutSection.jsx`
- **Work History**: Edit `src/components/QualificationsSection.jsx`
- **Hero Text**: Edit `src/components/HeroSection.jsx`

### Adding Images

1. Place images in the `public/images/` directory
2. Reference them in your project data as `/images/filename.jpg`
3. The site includes fallback placeholder images for missing files

## 🎨 Customization

### Colors and Styling

Global CSS variables are defined in `src/index.css`:

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  --accent-color: #3b82f6;
  /* ... more variables */
}
```

### Adding Video Background

Replace the placeholder in `HeroSection.jsx`:

```jsx
// Replace the placeholder div with:
<video autoPlay muted loop>
  <source src="/videos/hero-video.mp4" type="video/mp4" />
</video>
```

## 🚀 Deployment

### GitHub Pages

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Upload the `dist` folder to your hosting provider

## 📱 Mobile Optimization

The site is fully responsive with breakpoints at:
- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: 320px - 767px

## 🔧 Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

**Note**: Remember to update contact information, project details, and personal content before deploying your portfolio.
