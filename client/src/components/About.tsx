import { motion } from "framer-motion";
import { Award, Zap, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Performance First",
    description: "Expertise in optimization techniques, ensuring fast load times and smooth interactions."
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Proven track record of mentoring developers and leading technical initiatives."
  },
  {
    icon: Award,
    title: "Architecture",
    description: "Specialized in Micro-Frontends and scalable component architectures."
  }
];

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 bg-card border border-border/50 rounded-2xl p-8 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">About Me</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I am an experienced Frontend Engineer with over <span className="text-foreground font-semibold">10 years of expertise</span> in designing and building scalable, high-performance web applications.
                </p>
                <p>
                  My journey spans from early startups to large enterprises like Lowe's, where I currently lead frontend initiatives. I specialize in the modern JavaScript ecosystem, particularly React, Micro-Frontends, and building accessible, user-centric interfaces.
                </p>
                <p>
                  Beyond code, I am passionate about mentoring teams, establishing best practices, and translating complex business requirements into elegant technical solutions.
                </p>
              </div>
            </div>
            
            {/* Decorative background element */}
            <div className="absolute top-4 -right-4 w-full h-full bg-primary/5 rounded-2xl -z-10 border border-primary/10" />
          </motion.div>

          <div className="grid gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-background border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all"
              >
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
