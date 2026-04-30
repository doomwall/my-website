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
            <hr className="my-8 mx-4 border-border" />
            <Email />
        </div>

    ) 
}

export default App;