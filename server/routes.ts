import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Projects
  app.get(api.projects.list.path, async (req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.post(api.projects.create.path, async (req, res) => {
    try {
      const input = api.projects.create.input.parse(req.body);
      const project = await storage.createProject(input);
      res.status(201).json(project);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Messages
  app.post(api.messages.create.path, async (req, res) => {
    try {
      const input = api.messages.create.input.parse(req.body);
      const message = await storage.createMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Seed data if empty
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingProjects = await storage.getProjects();
  if (existingProjects.length === 0) {
    await storage.createProject({
      title: "E-Commerce Dashboard",
      description: "A comprehensive analytics dashboard for online retailers featuring real-time data visualization, inventory management, and sales reporting.",
      techStack: ["React", "TypeScript", "D3.js", "Node.js"],
      githubUrl: "https://github.com/bewbs92",
      demoUrl: "https://github.com/bewbs92",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    });

    await storage.createProject({
      title: "Task Management App",
      description: "Collaborative task management tool with drag-and-drop kanban boards, team assignments, and progress tracking.",
      techStack: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
      githubUrl: "https://github.com/bewbs92",
      demoUrl: "https://github.com/bewbs92",
      imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80"
    });

    await storage.createProject({
      title: "Weather Forecast PWA",
      description: "Mobile-first progressive web app providing accurate weather forecasts, severe weather alerts, and interactive maps.",
      techStack: ["React", "PWA", "OpenWeatherMap API", "Styled Components"],
      githubUrl: "https://github.com/bewbs92",
      demoUrl: "https://github.com/bewbs92",
      imageUrl: "https://images.unsplash.com/photo-1592210454132-328629aff8e2?w=800&q=80"
    });
  }
}
