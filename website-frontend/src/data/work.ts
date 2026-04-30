export interface WorkExperience {
  id: string
  title: string
  company: string
  period: string
  description: string
  tech?: string[]
}

export const workExperience: WorkExperience[] = [
    {
    id: "job3",
    title: "Course Project - Generative AI Playground",
    company: "University of Helsinki/Verda",
    period: "Spring 2026",
    description: "A sandbox environment for experimenting with generative AI models and APIs. Used for testing prompting strategies, output formatting, and integrating AI capabilities into web interfaces. The project was developed as part of a course on software project management, with a focus on practical application and experimentation.",
    tech: ["React", "FastAPI", "Git", "Agile", "Scrum", "DevOps", "CI/CD", "Docker", "Playwright"],
  },
  {
    id: "education2",
    title: "Bachelor's Degree in Computer Science",
    company: "University of Helsinki",
    period: "2024 – Ongoing",
    description: "Comprehensive studies in computer science, covering topics such as algorithms, data structures, software development, and machine learning. The program emphasizes practical skills and theoretical knowledge, preparing students for careers in software development and research.",
     tech: ["Python", "JavaScript", "TypeScript", "SQL", "Git", "Linux"],
  },
  {
    id: "job1",
    title: "Debt Collection Clerk",
    company: "National Enforcement Authority Finland",
    period: "2020 – Present",
    description: "Reviewing and processing debt collection cases, communicating with debtors and creditors, and ensuring compliance with legal regulations. Responsible for managing case files and maintaining accurate records of all communications and actions taken.",
  },
  {
    id: "job2",
    title: "Office Assistant",
    company: "Suomen Brodeeraus Oy",
    period: "2017 – 2019",
    description: "Maintaining websites, managing social media accounts, and providing general administrative support. Assisted in content creation and digital marketing efforts to enhance the company's online presence.",
    tech: ["Frontend", "Backend"],
  },
  {
    id: "education1",
    title: "Vocational Qualification in Business and Administration",
    company: "Jyväskylän Ammattiopisto",
    period: "2014 – 2017",
    description: "Vocational training focused on business and administration, covering topics such as office software, customer service, and organizational skills. Completed coursework and practical training to develop a strong foundation in administrative tasks and business operations.",
  },
]
