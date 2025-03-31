import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Add a health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Add metadata about the service
  app.get("/api/info", (req, res) => {
    res.json({
      name: "English Level Assessment Service",
      description: "A service for assessing English proficiency and scheduling consultations",
      version: "1.0.0"
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
