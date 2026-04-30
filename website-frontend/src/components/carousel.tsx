import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useInView, popUp, visible, hidden } from "@/hooks/useInView"

const carousel_fade_delay = "200ms"


function CarouselDev() {
  const carousel = useInView()
  const items = [
    { src: "/photos/tekstigen.gif", alt: "Text Generation", title: "Textgenerator", description: "cool" },
    { src: "/photos/mtg-pakkakirjasto.gif", alt: "Text Generation", title: "MTG Deck library", description: "cool" },
    { src: "/photos/gamegif.gif", alt: "Text Generation", title: "Unfinished Gameproject", description: "cool" },
    { src: "/photos/tekstigen.gif", alt: "alt", title: "Gen-AI-playground", description: "cool" },
  ]

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center px-4 pt-4" style={{ paddingBottom: "70px" }}>
      <Carousel 
      ref={carousel.ref} 
      style={{ transitionDelay: carousel.inView ? carousel_fade_delay : "0ms" }} 
      className={`w-full max-w-4xl mx-auto ${popUp} ${carousel.inView ? visible : hidden}`}>
        <CarouselContent className="-ml-2 md:-ml-4">
          {items.map((item, index) => (
            <CarouselItem 
              key={index} 
              className={`pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3 noselect`}>
              <div className="p-1">
                <Card className="group cursor-pointer overflow-hidden p-0">
                  <CardContent className="aspect-square relative" style={{ padding: 0, margin: 0 }}>
                    <img 
                      src={item.src} 
                      alt={item.alt}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:blur-sm"
                      style={{ display: 'block' }}
                    />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-white text-3xl font-bold text-center px-4 noselect" style={{ textShadow: "2px 2px 4px rgb(0, 0, 0)" }}>{item.title}</h3>
                    </div>
                    
                    {/* Hover Panel */}
                    <div className="absolute inset-x-0 bottom-0 bg-black/80 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-semibold text-lg noselect" >{item.title}</h3>
                      <p className="text-sm text-gray-300 noselect">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default CarouselDev;