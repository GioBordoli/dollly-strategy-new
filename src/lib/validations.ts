import { z } from "zod";
export const LeadSchema = z.object({
  nome: z.string().min(2),
  cognome: z.string().min(2),
  email: z.string().email(),
  telefono: z.string().min(6),
});
export type LeadInput = z.infer<typeof LeadSchema>; 