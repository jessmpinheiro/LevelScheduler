import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Email configuration
interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

// Create default email configuration
const defaultConfig: EmailConfig = {
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER || '',
    pass: process.env.EMAIL_PASS || ''
  }
};

// Appointment interface
interface Appointment {
  name: string;
  email: string;
  startTime: string;
  endTime: string;
  timezone: string;
  notes?: string;
}

// Create a transporter
let transporter: nodemailer.Transporter;

// Initialize the email transporter
export function initializeEmailService(config: EmailConfig = defaultConfig) {
  // Only initialize if credentials are available
  if (config.auth.user && config.auth.pass) {
    transporter = nodemailer.createTransport(config);
    console.log('Email service initialized');
    return true;
  } else {
    console.log('Email service not initialized - missing credentials');
    return false;
  }
}

// Send appointment notification to recipient
export async function sendAppointmentNotification(appointment: Appointment): Promise<boolean> {
  // If transporter isn't initialized, try to initialize it
  if (!transporter) {
    if (!initializeEmailService()) {
      console.error('Cannot send email: Email service not initialized');
      return false;
    }
  }

  // Format date for email
  const startDate = new Date(appointment.startTime);
  const formattedDate = startDate.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: appointment.timezone
  });

  try {
    // Send to the website owner (you)
    const ownerInfo = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.NOTIFICATION_EMAIL || process.env.EMAIL_USER,
      subject: `New Appointment Scheduled: ${appointment.name}`,
      html: `
        <h1>New Appointment Scheduled</h1>
        <p>You have a new English level assessment appointment scheduled.</p>
        <h2>Appointment Details:</h2>
        <ul>
          <li><strong>Student:</strong> ${appointment.name}</li>
          <li><strong>Email:</strong> ${appointment.email}</li>
          <li><strong>Date & Time:</strong> ${formattedDate}</li>
          ${appointment.notes ? `<li><strong>Notes:</strong> ${appointment.notes}</li>` : ''}
        </ul>
      `
    });

    // Send to the student
    const studentInfo = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: appointment.email,
      subject: 'Your English Level Assessment Appointment Confirmation',
      html: `
        <h1>Your Appointment is Confirmed</h1>
        <p>Thank you for scheduling an English level assessment appointment.</p>
        <h2>Appointment Details:</h2>
        <ul>
          <li><strong>Date & Time:</strong> ${formattedDate}</li>
          <li><strong>With:</strong> Jessica Pinheiro</li>
        </ul>
        <p>If you need to reschedule or cancel, please visit the original scheduling link.</p>
        <br>
        <p>We look forward to helping you with your English language journey!</p>
      `
    });

    console.log('Appointment notification sent:', ownerInfo.messageId, studentInfo.messageId);
    return true;
  } catch (error) {
    console.error('Failed to send email notification:', error);
    return false;
  }
}