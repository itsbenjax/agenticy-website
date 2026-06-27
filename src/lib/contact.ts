import type { ValidationError } from "./validators";
import { contactSchema, formatZodErrors } from "./validators";

export interface ContactResult {
  success: boolean;
  message: string;
  errors?: ValidationError[];
}

/**
 * Process a contact form submission.
 *
 * Currently logs to console. In production, replace with:
 * - Email sending (Resend, SendGrid, Nodemailer, etc.)
 * - CRM integration (HubSpot, Salesforce)
 * - Database storage
 * - Slack/Discord notification
 */
export async function handleContact(data: unknown): Promise<ContactResult> {
  // Validate input
  const parsed = contactSchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
      message: "Error de validación. Revisa los campos e inténtalo de nuevo.",
      errors: formatZodErrors(parsed.error),
    };
  }

  const { nombre, email, empresa, mensaje } = parsed.data;

  // In production: send email, store in DB, notify team
  console.log("[Contact Form Submission]", {
    nombre,
    email,
    empresa,
    mensaje: mensaje.substring(0, 100) + (mensaje.length > 100 ? "..." : ""),
    timestamp: new Date().toISOString(),
  });

  return {
    success: true,
    message: "Mensaje recibido correctamente. Nos pondremos en contacto pronto.",
  };
}