import { useRef, useEffect, useState } from "react"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { useInView, popUp, visible, hidden } from "@/hooks/useInView"

const FADE_SECS = 1.5
const title1_fade_delay = "200ms"
const title2_fade_delay = "400ms"

function Header() {
  const title1 = useInView()
  const title2 = useInView()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const timer = setTimeout(() => setOpacity(1), 50)

    const handleTimeUpdate = () => {
      const timeLeft = video.duration - video.currentTime
      if (timeLeft <= FADE_SECS) {
        setOpacity(0)
      } else if (video.currentTime < FADE_SECS) {
        setOpacity(1)
      }
    }

    video.addEventListener("timeupdate", handleTimeUpdate)
    return () => {
      clearTimeout(timer)
      video.removeEventListener("timeupdate", handleTimeUpdate)
    }
  }, [])

  return (
    <div className="relative h-[600px] w-full">
      <video
        ref={videoRef}
        src="/photos/waves.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity, transition: `opacity ${FADE_SECS}s ease-in-out` }}
        autoPlay
        loop
        muted
      />
      
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative h-full flex justify-center items-center px-4">
        <div className="max-w-4xl w-full text-left text-white flex flex-col">
          <h1
            ref={title1.ref}
            className={`text-5xl md:text-7xl font-bold mb-6 ${popUp} ${title1.inView ? visible : hidden}`}
            style={{ transitionDelay: title1.inView ? title1_fade_delay : "0ms" }}
          >
            FUTURE <br /> DEVELOPER
          </h1>
          <p
            ref={title2.ref}
            className={`text-xl md:text-2xl mb-8 ${popUp} ${title2.inView ? visible : hidden}`}
            style={{ transitionDelay: title2.inView ? title2_fade_delay : "0ms" }}
          >
            CV - RESUME - PORTFOLIO
          </p>
          <div>
            <Button size="lg" variant="default">Lets Get Started</Button>
          </div>
          
        </div>
        
      </div>
      <Separator />
    </div>
  )
}

export default Header;