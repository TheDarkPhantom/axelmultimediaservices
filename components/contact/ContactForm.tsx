"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const EVENT_TYPES = [
  "Corporate Event",
  "Festival",
  "Government Event",
  "Hybrid/Zoom Meeting",
  "Wedding",
  "Other",
] as const;

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  eventType: z.enum(EVENT_TYPES, {
    message: "Please select an event type",
  }),
  eventDate: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

// TODO: Wire to email service (Resend recommended)

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function onSubmit(_data: ContactFormData) {
    toast.success(
      "Your inquiry has been sent. We'll be in touch within 24 hours."
    );
    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-sm bg-surface p-8"
    >
      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="name">
          Name <span className="text-gold">*</span>
        </Label>
        <Input
          id="name"
          placeholder="Your full name"
          className="bg-surface border-white/10 focus:border-gold"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-xs text-red-400">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email">
          Email <span className="text-gold">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          className="bg-surface border-white/10 focus:border-gold"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-xs text-red-400">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="+63 xxx xxx xxxx"
          className="bg-surface border-white/10 focus:border-gold"
          {...register("phone")}
        />
      </div>

      {/* Event Type */}
      <div className="space-y-2">
        <Label htmlFor="eventType">
          Event Type <span className="text-gold">*</span>
        </Label>
        <select
          id="eventType"
          className="w-full rounded-sm border border-white/10 bg-surface px-3 py-2 text-sm text-foreground focus:border-gold focus:outline-none"
          defaultValue=""
          {...register("eventType")}
        >
          <option value="" disabled>
            Select an event type
          </option>
          {EVENT_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.eventType && (
          <p className="text-xs text-red-400">{errors.eventType.message}</p>
        )}
      </div>

      {/* Event Date */}
      <div className="space-y-2">
        <Label htmlFor="eventDate">Event Date</Label>
        <input
          id="eventDate"
          type="date"
          className="w-full rounded-sm border border-white/10 bg-surface px-3 py-2 text-sm text-foreground focus:border-gold focus:outline-none"
          {...register("eventDate")}
        />
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message">
          Tell us about your event <span className="text-gold">*</span>
        </Label>
        <Textarea
          id="message"
          placeholder="Event details, expected audience, services you're interested in..."
          rows={5}
          className="bg-surface border-white/10 focus:border-gold"
          {...register("message")}
        />
        {errors.message && (
          <p className="text-xs text-red-400">{errors.message.message}</p>
        )}
      </div>

      {/* Submit */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-sm bg-gold text-black hover:bg-gold-light"
      >
        {isSubmitting ? "Sending..." : "Send Inquiry"}
      </Button>
    </form>
  );
}
