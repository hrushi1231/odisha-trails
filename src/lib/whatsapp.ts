import { z } from "zod";

export const experienceValues = ["Camp With Us", "Rent A Camp", "Koraput Tour", "Rural Stay"] as const;

export const bookingSchema = z.object({
  experience: z.enum(experienceValues, { required_error: "Choose an experience" }),
  destination: z.string().trim().min(2, "Tell us where you want to go").max(120),
  date: z.string().min(1, "Choose a date"),
  guests: z.coerce.number().int().min(1, "At least one guest is required").max(100, "Please enquire for groups over 100"),
  name: z.string().trim().min(2, "Enter your name").max(80),
  phone: z.string().trim().regex(/^\+?[0-9\s-]{8,18}$/, "Enter a valid WhatsApp number"),
  message: z.string().trim().max(600, "Keep your note under 600 characters").optional(),
  pickupPoint: z.string().trim().max(120).optional(),
});

export type BookingValues = z.infer<typeof bookingSchema>;

export function createWhatsAppMessage(values: BookingValues) {
  const extra = values.message?.trim() || "—";
  const pickup = values.pickupPoint?.trim() ? `\nPickup point: ${values.pickupPoint.trim()}` : "";
  return `Hi Rural Camps,\n\nI'd like to plan a trip.\n\nExperience: ${values.experience}\nDestination / Location: ${values.destination}\nDate: ${values.date}\nGuests: ${values.guests}${pickup}\n\nName: ${values.name}\nPhone: ${values.phone}\n\nAdditional details:\n${extra}\n\nPlease confirm availability and current pricing.`;
}

export function getWhatsAppUrl(values: BookingValues) {
  const rawNumber = import.meta.env['VITE_RURAL_CAMPS_WHATSAPP'] as string | undefined;
  const number = rawNumber?.replace(/\D/g, "");
  if (!number) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(createWhatsAppMessage(values))}`;
}
