import * as React from "react"
import { ListItem } from "@/components/ui/list-item"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"


function NavigationMenuMain() {
  return (
    <div>
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-33">
                <li>
                  <Button size="lg" variant="outline">Lets Get Started</Button>
                </li>
                <li>
                  <Button size="lg" variant="outline">Lets Get Started</Button>
                </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
      <Separator />
    </div>
  )
}

export default NavigationMenuMain;