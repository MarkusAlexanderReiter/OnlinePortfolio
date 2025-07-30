import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
