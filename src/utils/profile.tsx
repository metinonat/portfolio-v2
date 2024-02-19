import { Profile } from "@/types/profile";

export const PROFILE: Profile = {
  name: "METIN ONAT ÇUKUR",
  image: "/portfolio-v2/images/me.jpg",
  roles: ["a Software Engineer", "a Node.js Developer"],
  summary:
    "Passionate Software Engineer with a strong foundation in backend development and expertise in modern technologies such as React, Node.js, Docker, and AWS. Currently pursuing a Master's in Cryptography.",
  socialAccounts: [
    {
      network: "linkedin",
      href: "https://linkedin.com/in/metinonatcukur",
    },
    {
      network: "github",
      href: "https://github.com/metinonat",
    },
  ],
  education: [
    {
      title: "Feb 2024 - Present",
      cardTitle: "M.Sc. in Cryptography",
      cardSubtitle:
        "Institute of Applied Mathematics, Middle East Technical University (METU)",
      cardDetailedText: "Currently pursuing a Master's degree in Cryptography.",
      url: "https://iam.metu.edu.tr/",
      media: {
        type: "IMAGE",
        name: "METU",
        source: {
          url: "https://www.metu.edu.tr/system/files/logo_orj/7/7.3.jpg",
        },
      },
    },
    {
      title: "Sep 2017 - Jul 2023",
      cardTitle: "B.Sc. in Computer Engineering",
      cardSubtitle:
        "Department of Computer Engineering, Middle East Technical University",
      cardDetailedText: "",
      url: "https://ceng.metu.edu.tr/",
      media: {
        type: "IMAGE",
        name: "METU",
        source: {
          url: "https://www.metu.edu.tr/system/files/logo_orj/7/7.3.jpg",
        },
      },
    },
    {
      title: "Sep 2016 - Jun 2017",
      cardTitle: "English Preparatory School",
      cardSubtitle:
        "Department of Basic English, Middle East Technical University",
      cardDetailedText: "",
      url: "https://dbe.metu.edu.tr/",
      media: {
        type: "IMAGE",
        name: "METU",
        source: {
          url: "https://www.metu.edu.tr/system/files/logo_orj/7/7.3.jpg",
        },
      },
    },
  ],
  experiences: [
    {
      title: "Nov 2023 - Present",
      cardTitle: "Software Engineer",
      cardSubtitle: "Via Scientific Inc., Massachusetts, USA",
      cardDetailedText: [
        "Worked in a docker image builder. Modernized legacy system written in PHP to a Node.js application and contributed to frontend to some degree.",
      ],
      media: {
        type: "IMAGE",
        name: "Via Scientific Inc.",
        source: {
          url: "https://cdn-iajnp.nitrocdn.com/AxLOWXCCuwkEscbEpqXkrVYrmXRiRreX/assets/images/optimized/rev-40baf27/www.viascientific.com/wp-content/uploads/2022/12/footer-icon.svg",
        },
      },
    },
    {
      title: "Oct 2022 - Oct 2023",
      cardTitle: "Software Engineer",
      cardSubtitle: "Armon Technology Inc., Ankara, Turkiye",
      cardDetailedText: [
        "Worked in both legacy and modern systems. Modernized visitor module and notification system of product. In the scope of visitor module, also revised intercom module.",
      ],
      media: {
        type: "IMAGE",
        name: "Armongate",
        source: {
          url: "https://static.wixstatic.com/media/e24cba_dee2ef171c724a44b471c2571d1c1b97~mv2.png/v1/crop/x_102,y_0,w_1075,h_400/fill/w_205,h_76,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/armongate_light_logo.png",
        },
      },
    },
    {
      title: "Jul 2020 - Sep 2020",
      cardTitle: "Embedded Systems Engineer Intern",
      cardSubtitle: "Elsitel Elektronic Systems Inc., Ankara, Turkiye",
      cardDetailedText: [
        "Worked on several STM32 microchips and sensors. Developed a railroad crossing barrier driver with C on a STM32 microchip",
      ],
      media: {
        type: "IMAGE",
        name: "Elsitel",
        source: {
          url: "https://www.elsitel.com.tr/wp-content/uploads/2024/01/LogoSVG-1.svg",
        },
      },
    },
    {
      title: "Jun 2019 - Sep 2019",
      cardTitle: "Game Developer Intern",
      cardSubtitle: "Creasaur Inc., Ankara, Turkiye",
      cardDetailedText: [
        "Been a part of two whole game development processes from game design to testing as a game developer with a team of three game developers and one graphic designer",
      ],
      media: {
        type: "IMAGE",
        name: "Creasaur",
        source: {
          url: "https://creasaur.net/wp-content/uploads/2019/11/logo.png",
        },
      },
    },
  ],
  skills: [
    {
      header: "Languages & Databases",
      items: [
        { name: "PHP", icon: "/portfolio-v2/images/skills/php.svg" },
        { name: "TypeScript", icon: "/portfolio-v2/images/skills/ts.svg" },
        { name: "JavaScript", icon: "/portfolio-v2/images/skills/js.svg" },
        { name: "Pyhton", icon: "/portfolio-v2/images/skills/python.svg" },
        { name: "C++", icon: "/portfolio-v2/images/skills/cpp.svg" },
        { name: "C", icon: "/portfolio-v2/images/skills/c.svg" },
        { name: "PostgreSQL", icon: "/portfolio-v2/images/skills/pg.svg" },
        { name: "MySQL", icon: "/portfolio-v2/images/skills/mysql.svg" },
        { name: "MongoDB", icon: "/portfolio-v2/images/skills/mongo.svg" },
      ],
    },
    {
      header: "Frameworks & Libraries",
      items: [
        { name: "Node.js", icon: "/portfolio-v2/images/skills/node.svg" },
        { name: "Express", icon: "/portfolio-v2/images/skills/express.svg" },
        { name: "Jest", icon: "/portfolio-v2/images/skills/jest.svg" },
        { name: "React", icon: "/portfolio-v2/images/skills/react.svg" },
        { name: "Laravel", icon: "/portfolio-v2/images/skills/laravel.svg" },
        { name: "Lumen", icon: "/portfolio-v2/images/skills/lumen.svg" },
        { name: "Django", icon: "/portfolio-v2/images/skills/django.svg" },
        { name: "Nuxt.js", icon: "/portfolio-v2/images/skills/nuxt.svg" },
      ],
    },
    {
      header: "Tools & Platforms",
      items: [
        { name: "Docker", icon: "/portfolio-v2/images/skills/docker.svg" },
        { name: "AWS", icon: "/portfolio-v2/images/skills/aws.svg" },
        { name: "Git", icon: "/portfolio-v2/images/skills/git.svg" },
      ],
    },
  ],
  projects: [
    {
      title: "Portfolio v2",
      description:
        "Personal portfolio website built with React. It is a single-page application with a modern design and a responsive layout. ",
      image: "/portfolio-v2/images/projects/portfolio.png",
      url: "https://metinonat.github.io/portfolio-v2/",
      source: "https://github.com/metinonat/portfolio-v2",
      tags: ["Node.js", "React"],
    },
    {
      title: "Drowsiness Detector",
      description:
        "A project to lower cost of driver drowsiness detection systems and make it more accessible. Detection is done by mobile phone and web client provides detailed reports, analytics, and fleet management.",
      url: "https://senior.ceng.metu.edu.tr/2021/drowsiness_detector/",
      image: "/portfolio-v2/images/projects/drowsiness-detector.png",
      tags: [
        "Docker",
        "React",
        "Redis",
        "PostgreSQL",
        "Android Studio",
        ".Net Core",
        "Java",
        "MLKit",
      ],
    },
    {
      title: "Portfolio v1",
      description:
        "Personal portfolio built in basic HTML, CSS, and JavaScript.",
      image: "/portfolio-v2/images/projects/portfolio-v1.png",
      url: "https://metinonat.github.io/Portfolio-v1/",
      source: "https://github.com/metinonat/Portfolio-v1",
      tags: ["Javascript", "HTML", "CSS"],
    },
  ],
};
