
export interface IProject {
  id: string;
  titleKey: string;
  descriptionKey: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  githubUrl: string;
}

export interface IExperience {
  id: string;
  roleKey: string; 
  entityKey: string; 
  dateStartKey: string; 
  dateEndKey: string; 
  descriptionKey: string;
  learnMoreUrl?: string; 
}

export interface ISkill {
  name: string;
  iconUrl: string;
}