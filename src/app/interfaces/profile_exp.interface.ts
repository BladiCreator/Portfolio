//! ESTADO: experimental y falta por implementar
export interface Profile {
    first_name: string;
    last_name: string;
    profession: string;
    presentation: string;
    about_me: string;
    img_url: string;
    logo_url: string;
    experiences: Experience[];
    education: Education[];
    projects: FulfilledProject[];
    skills: Skill[];
}

export interface Experience {
    name: string;
    date: string;
    companyName: string;
    localization: string;
    description: string;
}

export interface FulfilledProject {
    name: string;
    description: string;
    skills: Skill[];
    url: string;
}

export interface Skill {
    name: string;
    logoLink?: string;
}

export interface Education {
    formation_title: string;
    school_title: string;
}