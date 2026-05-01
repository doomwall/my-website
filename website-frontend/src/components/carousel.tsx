import { useState, useEffect, useCallback } from "react"
import { Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { useInView, popUp, visible, hidden } from "@/hooks/useInView"
import { projects } from "@/data/projects"
import { SocialButtons } from "./socialButtons"

function CarouselDev() {
  const carousel = useInView()
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!api) return
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())
    api.on("select", onSelect)
    return () => { api.off("select", onSelect) }
  }, [api, onSelect])

  return (
    <>
    <div className="flex flex-col md:flex-row gap-4 justify-center px-4 pt-4" style={{ paddingBottom: "50px" }}>
      <div
        ref={carousel.ref}
        style={{ transitionDelay: carousel.inView ? "200ms" : "0ms" }}
        className={`w-full max-w-4xl mx-auto ${popUp} ${carousel.inView ? visible : hidden}`}
      >
      <Carousel setApi={setApi}>
        <CarouselContent className="-ml-2 md:-ml-4">
          {projects.map((item) => (
            <CarouselItem
              key={item.id}
              className="pl-2 md:pl-4 basis-[85%] md:basis-1/2 lg:basis-1/3 noselect"
            >
              <div className="p-1">
                <Link to="/projects">
                  <Card className="group cursor-pointer overflow-hidden p-0">
                    <CardContent className="aspect-square relative" style={{ padding: 0, margin: 0 }}>
                      <video
                        src={item.video}
                        autoPlay
                        muted
                        loop
                        playsInline
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
      <div className="flex justify-center gap-2 mt-4 md:hidden">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-primary" : "w-2 bg-muted-foreground/40"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
      </div>
    </div>
    <SocialButtons />
  </>
  )
}

export default CarouselDev