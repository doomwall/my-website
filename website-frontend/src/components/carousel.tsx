import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"




function CarouselDev() {
  const items = [
    { src: "./src/photos/tekstigen.gif", alt: "Text Generation", title: "Textgenerator", description: "cool" },
    { src: "./src/photos/mtg-pakkakirjasto.gif", alt: "Text Generation", title: "Textgenerator", description: "cool" },
    { src: "./src/photos/gamegif.gif", alt: "Text Generation", title: "Textgenerator", description: "cool" },
  ]

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center px-4 pt-4">
      <Carousel className="w-full max-w-4xl mx-auto">
        <CarouselContent className="-ml-2 md:-ml-4">
          {items.map((item, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
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
                      <h3 className="text-white text-3xl font-bold text-center px-4">{item.title}</h3>
                    </div>
                    
                    {/* Hover Panel */}
                    <div className="absolute inset-x-0 bottom-0 bg-black/80 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-sm text-gray-300">{item.description}</p>
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