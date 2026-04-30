//import * as React from "react"
//import { ListItem } from "@/components/ui/list-item"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"


function NavigationMenuMain() {
  return (
    <div>
    <NavigationMenu className="mx-auto">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Button variant="ghost" >
            Home
          </Button>
          <NavigationMenuContent>
            <NavigationMenuLink href="/" className="w-full">
              Home
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button variant="ghost" >
            Projects
          </Button>
          <NavigationMenuContent>
            <NavigationMenuLink href="#projects" className="w-full">
              Projects
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button variant="ghost" >
            Contact
          </Button>
          <NavigationMenuContent>
            <NavigationMenuLink href="#contact" className="w-full">
              Contact
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
      <Separator />
    </div>
  )
}

export default NavigationMenuMain;