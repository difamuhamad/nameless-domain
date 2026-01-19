import { CodeXml, Wrench } from "lucide-react";
import { motion } from "motion/react";
import { OrbitingCircles } from "./ui/orbiting-circles";
import TechStack from "./tech-stack";
import ReactSvg from "../assets/react-svgrepo-com.svg";
import GoSvg from "../assets/go-svgrepo-com.svg";
import TsLogo from "../assets/typescript-svgrepo-com.svg";
import ShadcnLogo from "../assets/shadcn-logo.png";
import ElysiaLogo from "../assets/elysia-svgrepo.svg";
import PostgresLogo from "../assets/pgsql-svgrepo-com.svg";
import { Highlighter } from "./ui/highlighter";

export default function SkillSection() {
  const Icons = {
    typescript: () => <img src={TsLogo} alt="React" />,
    react: () => <img src={ReactSvg} alt="React" />,
    golang: () => <img src={GoSvg} alt="Golang" />,
    shadcn: () => (
      <img src={ShadcnLogo} alt="Shadcn" className="border rounded" />
    ),
    postgres: () => <img src={PostgresLogo} alt="PostgreSQL" />,
    elysia: () => (
      <img src={ElysiaLogo} alt="Elysia JS" className="w-10 h-10" />
    ),
    tailwind: () => (
      <img src="https://cdn.simpleicons.org/tailwindcss" alt="Golang" />
    ),
    prisma: () => (
      <img
        src="https://cdn.simpleicons.org/prisma"
        alt="Prisma ORM"
        className="w-10 h-10"
      />
    ),
  };

  return (
    <div id="skills" className="min-h-screen w-full text-gray-800">
      <div id="skills-container" className="container mx-auto px-4 py-16">
        {/* Skills Header */}
        <motion.div
          id="skills-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mt-10"
        >
          <h1 id="skills-title" className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-2xl sm:text-xl md:text-6xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-500">
              Skills & Technologies
            </span>
          </h1>
          <p
            id="skills-subtitle"
            className="text-gray-600 text-base max-w-2xl mx-auto"
          >
            My technical toolkit for building modern applications
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <div
          id="skills-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {/* Tools and Software */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2 * 0.1 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
          >
            <div className="bg-linear-to-r from-blue-50 to-cyan-50 p-6 border-b border-gray-200">
              <div className="flex items-center justify-center gap-3">
                <div className="p-3 rounded-lg bg-linear-to-r from-blue-100 to-cyan-100 border border-blue-200">
                  <Wrench className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Technologies, Tools, and Software
                </h2>
              </div>
            </div>
            {/* Skills Box */}
            <TechStack />
          </motion.div>

          {/* Orbiting Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 * 0.1 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
          >
            {" "}
            <div className="bg-linear-to-r from-blue-50 to-cyan-50 p-6 border-b border-gray-200">
              <div className="flex items-center justify-center gap-3">
                <div className="p-3 rounded-lg bg-linear-to-r from-blue-100 to-cyan-100 border border-blue-200">
                  <CodeXml className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Favourite Tech Stack
                </h2>
              </div>
            </div>
            <div>
              <div className="relative flex h-125 w-full flex-col items-center justify-center overflow-hidden">
                {/* Frontend */}
                <OrbitingCircles iconSize={40} speed={0.2}>
                  <Icons.typescript />
                  <Icons.react />
                  <Icons.tailwind />
                  <Icons.shadcn />
                </OrbitingCircles>
                {/* Backend */}
                <OrbitingCircles iconSize={50} radius={80} reverse speed={0.8}>
                  <Icons.elysia />
                  <Icons.prisma />
                  <Icons.postgres />
                </OrbitingCircles>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Footer */}
        <div className=" flex justify-center items-center mt-10 mx-5 md:mx-20">
          <p>
            Continuously exploring new technologies and expand my toolkit to{" "}
            <Highlighter action="underline" color="#FF9800">
              solve complex problems more effectively.
            </Highlighter>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
