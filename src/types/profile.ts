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
  name: string;
  icon: string;
}

export type SkillWrapper = {
  header: string;
  items: Skill[];
};

export type SocialAccount = {
  network: string;
  href: string;
};

export type Profile = {
  name: string;
  image: string;
  roles: string[];
  summary: string;
  socialAccounts: SocialAccount[];
  education: TimelineItemModel[];
  experiences: TimelineItemModel[];
  skills: SkillWrapper[];
  projects: Project[];
};
