import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

function Header() {
  return (
    <div className="relative h-[600px] w-full">
      {/* Background Image */}
      <img 
        src="./src/photos/ocean.jpg" 
        alt="placeholder" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative h-full flex justify-center items-center px-4">
        <div className="max-w-4xl w-full text-left text-white flex flex-col">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            FUTURE <br /> DEVELOPER
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            CV - RESUME - WHATEVER
          </p>
          <div>
            <Button size="lg" variant="outline">Lets Get Started</Button>
          </div>
          
        </div>
        
      </div>
      <Separator />
    </div>
  )
}

export default Header;