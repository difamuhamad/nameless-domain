import { Marquee } from "./ui/marquee";

interface TechItem {
  name: string;
  icon: string;
}

interface TechStackProps {
  items: TechItem[];
}

// Front-End Tech
const frontEndTech = [
  { name: "HTML", slug: "html5" },
  { name: "CSS", slug: "css" },
  { name: "JavaScript", slug: "javascript" },
  { name: "TypeScript", slug: "typescript" },
  { name: "React", slug: "react" },
  { name: "Lit", slug: "lit" },
  { name: "Vue", slug: "vue.js" },
  { name: "Nuxt", slug: "nuxt" },
  { name: "NextJS", slug: "nextdotjs" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "Bootstrap", slug: "bootstrap" },
];

// Dev Tools
const devTools = [
  // API & Backend Services
  { name: "Golang", slug: "go" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Express", slug: "express" },
  { name: "Nest", slug: "nestjs" },
  { name: "Postman", slug: "postman" },
  { name: "Supabase", slug: "supabase" },
  { name: "Prisma", slug: "prisma" },
  { name: "Drizzle ORM", slug: "drizzle" },
  { name: "MySQL", slug: "mysql" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "Node.js", slug: "nodedotjs" },
  // { name: "C++", slug: "c++" },
  // { name: "Laravel", slug: "laravel" },
  // { name: "GraphQL", slug: "graphql" },
  // { name: "Wordpress", slug: "wordpress" },
  // { name: "Socket.io", slug: "socketdotio" },

  // UI & Design
  { name: "Figma", slug: "figma" },
  { name: "Shadcn UI", slug: "shadcnui" },

  // Development & Tooling
  { name: "Linux", slug: "linux" },
  { name: "Vite", slug: "vite" },
  { name: "Docker", slug: "docker" },
  { name: "Git", slug: "git" },
  { name: "Github", slug: "github" },
];

const frontEndIcons = frontEndTech.map((tech) => ({
  ...tech,
  icon: `https://cdn.simpleicons.org/${tech.slug}`,
}));

const devToolsIcons = devTools.map((tech) => ({
  ...tech,
  icon: `https://cdn.simpleicons.org/${tech.slug}`,
}));

const StackList: React.FC<TechStackProps> = ({ items }) => (
  <>
    <Marquee className="py-6" pauseOnHover={false}>
      <div className="flex gap-8 md:mt-15">
        {items.map((tech, i) => (
          <div key={i} className="relative group text-center">
            <div
              className="w-20 border h-20 bg-linear-to-b rounded-2xl p-6 transition-all duration-300 
                        hover:scale-110 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]
                        flex items-center justify-center"
            >
              <img
                src={tech.icon}
                alt={`${tech.name} logo`}
                width={55}
                height={55}
                loading="lazy"
              />
            </div>
            <span className="text-sm whitespace-nowrap">{tech.name}</span>
          </div>
        ))}
      </div>
    </Marquee>

    {/* Blur Shadow  */}
    {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-background"></div> */}
    {/* <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-background"></div> */}
  </>
);

const TechStack = () => {
  return (
    <div className="relative">
      <StackList items={frontEndIcons} />
      <StackList items={devToolsIcons} />
    </div>
  );
};

export default TechStack;
