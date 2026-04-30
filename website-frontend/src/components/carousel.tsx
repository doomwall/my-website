import { Link } from "react-router-dom"
import { HugeiconsIcon } from "@hugeicons/react"
import { GithubIcon, Linkedin01Icon, WorkflowCircle01Icon, ComputerCheckIcon } from "@hugeicons/core-free-icons"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useInView, popUp, visible, hidden } from "@/hooks/useInView"
import { projects } from "@/data/projects"
import { Button } from "@/components/ui/button"

function CarouselDev() {
  const carousel = useInView()
  const checkOut = useInView()

  return (
    <>
    <div className="flex flex-col md:flex-row gap-4 justify-center px-4 pt-4" style={{ paddingBottom: "50px" }}>
      <div
        ref={carousel.ref}
        style={{ transitionDelay: carousel.inView ? "200ms" : "0ms" }}
        className={`w-full max-w-4xl mx-auto ${popUp} ${carousel.inView ? visible : hidden}`}
      >
      <Carousel>
        <CarouselContent className="-ml-2 md:-ml-4">
          {projects.map((item) => (
            <CarouselItem
              key={item.id}
              className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3 noselect"
            >
              <div className="p-1">
                <Link to="/projects">
                  <Card className="group cursor-pointer overflow-hidden p-0">
                    <CardContent className="aspect-square relative" style={{ padding: 0, margin: 0 }}>
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-full object-cover transition-all duration-300 group-hover:blur-sm"
                        style={{ display: "block" }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-white text-3xl font-bold text-center px-4 noselect" style={{ textShadow: "2px 2px 4px rgb(0, 0, 0)" }}>
                          {item.title}
                        </h3>
                      </div>
                      <div className="absolute inset-x-0 bottom-0 bg-black/80 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="font-semibold text-lg noselect">{item.title}</h3>
                        <p className="text-sm text-gray-300 noselect">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </div>
    </div>
      <div
    id="contact"
    ref={checkOut.ref}
    style={{ transitionDelay: checkOut.inView ? "400ms" : "0ms", paddingBottom: "70px" }}
    className={`flex flex-col items-center justify-center gap-4 ${popUp} ${checkOut.inView ? visible : hidden}`}
  >
    <h2 className="text-2xl font-bold">Checkout my...</h2>
    <div className="flex flex-wrap justify-center gap-3 px-4">
      <Button variant="default" size="lg" onClick={() => window.location.href = "/projects"}>
        <HugeiconsIcon icon={ComputerCheckIcon} strokeWidth={2} />
        Projects
      </Button>
      <Button variant="default" size="lg" onClick={() => window.location.href = "/experience"}>
        <HugeiconsIcon icon={WorkflowCircle01Icon} strokeWidth={2} />
        Experience
      </Button>
      <Button variant="default" size="lg" asChild>
        <a href="https://github.com/doomwall" target="_blank" rel="noopener noreferrer">
          <HugeiconsIcon icon={GithubIcon} strokeWidth={2} />
          GitHub
        </a>
      </Button>
      <Button variant="default" size="lg" asChild>
        <a href="https://www.linkedin.com/in/tuomo-valkila/" target="_blank" rel="noopener noreferrer">
          <HugeiconsIcon icon={Linkedin01Icon} strokeWidth={2} />
          LinkedIn
        </a>
      </Button>
    </div>
  </div>
  </>
  )
}

export default CarouselDev