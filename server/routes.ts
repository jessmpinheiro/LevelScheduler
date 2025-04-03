import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  initializeEmailService, 
  sendAppointmentNotification, 
  sendWaitlistNotification, 
  type WaitlistSignup 
} from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Initialize email service if environment variables are set
  initializeEmailService();

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

  // Calendly webhook endpoint for receiving appointment notifications
  app.post("/api/webhooks/calendly", async (req: Request, res: Response) => {
    try {
      const event = req.body;
      console.log("Received Calendly webhook:", JSON.stringify(event, null, 2));
      
      // Validate the webhook payload
      if (!event || !event.event || event.event !== 'invitee.created') {
        return res.status(400).json({ 
          status: "error", 
          message: "Invalid webhook payload or not a booking event" 
        });
      }

      // Extract appointment information
      const payload = event.payload;
      const invitee = payload.invitee;
      const appointment = {
        name: invitee.name,
        email: invitee.email,
        startTime: payload.scheduled_event.start_time,
        endTime: payload.scheduled_event.end_time,
        timezone: invitee.timezone,
        notes: invitee.questions_and_answers ? 
          invitee.questions_and_answers.map((qa: any) => `${qa.question}: ${qa.answer}`).join(', ') : 
          undefined
      };

      // Send email notification
      const emailSent = await sendAppointmentNotification(appointment);
      
      if (emailSent) {
        res.json({ status: "success", message: "Notification sent successfully" });
      } else {
        // Still return 200 to Calendly even if email fails
        // This prevents Calendly from retrying and potentially sending duplicate notifications
        res.status(200).json({ 
          status: "partial", 
          message: "Webhook received, but email notification failed" 
        });
      }
    } catch (error) {
      console.error("Error processing Calendly webhook:", error);
      // Return 200 so Calendly doesn't continuously retry
      res.status(200).json({ 
        status: "error", 
        message: "Error processing webhook, but acknowledged" 
      });
    }
  });

  // Handle waitlist sign-ups
  app.post("/api/waitlist-signup", async (req: Request, res: Response) => {
    try {
      const signupData = req.body as WaitlistSignup;
      
      // Validate required fields
      if (!signupData.name || !signupData.email || !signupData.program) {
        return res.status(400).json({
          status: "error",
          message: "Missing required fields (name, email, or program)"
        });
      }
      
      console.log("Received waitlist signup:", JSON.stringify(signupData, null, 2));
      
      // Send notification to Jessica (direct to her email)
      const notificationSent = await sendWaitlistNotification(signupData);
      
      if (notificationSent) {
        res.json({ 
          status: "success", 
          message: "Waitlist registration successful" 
        });
      } else {
        // If email fails, we still want to acknowledge the signup
        res.status(200).json({
          status: "partial",
          message: "Waitlist registration received, but notification failed"
        });
      }
    } catch (error) {
      console.error("Error processing waitlist signup:", error);
      res.status(500).json({
        status: "error",
        message: "Error processing waitlist signup"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
