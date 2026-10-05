import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bookingSchema, experienceValues, getWhatsAppUrl, type BookingValues } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const destinationOptions: Record<string, string[]> = {
  "Camp With Us": ["Ramachandi", "Koraput", "Other / Ask Rural Camps"],
  "Koraput Tour": ["Koraput 2-Day Journey", "Custom Koraput Plan"],
  "Rural Stay": ["Koraput", "Ask Rural Camps"],
};

export function BookingForm({ compact = false, defaultExperience }: { compact?: boolean; defaultExperience?: BookingValues["experience"] }) {
  const { register, handleSubmit, control, setValue, formState: { errors, isSubmitting } } = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { experience: defaultExperience, destination: "", date: "", guests: 2, name: "", phone: "", message: "", pickupPoint: "" },
  });
  const experience = useWatch({ control, name: "experience" });
  const options = useMemo(() => destinationOptions[experience ?? ""] ?? [], [experience]);
  useEffect(() => setValue("destination", ""), [experience, setValue]);
  const configured = Boolean((import.meta.env.VITE_RURAL_CAMPS_WHATSAPP as string | undefined)?.replace(/\D/g, ""));
  const onSubmit = (values: BookingValues) => {
    window.dispatchEvent(new CustomEvent("booking_form_completed", { detail: { experience: values.experience } }));
    const url = getWhatsAppUrl(values);
    if (!url) return;
    window.dispatchEvent(new CustomEvent("whatsapp_clicked"));
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const error = (name: keyof BookingValues) => errors[name] ? <span className="field-error" role="alert">{errors[name]?.message}</span> : null;
  return <form className={cn("booking-form", compact && "booking-form-compact")} onFocus={() => window.dispatchEvent(new CustomEvent("booking_form_started"))} onSubmit={handleSubmit(onSubmit)} noValidate>
    <div className="form-field"><label htmlFor="experience">Experience</label><select id="experience" {...register("experience")}><option value="">Choose one</option>{experienceValues.map(v => <option key={v}>{v}</option>)}</select>{error("experience")}</div>
    <div className="form-field"><label htmlFor="destination">{experience === "Rent A Camp" ? "Setup location" : "Destination / location"}</label>{options.length ? <select id="destination" {...register("destination")}><option value="">Choose one</option>{options.map(v => <option key={v}>{v}</option>)}</select> : <input id="destination" placeholder={experience === "Rent A Camp" ? "Where should we bring the camp?" : "Choose an experience first"} {...register("destination")} />}{error("destination")}</div>
    <div className="form-grid"><div className="form-field"><label htmlFor="date">Preferred date</label><input id="date" type="date" min={new Date().toISOString().split("T")[0]} {...register("date")} />{error("date")}</div><div className="form-field"><label htmlFor="guests">Guests</label><input id="guests" type="number" min="1" inputMode="numeric" {...register("guests")} />{error("guests")}</div></div>
    <div className="form-grid"><div className="form-field"><label htmlFor="name">Name</label><input id="name" autoComplete="name" {...register("name")} />{error("name")}</div><div className="form-field"><label htmlFor="phone">WhatsApp number</label><input id="phone" type="tel" autoComplete="tel" placeholder="Include country code" {...register("phone")} />{error("phone")}</div></div>
    {!compact && experience === "Koraput Tour" && <div className="form-field"><label htmlFor="pickupPoint">Pickup point <span>(optional)</span></label><input id="pickupPoint" {...register("pickupPoint")} /></div>}
    <div className="form-field"><label htmlFor="message">Anything else? <span>(optional)</span></label><textarea id="message" rows={compact ? 2 : 4} {...register("message")} />{error("message")}</div>
    {!configured && <p className="config-note" role="status">WhatsApp enquiries are being configured. You can still prepare your trip details here.</p>}
    <Button type="submit" size="lg" className="w-full justify-between" disabled={!configured || isSubmitting}>Continue on WhatsApp <ArrowUpRight /></Button>
  </form>;
}
