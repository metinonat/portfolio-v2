import { TimelineItemModel } from "react-chrono/dist/models/TimelineItemModel";

export type Project = {
  title: string;
  description: string;
  image?: string;
  url?: string;
  source?: string;
  tags: string[];
};

export type Skill = {
  header: string;
  items: {
    name: string;
    icon: string;
  }[];
};

export type Profile = {
  name: string;
  image: string;
  roles: string[];
  summary: string;
  socialAccounts: {
    network: string;
    href: string;
  }[];
  education: TimelineItemModel[];
  experiences: TimelineItemModel[];
  skills: Skill[];
  projects: Project[];
};
