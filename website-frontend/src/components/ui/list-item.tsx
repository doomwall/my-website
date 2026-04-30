import { NavigationMenuLink } from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom"

interface ListItemProps extends React.ComponentPropsWithoutRef<"li"> {
  title: string;
  children: React.ReactNode;
  to: string;
}

function ListItem({ title, children, to, ...props }: ListItemProps) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link to={to}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

export { ListItem };