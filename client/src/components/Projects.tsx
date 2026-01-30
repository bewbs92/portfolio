import { useProjects } from "@/hooks/use-portfolio";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import vehicleImage from "@/assets/vehicle.png";

export function Projects() {
  const { data: projects, isLoading } = useProjects();

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">
              A selection of personal and hobby projects showcasing my passion for building.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <motion.div
            key={"1"}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group flex flex-col h-full bg-card rounded-2xl border border-border shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
          >

            <div className="aspect-[16/9] overflow-hidden bg-muted">
              {/* Use Unsplash image if provided, otherwise placeholder handled by img onError or specific logic */}
              <img
                src={vehicleImage}
                alt={"project.title"}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>


            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                Service Log & Maintenance Dashboard
              </h3>
              <p className="text-muted-foreground mb-6 line-clamp-3 flex-grow">
                A full-scale vehicle maintenance app built using Replit, Windsurf, React, and Supabase. Features service history, workshop assignment, and "next service due" reminders with a modern dashboard UI and Supabase-backed authentication/data.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">

                <Badge key={"tech"} variant="secondary" className="font-normal">
                  React
                </Badge>
                <Badge key={"tech"} variant="secondary" className="font-normal">
                  WindSurf
                </Badge>
                <Badge key={"tech"} variant="secondary" className="font-normal">
                  MUI
                </Badge>
                <Badge key={"tech"} variant="secondary" className="font-normal">
                  Supabase
                </Badge>
                <Badge key={"tech"} variant="secondary" className="font-normal">
                  Vercel
                </Badge>
              </div>

              <div className="flex gap-4 mt-auto pt-4 border-t border-border/50">

                <a href={"https://github.com/bewbs92/vehicle-maintenance-tracker"} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    <Github className="w-4 h-4" /> Code
                  </Button>
                </a>


                <a href={"https://vehicle-maintenance-tracker-nine.vercel.app/"} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button size="sm" className="w-full gap-2 shadow-lg shadow-primary/20">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </Button>
                </a>

              </div>
            </div>
          </motion.div>


          {/* Empty State / Call to Action if no projects */}
          {/* {projects?.length === 0 && (
              <div className="col-span-full text-center py-20 text-muted-foreground bg-secondary/20 rounded-2xl border border-dashed border-border">
                <p>No projects added yet. Check back soon!</p>
              </div>
            )} */}
        </div>

      </div>
    </section>
  );
}
