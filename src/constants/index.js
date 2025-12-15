const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 2,
    name: "Contact",
    type: "contact",
  },
  {
    id: 3,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio",
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Experience",
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery",
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact",
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills",
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive",
    icon: "trash.png",
    canOpen: true,
  },
];

const expList = [
  {
    id: 1,
    date: "Sep - Nov, 2025",
    title: "React.js Intern · GKM IT (On-site, Udaipur)",
    image: "/images/logo-gkmit.png",
    link: null,
  },
  {
    id: 2,
    date: "Jun - Aug, 2024",
    title: "Frontend Developer Intern · CSRBOX (Remote)",
    image: "/images/logo-csrbox.png",
    link: "https://www.linkedin.com/posts/divyanshjain749_ibm-skillsbuild-front-end-internship-certificate-activity-7233354546339561473-hPlJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEIMTtMBWIV6WWPRkMHGFI0X11OJUhrcBn8",
  },
  {
    id: 3,
    date: "May - Jun, 2024",
    title: "Full-Stack Developer Intern · Cognifyz Technologies (Remote)",
    image: "/images/logo-cognifyz.webp",
    link: "https://www.linkedin.com/posts/divyanshjain749_codejourney-developmentskills-cognifyztechnologies-activity-7213929418312847360-7Ery?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEIMTtMBWIV6WWPRkMHGFI0X11OJUhrcBn8",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "JavaScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "REST APIs"],
  },
  {
    category: "Programming",
    items: ["JavaScript (ES6+)", "C++", "C"],
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Postman", "Docker"],
  },
  {
    category: "Design Tools",
    items: ["Figma", "Canva"],
  },
];

const socials = [
  {
    id: 1,
    text: "GitHub",
    icon: "/icons/github.svg",
    bg: "#2E2E2E",
    link: "https://github.com/divyanshdj",
  },
  {
    id: 2,
    text: "Portfolio",
    icon: "/icons/atom.svg",
    bg: "#6366F1",
    link: "https://divyanshportfoilo.netlify.app",
  },
  {
    id: 3,
    text: "Twitter / X",
    icon: "/icons/twitter.svg",
    bg: "#ff6c48",
    link: "https://x.com/divyansh_dj3",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#0A66C2", 
    link: "https://www.linkedin.com/in/divyanshjain749/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    name: "Code",
    imageUrl: "/images/code.jpeg",
  },
  {
    id: 2,
    name: "Divyansh",
    imageUrl: "/images/divyansh-2.jpeg",
  },
  {
    id: 3,
    name: "LearnX",
    imageUrl: "/images/project-1.png",
  },
  {
    id: 4,
    name: "Zoro",
    imageUrl: "/images/zoro.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  expList,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    {
      id: "learnx",
      name: "LearnX LMS Application",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[2vh] right-0",
      children: [
        {
          id: 1,
          name: "LearnX LMS Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          subtitle: "Full-Stack Learning Management System",
          link: "https://learnx-lms.vercel.app",
          image: "/images/project-1.png",
          description: [
            "LearnX LMS is a modern full-stack Learning Management System designed to deliver a complete online learning experience.",
            "It provides role-based access for Students and Instructors with dedicated dashboards and secure authentication.",
            "Users can create, browse, and manage courses with structured video-based learning.",
            "The frontend is built using React, Vite, Tailwind CSS, React Router DOM, and shadcn/ui for a fast and responsive UI.",
            "The backend uses Node.js, Express, and MongoDB with RESTful APIs, JWT authentication, Cloudinary file uploads.",
          ],
        },
        {
          id: 2,
          name: "learnx-lms.vercel.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://learnx-lms.vercel.app",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "learnx.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/learnx-appflow.jpg",
        },
        {
          id: 4,
          name: "learnx-docs",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://divyanshdj.github.io/learnx-docs/",
          position: "top-60 right-20",
        },
      ],
    },
    {
      id: "tastehub",
      name: "TasteHub - Food Delivery App",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] right-0",
      children: [
        {
          id: 1,
          name: "TasteHub Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          subtitle: "Swiggy-Inspired Food Delivery Web App",
          link: "https://taste-hub-food.vercel.app",
          image: "/images/project-2.png",
          description: [
            "TasteHub is a Swiggy-inspired food delivery web application built to deliver a fast and responsive ordering experience.",
            "It integrates real-time Swiggy APIs to fetch restaurant data, menus, and dynamic content for both mobile and desktop users.",
            "The app features cart management using Redux Toolkit with persistent storage, search and filter functionality, and toast alerts for better UX.",
            "Built using React, Redux Toolkit, React Router, Parcel, and modern JavaScript, TasteHub focuses on performance, scalability, and clean UI design.",
            "The project is actively evolving with planned features like authentication, order tracking, payments, and AI-powered recommendations.",
          ],
        },
        {
          id: 2,
          name: "taste-hub-food.vercel.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://taste-hub-food.vercel.app",
          position: "top-20 left-20",
        },
        {
          id: 3,
          name: "tastehub.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/tastehub-appflow.jpg",
        },
        {
          id: 4,
          name: "tastehub-github",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/divyanshdj/tastehub-food-app",
          position: "top-60 left-5",
        },
      ],
    },
    {
      id: "movieflix",
      name: "Movie Flix - Movie Explorer App",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[38vh] right-0",
      children: [
        {
          id: 1,
          name: "Movie Flix Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          subtitle: "Movie & TV Show Discovery App using TMDB",
          link: "https://movie-flixx-web.vercel.app/",
          image: "/images/project-3.png",
          description: [
            "Movie Flix is a React-based movie discovery application that fetches real-time movie and TV show data from the TMDB API.",
            "It features live search with debouncing, detailed movie pages with cast information, and support for Movies, TV Shows, or both.",
            "Trending movies are managed through an Appwrite backend, while liked movies are stored locally using browser storage.",
            "The app includes a responsive, dark-themed UI built with Tailwind CSS and modern React hooks for smooth performance.",
            "Movie Flix focuses on clean UI, dynamic rendering, and scalability with support for multiple content types.",
          ],
        },
        {
          id: 2,
          name: "movie-flixx-web.vercel.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://movie-flixx-web.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "movie-flix.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/movieflix-appflow.jpg",
        },
        {
          id: 4,
          name: "movie-flix-github",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/divyanshdj/movie-flix",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/divyansh.jpeg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 right-40",
      imageUrl: "/images/divyansh-2.jpeg",
    },
    {
      id: 3,
      name: "rider-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/divyansh-3.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/divyanshdj.jpeg",
      link: "https://www.linkedin.com/in/divyanshjain749/",
      description: [
        "Hi, I’m Divyansh 👋, a Computer Science & Engineering student and aspiring software engineer passionate about building modern web applications.",
        "I work primarily with React, JavaScript, and full-stack technologies, focusing on clean UI, smooth UX, and scalable code.",
        "I enjoy turning ideas into real products whether it’s a learning platform, a movie discovery app, or a food delivery system.",
        "Beyond coding, I love exploring design, video editing, gaming, swimming, and staying curious about new tech trends.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };

export const FONT_WEIGHTS = {
  subtitle: { min: 100, max: 400, default: 100 },
  title: { min: 400, max: 700, default: 400 },
};