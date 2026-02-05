import { ComponentExample } from "@/components/component-example";
import Header from "./components/header";
import NavigationMenuMain from "./components/nav-menu"
import Main from "./components/main"
import CarouselDev from "./components/carousel";

export function App() {
    return (
        <div>
            <Header />
            <NavigationMenuMain />
            <Main />
            <CarouselDev />
        </div>

    ) 
}

export default App;