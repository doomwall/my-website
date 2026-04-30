export interface Project {
  id: string
  title: string
  alt: string
  image: string
  description: string
  longDescription: string
  tech: string[]
  github?: string
  demo?: string
}

export const projects: Project[] = [
  {
    id: "textgenerator",
    title: "Textgenerator",
    alt: "Text Generation Demo",
    image: "/photos/tekstigen.gif",
    description: "Command line text generation tool",
    longDescription:
      "A command-line text generation application. Provides a simple interface for generating text using a simple language model using Markov chains. The project was a learning exercise in Python and text processing, and serves as a basic example of how to build a text generator from scratch.",
    tech: ["Python"],
    github: "https://github.com/doomwall/tekstigeneraattori",
  },
  {
    id: "gen-ai-playground",
    title: "Gen-AI Playground",
    alt: "Gen-AI Playground Demo",
    image: "/photos/gen-ai.gif",
    description: "Experimenting with generative AI models",
    longDescription:
      "A sandbox environment for experimenting with generative AI models and APIs. Used for testing prompting strategies, output formatting, and integrating AI capabilities into web interfaces.",
    tech: ["Python", "TypeScript", "React", "FastAPI", "CI/CD", "Docker", "Playwright", "Scrum", "DevOps"],
    github: "https://github.com/TKT20007-Generative-AI-playground/gen-ai-playground",
  },
  {
    id: "game-project",
    title: "Untitled Unfinished Game Project",
    alt: "Game Project Demo",
    image: "/photos/gamegif.gif",
    description: "A work-in-progress game",
    longDescription:
      "An ongoing game project made with Godot. Still in active development — the focus has been on getting the core game loop and mechanics right before expanding scope.",
    tech: ["GDScript", "Godot"],
  },
  {
    id: "mtg-deck-library",
    title: "MTG Deck Library",
    alt: "MTG Deck Library Demo",
    image: "/photos/mtg-pakkakirjasto.gif",
    description: "Magic: The Gathering deck management library",
    longDescription:
      "A deck-building and library management tool for Magic: The Gathering. Allows users to create, organize, and browse decks. Built with a structured backend to handle card data and deck relationships.",
    tech: ["Python", "SQL", "HTML", "CSS"],
    github: "https://github.com/doomwall/mtg-pakkakirjasto",
  },
]
