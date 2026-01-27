import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import RootLayout from "@/layouts/RootLayout"
import Home from "@/pages/Home"
import About from "@/pages/About"
import Skills from "@/pages/Skills"
import Experience from "@/pages/Experience"
import Projects from "@/pages/Projects"
import ProjectDetails from "@/pages/ProjectDetails"
import Contact from "@/pages/Contact"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<ProjectDetails />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
