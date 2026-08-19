import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import Header from "./components/header"
import NavigationMenuMain from "./components/nav-menu"
import Front from "./components/front"
import CarouselDev from "./components/carousel"
import Email from "./components/email"
import ProjectsPage from "./pages/projects"
import ExperiencePage from "./pages/experience"
import KirjakerhoPage from "./pages/kirjakerho"

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

function SiteLayout() {
  return (
    <div>
      <Header />
      <NavigationMenuMain />
      <Outlet />
    </div>
  )
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
        </Route>
        {/* Listaamaton kirjakerhosivu — ei näy navigaatiossa eikä hakukoneissa. */}
        <Route path="/kirjakerho" element={<KirjakerhoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
