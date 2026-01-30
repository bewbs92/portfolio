import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend Core",
    skills: ["React", "Redux", "Next.js", "TypeScript", "HTML5", "CSS3", "JavaScript (ES6+)", "Web Components", "Hooks", "Context API"]
  },
  {
    title: "Styling & UI",
    skills: ["Tailwind CSS", "SASS/SCSS", "Material UI", "Bootstrap", "Styled Components", "Framer Motion", "Storybook", "Responsive Design"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "Webpack", "Vite", "CI/CD Pipelines", "Docker", "Jest", "React Testing Library", "JIRA", "Agile", "Windsurf", "Replit", "Supabase"]
  },
  {
    title: "Architecture & Design",
    skills: ["Micro-Frontends", "Module Federation", "Design Patterns", "State Management", "Performance Optimization", "Accessibility (WCAG)", "Figma"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Technical Expertise</h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive toolbelt honed over a decade of solving complex frontend challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all group"
            >
              <h3 className="text-2xl font-bold mb-6 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium rounded-md bg-secondary text-secondary-foreground border border-transparent group-hover:border-primary/20 group-hover:bg-primary/5 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
