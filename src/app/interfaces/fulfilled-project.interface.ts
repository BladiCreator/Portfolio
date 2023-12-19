import { Skill } from "./skill.interface.interface";

export interface FulfilledProject {
    name: string;
    description: string;
    skills: Skill[];
    url?: string;
}