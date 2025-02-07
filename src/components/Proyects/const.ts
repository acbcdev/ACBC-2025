import type { ProyectType } from "@/types/Proyect";

export const projects: ProyectType[] = [
  {
    link: "https://runts.acbc.dev/",
    github: "https://github.com/acbcdev/RunTS",
    img: "/proyects/runts.png",
    tags: ["React", "Playground", "WebWorker"],
    name: "RunTs",
    iconTecnology: "/svg/react.svg",
    description:
      "A TypeScript playground for running typescript code with:  Themes,  Auto-refresh,  Live execution,  Open Source, Open to contributions",
  },
  {
    name: "Trello Clone",
    github: "https://github.com/acbcdev/trello-clone",
    link: "https://trello.acbc.dev/",
    img: "/proyects/trello.png",
    tags: ["Angular", "Tailwindcss"],
    description:
      " Trello Clone with Angular:  A Feature-Rich Task Management App  with Drag-and-Drop Functionality  and Local Persistence ",
    iconTecnology: "/svg/angular.svg",
  },
  {
    name: "Spooky Histories",
    link: "https://hackthon-cloudinary.acbc.dev/",
    github: "https://github.com/acbcdev/hackthon-cloudinary",
    img: "/proyects/spooky.png",
    tags: ["Nextjs", "Tailwindcss", "Cloudinary"],
    description:
      "Interactive AI storyteller that generates dynamic spooky tales from your images. Choose your path, modify images, and craft your own haunting adventure ",
    iconTecnology: "/svg/nextjs.svg",
  },

  {
    description:
      " Short Link URL Generator:  Create Compact and Shareable Links Effortlessly ✂️",
    github: "https://github.com/acbcdev/LinkMinify",
    link: "https://link.acbc.dev/",
    img: "/proyects/link.png",
    tags: ["Nextjs", "Tailwindcss", "Mongodb"],
    name: "LinkMinify",
    iconTecnology: "/svg/nextjs.svg",
  },
  {
    name: "Query Selector Tool",
    github: "https://github.com/acbcdev/Dom-Selector-extension",
    link: "https://chromewebstore.google.com/detail/Query%20Selector%20Tool/hekfcclbnbohbhadpngnnoodkmohgeib",
    description:
      " Query Selector Tool:  A Chrome Extension that allows you to easily select DOM elements using CSS selectors ",
    img: "/proyects/query.png",
    tags: ["Chrome Extension"],
    iconTecnology: "/svg/chrome.svg",
  },
];
