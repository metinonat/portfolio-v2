import {
  AcademicCapIcon,
  BoltIcon,
  CodeBracketIcon,
  FolderIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  SKILLS: "/skills",
  EDUCATION: "/education",
  EXPERIENCE: "/experience",
  PROJECTS: "/projects",
};

export const PAGE_NAMES = {
  HOME: "Home",
  ABOUT: "About",
  SKILLS: "Skills",
  EDUCATION: "Education",
  EXPERIENCE: "Experience",
  PROJECTS: "Projects",
};

export const NAVIGATION = [
  {
    name: PAGE_NAMES.HOME,
    href: ROUTES.HOME,
    icon: HomeIcon,
  },
  {
    name: PAGE_NAMES.ABOUT,
    href: ROUTES.ABOUT,
    icon: UserIcon,
  },
  {
    name: PAGE_NAMES.SKILLS,
    href: ROUTES.SKILLS,
    icon: BoltIcon,
  },
  {
    name: PAGE_NAMES.EDUCATION,
    href: ROUTES.EDUCATION,
    icon: AcademicCapIcon,
  },
  {
    name: PAGE_NAMES.EXPERIENCE,
    href: ROUTES.EXPERIENCE,
    icon: CodeBracketIcon,
  },
  {
    name: PAGE_NAMES.PROJECTS,
    href: ROUTES.PROJECTS,
    icon: FolderIcon,
  },
];
