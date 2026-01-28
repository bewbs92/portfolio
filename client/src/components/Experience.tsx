import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Tech Lead",
    company: "Lowe's (Intelliswift)",
    period: "Apr 2024 - Present",
    description: "Leading PDP & configurable PDP development. Designed Micro-Frontends (MFEs) from ground up. Revamped Visualizer MFE and mentored the team."
  },
  {
    role: "Senior Frontend Developer",
    company: "Navya Care",
    period: "May 2022 - Oct 2023",
    description: "Optimized customer-facing apps and conducted usability testing. Improved patient engagement by 25% through performance enhancements."
  },
  {
    role: "Senior Frontend Developer",
    company: "Stixis Technologies",
    period: "Aug 2021 - Apr 2022",
    description: "Focused on React.js ecosystem development and mentored junior developers on best practices and code quality."
  },
  {
    role: "Senior Developer",
    company: "Bounce / WickedRide",
    period: "Oct 2017 - Mar 2021",
    description: "Developed fleet management applications and ensured accessibility compliance across internal tools."
  },
  {
    role: "Frontend Developer",
    company: "Ebix / Healthcare Magic / Glowroad",
    period: "Dec 2015 - Oct 2017",
    description: "Built responsive user interfaces and integrated RESTful APIs for e-commerce and healthcare platforms."
  },
  {
    role: "Application Programmer",
    company: "CusineLinks",
    period: "Jan 2015 - Dec 2015",
    description: "Started career building web applications using early frontend technologies and frameworks."
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Professional Journey</h2>
          <p className="text-lg text-muted-foreground">My career path through leading tech companies.</p>
        </div>

        <div className="max-w-4xl mx-auto relative pl-8 md:pl-0">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border block md:hidden" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-center justify-between md:justify-normal mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-[9px] md:-translate-x-1/2 z-10 shadow-sm" />

              {/* Spacer for alternating layout */}
              <div className="hidden md:block w-1/2" />

              {/* Content Card */}
              <div className={`w-full md:w-[calc(50%-2rem)] pl-8 md:pl-0 ${
                index % 2 === 0 ? "md:pl-8" : "md:pr-8 md:text-right"
              }`}>
                <div className={`bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow ${
                  index % 2 === 0 ? "text-left" : "md:text-right text-left"
                }`}>
                  <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                  <div className={`flex items-center gap-2 text-primary font-medium mt-1 mb-3 ${
                    index % 2 === 0 ? "justify-start" : "md:justify-end justify-start"
                  }`}>
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                  <div className={`flex items-center gap-2 text-sm text-muted-foreground mb-4 ${
                    index % 2 === 0 ? "justify-start" : "md:justify-end justify-start"
                  }`}>
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
