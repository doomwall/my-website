import { useState, useRef, useCallback, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { ChevronDown, UserIcon } from "@hugeicons/core-free-icons"
import { projects } from "@/data/projects"
import { popUp } from "@/hooks/useInView"
import { SocialButtons } from "../components/socialButtons"

function ProjectCard({
  project,
  index,
  ready,
  onVideoLoad,
}: {
  project: typeof projects[number]
  index: number
  ready: boolean
  onVideoLoad: () => void
}) {
  const [expanded, setExpanded] = useState(false)
  const thumbRef = useRef<HTMLVideoElement>(null)
  const isTouch = typeof window !== "undefined" && window.matchMedia("(hover: none)").matches

  return (
    <div
      className={`${popUp}`}
      style={{
        opacity: ready ? 1 : 0,
        transform: ready ? "none" : "translateY(16px)",
        transition: "opacity 0.4s ease, transform 0.4s ease",
        transitionDelay: ready ? `${index * 80}ms` : "0ms",
      }}
    >
      <Card className="overflow-hidden p-0">
        <div className="hover:bg-muted/50 transition-colors duration-200">
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            onMouseEnter={() => !isTouch && thumbRef.current?.play()}
            onMouseLeave={() => { if (!isTouch) { thumbRef.current?.pause(); if (thumbRef.current) thumbRef.current.currentTime = 0 } }}
            className="w-full flex items-center gap-4 p-4 text-left cursor-pointer"
          >
            <video
              ref={thumbRef}
              src={project.video}
              muted
              loop
              playsInline
              autoPlay={isTouch}
              preload="metadata"
              onLoadedMetadata={onVideoLoad}
              className="w-16 h-16 rounded-md object-cover shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="text-muted-foreground text-sm truncate">{project.description}</p>
            </div>
            <HugeiconsIcon
              icon={ChevronDown}
              strokeWidth={2}
              className={`size-5 shrink-0 text-muted-foreground transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            />
          </button>

          <div
            className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${expanded ? "[grid-template-rows:1fr]" : "[grid-template-rows:0fr]"}`}
          >
            <div className="min-h-0 overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-64 shrink-0 overflow-hidden">
                  {expanded && (
                    <video
                      src={project.video}
                      muted
                      loop
                      playsInline
                      autoPlay
                      className="w-full h-48 md:h-full object-cover"
                    />
                  )}
                </div>
                <CardContent className="flex flex-col gap-4 p-6">
                  <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="outline">{t}</Badge>
                    ))}
                  </div>
                  {project.collaborators && (
                    <div className="flex flex-wrap gap-2 items-center">
                      <span className="text-xs text-muted-foreground">Made with:</span>
                      {project.collaborators.map((c) => (
                        <a
                          key={c.name}
                          href={c.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                        >
                          <HugeiconsIcon icon={UserIcon} size={12} strokeWidth={2} />
                          {c.name}
                        </a>
                      ))}
                    </div>
                  )}
                  {(project.github ?? project.demo) && (
                    <div className="flex gap-2 mt-auto pt-2">
                      {project.github && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            GitHub
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button size="sm" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </CardContent>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

function ProjectsPage() {
  const [loadedCount, setLoadedCount] = useState(0)
  const ready = loadedCount >= projects.length

  const handleVideoLoad = useCallback(() => {
    setLoadedCount((c) => c + 1)
  }, [])

  // Fallback: reveal after 2s in case any video fails to fire onLoadedMetadata
  useEffect(() => {
    const timer = setTimeout(() => setLoadedCount(projects.length), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col gap-4">
        <div>
          <h1 className="text-4xl font-bold">Projects</h1>
          <p className="text-muted-foreground mt-2">A collection of things I've built.</p>
        </div>

        {!ready && (
          <div className="flex justify-center py-12">
            <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
          </div>
        )}

        <div className={ready ? "" : "invisible h-0 overflow-hidden"}>
          <div className="flex flex-col gap-4">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                ready={ready}
                onVideoLoad={handleVideoLoad}
              />
            ))}
          </div>
        </div>
      </div>
      <hr className="my-8 mx-4 border-border" />
      <SocialButtons />
    </>
  )
}

export default ProjectsPage
