import type { ProyectType } from "@/types/Proyect";
// <div class="col-span-4">1</div>
//   <div class="row-start-2">2</div>
//   <div class="col-span-3 row-start-2">3</div>
//   <div class="col-span-2 row-start-3">5</div>
//   <div class="col-span-2 col-start-3 row-start-3">7</div>
export const projects: ProyectType[] = [
  {
    link: "https://runts.acbc.dev/",
    github: "https://github.com/acbcdev/RunTS",
    img: "/proyects/runts.webp",
    tags: ["React", "Playground", "WebWorker"],
    name: "RunTs",
    iconTecnology: "/svg/react.svg",
    favicon: "https://runts.acbc.dev/logo.svg",
    classNames: "col-span-4",
    description:
      "A TypeScript playground for running typescript code with:  Themes,  Auto-refresh,  Live execution,  Open Source, Open to contributions",
  },
  {
    name: "Trello Clone",
    classNames: "row-start-2",
    github: "https://github.com/acbcdev/trello-clone",
    link: "https://trello.acbc.dev/",
    img: "/proyects/trello.webp",
    tags: ["Angular", "Tailwindcss"],
    description:
      " Trello Clone with Angular:  A Feature-Rich Task Management App  with Drag-and-Drop Functionality  and Local Persistence ",
    iconTecnology: "/svg/angular.svg",
  },
  {
    name: "Spooky Histories",
    // link: "https://hackthon-cloudinary.acbc.dev/",
    classNames: "col-span-3 row-start-2",
    github: "https://github.com/acbcdev/hackthon-cloudinary",
    img: "/proyects/spooky.webp",
    // favicon: "https://hackthon-cloudinary.acbc.dev/icon.svg",
    tags: ["Nextjs", "Tailwindcss", "Cloudinary"],
    description:
      "Interactive AI storyteller that generates dynamic spooky tales from your images. Choose your path, modify images, and craft your own haunting adventure ",
    iconTecnology: "/svg/nextjs.svg",
  },

  {
    description:
      " Short Link URL Generator:  Create Compact and Shareable Links Effortlessly ✂️",
    github: "https://github.com/acbcdev/LinkMinify",
    classNames: "col-span-2 row-start-3",
    link: "https://link.acbc.dev/",
    img: "/proyects/link.webp",
    tags: ["Nextjs", "Tailwindcss", "Mongodb"],
    name: "LinkMinify",
    iconTecnology: "/svg/nextjs.svg",
  },
  {
    name: "Query Selector Tool",
    github: "https://github.com/acbcdev/Dom-Selector-extension",
    classNames: "col-span-2 col-start-3 row-start-3",
    link: "https://chromewebstore.google.com/detail/Query%20Selector%20Tool/hekfcclbnbohbhadpngnnoodkmohgeib",
    description:
      " Query Selector Tool:  A Chrome Extension that allows you to easily select DOM elements using CSS selectors ",
    img: "/proyects/query.webp",
    tags: ["Chrome Extension"],
    iconTecnology: "/svg/chrome.svg",
  },
];
