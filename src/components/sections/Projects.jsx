import { FaGithub } from "react-icons/fa";
import  RevealOnScroll from "../RevealOnScroll"

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16 py-10">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-teal-700 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project 1 */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover-border-green-500/30 hover:shadow-[0_0_0_1px_rgba(0,255,136,0.4)] transition-all">
            <h3 className="text-xl text-green-500">Project Name</h3>
            <p className="text-gray-300 my-6">
              This is my Project Description
            </p>

            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "AWS", "Docker"].map((tech) => (
                <span
                  key={tech}
                  className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:text-white hover:shadow-[0_0_0_1px_rgba(0,255,136,0.4)] transition duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center mt-6">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors"
              >
                <FaGithub className="text-xl" />
                <span>View Project</span>
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover-border-green-500/30 hover:shadow-[0_0_0_1px_rgba(0,255,136,0.4)] transition-all">
            <h3 className="text-xl text-green-500">Project 2</h3>
            <p className="text-gray-300 my-6">
              This is my Project Description
            </p>

            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "AWS", "Docker"].map((tech) => (
                <span
                  key={tech}
                  className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:text-white hover:shadow-[0_0_0_1px_rgba(0,255,136,0.4)] transition duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center mt-6">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors"
              >
                <FaGithub className="text-xl" />
                <span>View Project</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
