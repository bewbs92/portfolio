import { z } from "zod";

// === SCHEMAS ===
export const projectSchema = z.object({
  id: z.number().int().positive(),
  title: z.string().min(1),
  description: z.string().min(1),
  techStack: z.array(z.string().min(1)),
  githubUrl: z.string().url().optional().nullable(),
  demoUrl: z.string().url().optional().nullable(),
  imageUrl: z.string().url().optional().nullable(),
  createdAt: z.date(),
});

export const messageSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
  createdAt: z.date(),
});

export const insertProjectSchema = projectSchema.omit({ id: true, createdAt: true });
export const insertMessageSchema = messageSchema.omit({ id: true, createdAt: true });

// === API TYPES ===
export type Project = z.infer<typeof projectSchema>;
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Message = z.infer<typeof messageSchema>;
export type InsertMessage = z.infer<typeof insertMessageSchema>;
