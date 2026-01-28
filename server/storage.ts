import {
  type InsertProject,
  type InsertMessage,
  type Project,
  type Message
} from "@shared/schema";

export interface IStorage {
  getProjects(): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
  createMessage(message: InsertMessage): Promise<Message>;
}

 export class MemoryStorage implements IStorage {
   private projects: Project[] = [];
   private messages: Message[] = [];
   private nextProjectId = 1;
   private nextMessageId = 1;

   async getProjects(): Promise<Project[]> {
     return [...this.projects].sort((a, b) => a.id - b.id);
   }

   async createProject(project: InsertProject): Promise<Project> {
     const newProject: Project = {
       id: this.nextProjectId++,
       createdAt: new Date(),
       title: project.title,
       description: project.description,
       techStack: project.techStack,
       githubUrl: project.githubUrl ?? null,
       demoUrl: project.demoUrl ?? null,
       imageUrl: project.imageUrl ?? null,
     };
     this.projects.push(newProject);
     return newProject;
   }

   async createMessage(message: InsertMessage): Promise<Message> {
     const newMessage: Message = {
       id: this.nextMessageId++,
       createdAt: new Date(),
       name: message.name,
       email: message.email,
       message: message.message,
     };
     this.messages.push(newMessage);
     return newMessage;
   }
 }

 export const storage = new MemoryStorage();
