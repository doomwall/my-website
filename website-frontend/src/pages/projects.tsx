import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { ChevronDown } from "@hugeicons/core-free-icons"
import { projects } from "@/data/projects"
import { useInView, popUp, visible, hidden } from "@/hooks/useInView"

function ProjectCard({ project }: { project: typeof projects[number] }) {
  const [expanded, setExpanded] = useState(false)
  const card = useInView()

  return (
    <div
      ref={card.ref}
      className={`${popUp} ${card.inView ? visible : hidden}`}
    >
      <Card className="overflow-hidden p-0">
        <div className="hover:bg-muted/50 transition-colors duration-200">
        {/* Clickable header — always visible */}
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="w-full flex items-center gap-4 p-4 text-left cursor-pointer"
        >
          <img
            src={project.image}
            alt={project.alt}
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

        {/* Expandable body using grid-template-rows for smooth animation */}
        <div
          className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${expanded ? "[grid-template-rows:1fr]" : "[grid-template-rows:0fr]"}`}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-64 shrink-0 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <CardContent className="flex flex-col gap-4 p-6">
                  <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="outline">{t}</Badge>
                    ))}
                  </div>
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
  const heading = useInView()

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col gap-4">
      <div
        ref={heading.ref}
        className={`${popUp} ${heading.inView ? visible : hidden}`}
      >
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="text-muted-foreground mt-2">A collection of things I've built.</p>
      </div>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}

export default ProjectsPage