import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useInView, popUp, visible, hidden } from "@/hooks/useInView"
import { bio, skills } from "@/data/profile"

const card1_fade_delay = "600ms"
const card2_fade_delay = "800ms"

function Front() {
  const card1 = useInView()
  const card2 = useInView()

  return (
    <>
      <div id="bio" className="flex flex-col md:flex-row gap-4 justify-center px-4 pt-4" style={{ paddingTop: "40px" }}>
        <div
          ref={card1.ref}
          style={{ transitionDelay: card1.inView ? card1_fade_delay : "0ms" }}
          className={`relative w-full max-w-xl ${popUp} ${card1.inView ? visible : hidden}`}
        >
        <Card>
          <CardHeader>
            <CardTitle>
              <h1 className="text-5xl md:text-3xl font-bold">BIO</h1>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="whitespace-pre-line">
                {bio}
            </CardDescription>
            </CardContent>
            <CardContent>
                <h1 className="text-5xl md:text-3xl font-bold">SKILLS</h1>
            </CardContent>
            <CardContent>

                <div className="flex w-full flex-wrap justify-left gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
            </CardContent>
        </Card>
        </div>
        <div
          ref={card2.ref}
          style={{ transitionDelay: card2.inView ? card2_fade_delay : "0ms" }}
          className={`relative w-full max-w-sm ${popUp} ${card2.inView ? visible : hidden}`}
        >
        <Card className="pt-2">
          <div className="absolute inset-0 z-30 aspect-square bg-black/35" />
          <img
            src="/photos/my-photo.png"
            alt="Event cover"
            className="relative z-40 aspect-square w-full object-cover brightness-60 grayscale dark:brightness-40"
          />
          <CardHeader>
            <CardTitle>That's me</CardTitle>
          </CardHeader>
        </Card>
        </div>
      </div>
    </>
  )
}

export default Front;