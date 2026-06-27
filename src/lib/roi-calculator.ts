import type { RoiInput, TipoServicio, ValidationError } from "./validators";
import { roiSchema, formatZodErrors } from "./validators";

export interface RoiResult {
  /** Ahorro anual estimado en USD */
  ahorroAnual: number;
  /** Costo de implementación único en USD */
  costoImplementacion: number;
  /** Retorno de inversión como porcentaje (ej. 150 = 150%) */
  roi: number;
  /** Meses para recuperar la inversión */
  paybackMeses: number;
}

export interface RoiResponse {
  success: boolean;
  data?: RoiResult;
  errors?: ValidationError[];
  message?: string;
}

// ─── Constants ───────────────────────────────────────────────────────

/** Horas laborales semanales estándar */
const HORAS_LABORALES_SEMANA = 40;

/** Eficiencia estimada de la automatización (70%) */
const EFICIENCIA_AUTOMATIZACION = 0.7;

/** Costo por empleado según tipo de servicio */
const COSTO_POR_EMPLEADO: Record<TipoServicio, number> = {
  agentes: 2_000,
  rag: 3_500,
  completo: 5_000,
};

// ─── Calculation ─────────────────────────────────────────────────────

/**
 * Calculate ROI for AI agent implementation.
 *
 * Formulas:
 *   ahorroAnual = empleados × salarioPromedio × (horasAutomatizables / 40) × 0.7
 *   costoImplementacion = empleados × costoPorTipo
 *   roi = ((ahorroAnual - costoImplementacion) / costoImplementacion) × 100
 *   paybackMeses = costoImplementacion / (ahorroAnual / 12)
 */
export function calculateRoi(input: RoiInput): RoiResult {
  const { empleados, salarioPromedio, horasAutomatizables, tipoServicio } = input;

  const proporcionTiempo = horasAutomatizables / HORAS_LABORALES_SEMANA;
  const ahorroAnual = empleados * salarioPromedio * proporcionTiempo * EFICIENCIA_AUTOMATIZACION;

  const costoImplementacion = empleados * COSTO_POR_EMPLEADO[tipoServicio];

  const roi = ((ahorroAnual - costoImplementacion) / costoImplementacion) * 100;

  const paybackMeses = costoImplementacion / (ahorroAnual / 12);

  return {
    ahorroAnual: Math.round(ahorroAnual * 100) / 100,
    costoImplementacion: Math.round(costoImplementacion * 100) / 100,
    roi: Math.round(roi * 100) / 100,
    paybackMeses: Math.round(paybackMeses * 10) / 10,
  };
}

/**
 * Validate and calculate ROI from raw input.
 * Returns a structured response with either data or validation errors.
 */
export function handleRoiCalculation(data: unknown): RoiResponse {
  const parsed = roiSchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
      message: "Error de validación. Revisa los campos e inténtalo de nuevo.",
      errors: formatZodErrors(parsed.error),
    };
  }

  const result = calculateRoi(parsed.data);

  return {
    success: true,
    data: result,
  };
}