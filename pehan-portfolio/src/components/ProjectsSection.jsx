import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI Resume Analyzer",
    description: "An intelligent web application that analyzes resumes using AI to provide actionable feedback, scoring, and improvement suggestions.",
    image: "/projects/1.png",
    tags: ['React','Typescript','TailwindCSS','Puter_API','Vite'],
    demoUrl: "https://puter.com/app/pehans-ai-resume-analyzer-124",
    githubUrl: "https://github.com/Pehan-janu/Ai-Resume-Analyzer.git",
  },
  {
    id: 2,
    title: "Notepad Application",
    description: "Full-stack Notes app built with MongoDB, Express, React, and Node.js. Includes a fully functional REST API, CRUD operations, rate limiting for security, and a responsive, modern UI for seamless user experience.",
    image: "/projects/2.png",
    tags: ['MERN Stack', 'REST API', 'CRUD', 'Responsive Design'],
    demoUrl: "#",
    githubUrl: "https://github.com/Pehan-janu/notes-app.git",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <br />
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on recently. Click on any project to learn more about it.
          Each project highlights my skills and experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col h-full">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                {/* Icons at the bottom */}
                <div className="flex space-x-3 mt-auto">
                  <a 
                    href={project.demoUrl}
                    target="_blank"
                    className="text-fpreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20}/>
                  </a>
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    className="text-fpreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20}/>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            className="cosmic-button w-fit flex items-center mx-auto gap-2" 
            href="https://github.com/Pehan-janu"
            target="_blank"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
