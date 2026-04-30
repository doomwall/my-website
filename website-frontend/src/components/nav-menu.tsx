import { Link, useNavigate, useLocation } from "react-router-dom"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

function NavigationMenuMain() {
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToContact = () => {
    const scroll = () =>
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })

    if (location.pathname === "/") {
      scroll()
    } else {
      navigate("/")
      // Wait for the home page to render before scrolling
      setTimeout(scroll, 50)
    }
  }

  return (
    <div>
      <NavigationMenu className="mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Button variant="ghost" asChild>
              <Link to="/">Home</Link>
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button variant="ghost" asChild>
              <Link to="/projects">Projects</Link>
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button variant="ghost" asChild>
              <Link to="/experience">Experience</Link>
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button variant="ghost" onClick={scrollToContact}>
              Contact
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Separator />
    </div>
  )
}

export default NavigationMenuMain