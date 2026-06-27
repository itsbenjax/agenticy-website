import { z } from "zod";

// ─── Contact Form Schema ────────────────────────────────────────────

export const contactSchema = z.object({
  nombre: z
    .string({ error: "El nombre es requerido" })
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" })
    .max(200, { message: "El nombre no puede exceder los 200 caracteres" })
    .trim(),
  email: z
    .string({ error: "El email es requerido" })
    .email({ message: "Debe ser un email válido" })
    .max(320, { message: "El email no puede exceder los 320 caracteres" })
    .trim()
    .toLowerCase(),
  empresa: z
    .string({ error: "La empresa es requerida" })
    .min(1, { message: "La empresa es requerida" })
    .max(200, { message: "La empresa no puede exceder los 200 caracteres" })
    .trim(),
  mensaje: z
    .string({ error: "El mensaje es requerido" })
    .min(10, { message: "El mensaje debe tener al menos 10 caracteres" })
    .max(5000, { message: "El mensaje no puede exceder los 5000 caracteres" })
    .trim(),
});

export type ContactInput = z.infer<typeof contactSchema>;

// ─── ROI Calculator Schema ──────────────────────────────────────────

export const tipoServicioEnum = z.enum(["agentes", "rag", "completo"], {
  error: "Tipo de servicio inválido. Use: agentes, rag, o completo",
});

export type TipoServicio = z.infer<typeof tipoServicioEnum>;

export const roiSchema = z.object({
  empleados: z
    .number({
      error: "El número de empleados es requerido",
    })
    .int({ message: "Empleados debe ser un número entero" })
    .min(1, { message: "Debe haber al menos 1 empleado" })
    .max(100_000, { message: "Máximo 100,000 empleados" }),
  salarioPromedio: z
    .number({
      error: "El salario promedio es requerido",
    })
    .min(10_000, { message: "El salario promedio mínimo es 10,000" })
    .max(10_000_000, { message: "El salario promedio no puede exceder 10,000,000" }),
  horasAutomatizables: z
    .number({
      error: "Las horas automatizables son requeridas",
    })
    .int({ message: "Horas automatizables debe ser un número entero" })
    .min(1, { message: "Debe haber al menos 1 hora automatizable" })
    .max(168, { message: "Máximo 168 horas (24×7)" }),
  tipoServicio: tipoServicioEnum,
});

export type RoiInput = z.infer<typeof roiSchema>;

// ─── Helpers ────────────────────────────────────────────────────────

export interface ValidationError {
  field: string;
  message: string;
}

export function formatZodErrors(error: z.ZodError): ValidationError[] {
  return error.issues.map((e) => ({
    field: e.path.join("."),
    message: e.message,
  }));
}