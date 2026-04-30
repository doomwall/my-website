import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/header"
import NavigationMenuMain from "./components/nav-menu"
import Front from "./components/front"
import CarouselDev from "./components/carousel"
import Email from "./components/email"
import ProjectsPage from "./pages/projects"
import ExperiencePage from "./pages/experience"

function Home() {
  return (
    <>
      <Front />
      <CarouselDev />
      <hr className="my-8 mx-4 border-border" />
      <Email />
    </>
  )
}

export function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <NavigationMenuMain />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
