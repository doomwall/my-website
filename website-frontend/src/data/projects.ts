export interface Collaborator {
  name: string
  url: string
}

export interface Project {
  id: string
  title: string
  alt: string
  video: string
  description: string
  longDescription: string
  tech: string[]
  collaborators?: Collaborator[]
  github?: string
  demo?: string
}

export const projects: Project[] = [
  {
    id: "portfolio-website",
    title: "This Portfolio",
    alt: "Portfolio website screenshot",
    video: "/photos/website.mp4",
    description: "Personal portfolio and CV website — the one you're looking at",
    longDescription:
      "A full-stack portfolio website built from scratch and deployed to production. The frontend is a React + TypeScript SPA served by nginx, and the backend is a FastAPI service handling contact form submissions with hCaptcha verification and transactional email via Resend. Both services are containerised with Docker and deployed on Railway.",
    tech: ["React", "TypeScript", "FastAPI", "Python", "Docker", "Railway", "nginx", "hCaptcha", "Resend"],
    github: "https://github.com/doomwall/my-website",
    demo: "https://tuomovalkila.dev",
  },
  {
    id: "textgenerator",
    title: "Textgenerator",
    alt: "Text Generation Demo",
    video: "/photos/textgen.mp4",
    description: "Command line text generation tool",
    longDescription:
      "A command-line text generation application. Provides a simple interface for generating text using a simple language model using Markov chains and Trie data structures. The project was a learning exercise in Python and text processing, and serves as a basic example of how to build a text generator from scratch.",
    tech: ["Python"],
    github: "https://github.com/doomwall/tekstigeneraattori",
  },
  {
    id: "gen-ai-playground",
    title: "Gen-AI Playground",
    alt: "Gen-AI Playground Demo",
    video: "/photos/gen-ai.mp4",
    description: "Experimenting with generative AI models",
    longDescription:
      "A sandbox environment for experimenting with generative AI models and APIs. Used for testing prompting strategies, output formatting, and integrating AI capabilities into web interfaces. Part of Software engineering project course at University of Helsinki.",
    tech: ["Python", "TypeScript", "React", "FastAPI", "CI/CD", "Docker", "Playwright"],
    github: "https://github.com/TKT20007-Generative-AI-playground/gen-ai-playground",
  },
  {
    id: "game-project",
    title: "Untitled Game Project",
    alt: "Game Project Demo",
    video: "/photos/game.mp4",
    description: "A work-in-progress turn-based 2.5D dungeon crawler",
    longDescription:
      "A turn-based 2.5D dungeon crawler built in Godot. Still in active development — the focus has been on building out the core combat loop, level structure, and enemy mechanics before expanding scope. Made in collaboration with Wilpuri Arts, who are responsible for the game's art and design. The project serves as a learning experience in game development and design, and is a passion project for both of us.",
    tech: ["GDScript", "Godot"],
    collaborators: [{ name: "Wilpuri Arts", url: "https://www.instagram.com/wilpuriarts/" }],
  },
  {
    id: "mtg-discord",
    title: "MTG Discord Life Tracker",
    alt: "MTG Discord Life Tracker Demo",
    video: "/photos/mtg-disc.mp4",
    description: "Discord bot for tracking life points in Magic: The Gathering games",
    longDescription:
      "A Discord bot built on top of Discord's example app that tracks life totals during Magic: The Gathering games. Players can manage game state and health stats directly inside a Discord server through slash commands. Built with Node.js and the Discord API.",
    tech: ["JavaScript", "Node.js", "Discord API"],
    github: "https://github.com/doomwall/mtg-discord",
  },
  {
    id: "mtg-deck-library",
    title: "MTG Deck Library",
    alt: "MTG Deck Library Demo",
    video: "/photos/mtg-deck.mp4",
    description: "Magic: The Gathering deck management library",
    longDescription:
      "A deck-building and library management tool for Magic: The Gathering. Allows users to create, organize, and browse decks. Built with Flask and a SQL backend, with HTML templates for the frontend.",
    tech: ["Python", "Flask", "SQL", "HTML"],
    github: "https://github.com/doomwall/mtg-pakkakirjasto",
  },
]
