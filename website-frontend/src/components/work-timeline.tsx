import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { workExperience, type WorkExperience } from "@/data/work"
import { useInView, popUp, visible, hidden } from "@/hooks/useInView"

function WorkCard({ item }: { item: WorkExperience }) {
  return (
    <Card className="p-0 overflow-hidden w-full">
      <CardContent className="p-4 flex flex-col gap-2">
        <div className="flex items-start justify-between gap-2 flex-wrap">
          <h3 className="font-semibold">{item.title}</h3>
          <span className="text-xs text-muted-foreground whitespace-nowrap">{item.period}</span>
        </div>
        <p className="text-sm font-medium text-primary">{item.company}</p>
        <p className="text-sm text-muted-foreground">{item.description}</p>
        {item.tech && (
          <div className="flex flex-wrap gap-1.5 mt-1">
            {item.tech.map((t) => (
              <Badge key={t} variant="outline" className="text-xs">{t}</Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

function TimelineItem({ item, index }: { item: WorkExperience; index: number }) {
  const ref = useInView()
  const isRight = index % 2 === 0

  return (
    <div
      ref={ref.ref}
      className={`${popUp} ${ref.inView ? visible : hidden}`}
      style={{ transitionDelay: ref.inView ? `${index * 150}ms` : "0ms" }}
    >
      {/* Desktop: zigzag layout */}
      <div className="hidden md:flex items-center mb-10">
        {/* Left card slot */}
        <div className="w-5/12 flex justify-end pr-2">
          {!isRight && <WorkCard item={item} />}
        </div>

        {/* Center: dot + branch lines */}
        <div className="w-2/12 relative flex items-center justify-center">
          {/* Branch toward left card */}
          {!isRight && (
            <div className="absolute right-1/2 top-1/2 w-1/2 h-px bg-border -translate-y-1/2" />
          )}
          {/* Dot */}
          <div className="w-4 h-4 rounded-full bg-primary border-2 border-background relative z-10 shrink-0" />
          {/* Branch toward right card */}
          {isRight && (
            <div className="absolute left-1/2 top-1/2 w-1/2 h-px bg-border -translate-y-1/2" />
          )}
        </div>

        {/* Right card slot */}
        <div className="w-5/12 flex justify-start pl-2">
          {isRight && <WorkCard item={item} />}
        </div>
      </div>

      {/* Mobile: single column */}
      <div className="flex md:hidden items-start gap-4 mb-6">
        <div className="shrink-0 mt-1.5">
          <div className="w-4 h-4 rounded-full bg-primary border-2 border-background" />
        </div>
        <div className="flex-1">
          <WorkCard item={item} />
        </div>
      </div>
    </div>
  )
}

function WorkTimeline() {
  const heading = useInView()

  return (
    <section className="py-12 px-4">
      <div
        ref={heading.ref}
        className={`text-center mb-10 ${popUp} ${heading.inView ? visible : hidden}`}
      >
        <h2 className="text-3xl font-bold">Experience</h2>
        <a href="/cv.pdf" download className="mt-4 inline-block">
          <Button variant="outline" size="sm">Download CV</Button>
        </a>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Desktop: vertical center line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
        {/* Mobile: vertical left line, aligned with dot center (w-4/2 = 8px = left-2) */}
        <div className="md:hidden absolute left-2 top-0 bottom-0 w-px bg-border" />

        {workExperience.map((item, i) => (
          <TimelineItem key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}

export default WorkTimeline