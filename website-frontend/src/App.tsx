import Header from "./components/header";
import NavigationMenuMain from "./components/nav-menu"
import Front from "./components/front"
import CarouselDev from "./components/carousel";
import Email from "./components/email";

export function App() {
    return (
        <div>
            <Header />
            <NavigationMenuMain />
            <Front />
            <CarouselDev />
            <Email />
        </div>

    ) 
}

export default App;