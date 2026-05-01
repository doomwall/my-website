import { HugeiconsIcon } from "@hugeicons/react"
import { GithubIcon, Linkedin01Icon, WorkflowCircle01Icon, ComputerCheckIcon } from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import { hidden, useInView, visible, popUp } from "@/hooks/useInView"
import { useNavigate } from "react-router-dom"

export function SocialButtons() {
  const checkOut = useInView()
  const navigate = useNavigate()

  return (
    <div
      id="contact"
      ref={checkOut.ref}
      style={{ transitionDelay: checkOut.inView ? "400ms" : "0ms", paddingBottom: "70px" }}
      className={`flex flex-col items-center justify-center gap-4 ${popUp} ${checkOut.inView ? visible : hidden}`}
    >
      <h2 className="text-2xl font-bold">Checkout my...</h2>
      <div className="flex flex-wrap justify-center gap-3 px-4">
        <Button variant="default" size="lg" onClick={() => navigate("/projects")}>
          <HugeiconsIcon icon={ComputerCheckIcon} strokeWidth={2} />
          Projects
        </Button>
        <Button variant="default" size="lg" onClick={() => navigate("/experience")}>
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
  )
}