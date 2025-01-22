import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  "React", "TypeScript", "Node.js", "Tailwind CSS",
  "Next.js", "PostgreSQL", "GraphQL", "AWS"
];

export const About = () => {
  return (
    <section className="section-padding bg-secondary" id="about">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>
        <Card>
          <CardContent className="p-6">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg mb-6"
            >
              I'm a passionate developer with experience in building modern web applications.
              I love creating elegant solutions to complex problems and am always eager to
              learn new technologies.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-semibold mb-4">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};