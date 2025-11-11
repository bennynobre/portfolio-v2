import { IExperience, IProject, ISkill } from "@/types";

export const PROJECTS: IProject[] = [
  {
    id: "valorant-tracker",
    titleKey: "Projects.valorant-tracker.title",
    descriptionKey: "Projects.valorant-tracker.description",
    imageUrl: "/images/PlayerModal.png", 
    tags: ["React", "Node.js", "Express", "TypeScript", "API Riot"],
    liveUrl: "https://valorant-tracker-beta.vercel.app/", 
    githubUrl: "https://github.com/bennynobre/valorant-tracker/tree/main"
  },
];

export const EXPERIENCES: IExperience[] = [
  {
    id: "lab-ldi",
    roleKey: "lab-ldi.role",
    entityKey: "lab-ldi.entity",
    dateStartKey: "lab-ldi.dateStart",
    dateEndKey: "lab-ldi.dateEnd",
    descriptionKey: "lab-ldi.description",
    learnMoreUrl: "https://leadfortaleza.com.br/ead/login"
  },
  {
    id: "grupo-escalada",
    roleKey: "grupo-escalada.role",
    entityKey: "grupo-escalada.entity",
    dateStartKey: "grupo-escalada.dateStart",
    dateEndKey: "grupo-escalada.dateEnd",
    descriptionKey: "grupo-escalada.description"
  },
  {
    id: "dell-lead",
    roleKey: "dell-lead.role",
    entityKey: "dell-lead.entity",
    dateStartKey: "dell-lead.dateStart",
    dateEndKey: "dell-lead.dateEnd",
    descriptionKey: "dell-lead.description"
  },
  {
    id: "devindev",
    roleKey: "devindev.role",
    entityKey: "devindev.entity",
    dateStartKey: "devindev.dateStart",
    dateEndKey: "devindev.dateEnd",
    descriptionKey: "devindev.description"
  },
  {
    id: "unifor",
    roleKey: "unifor.role",
    entityKey: "unifor.entity",
    dateStartKey: "unifor.dateStart",
    dateEndKey: "unifor.dateEnd",
    descriptionKey: "unifor.description"
  }
];

export const SKILLS: ISkill[] = [
  { name: "TypeScript", iconUrl: "/icons/typescript.svg" },
  { name: "JavaScript", iconUrl: "/icons/javascript.svg" },
  { name: "React", iconUrl: "/icons/react.svg" },
  { name: "Next.js", iconUrl: "/icons/nextjs.svg" },
  { name: "Node.js", iconUrl: "/icons/nodejs.svg" },
  { name: "Angular", iconUrl: "/icons/angular.svg" },
  { name: "Java", iconUrl: "/icons/java.svg" },
  { name: "Tailwind CSS", iconUrl: "/icons/tailwind.svg" },
  { name: "Git", iconUrl: "/icons/git.svg" }
];