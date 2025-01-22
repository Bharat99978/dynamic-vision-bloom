import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Project One",
    description: "A full-stack web application built with React and Node.js",
    tags: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    title: "Project Two",
    description: "Mobile-first e-commerce platform with real-time updates",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    title: "Project Three",
    description: "Real-time chat application with WebSocket integration",
    tags: ["React", "Socket.io", "Express"],
    github: "https://github.com",
    live: "https://example.com"
  }
];

export const Projects = () => {
  return (
    <section className="section-padding" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    {project.title}
                    <div className="flex gap-2">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" 
                         className="hover:text-primary transition-colors">
                        <Github size={20} />
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer"
                         className="hover:text-primary transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};