import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Mail, Loader2, ChevronDown } from "lucide-react";
import content from "@/content.json";

const COUNTRY_CODES = [
  { name: "India", code: "IN", dial: "+91", flag: "🇮🇳" },
  { name: "United Arab Emirates", code: "AE", dial: "+971", flag: "🇦🇪" },
  { name: "United States", code: "US", dial: "+1", flag: "🇺🇸" },
  { name: "United Kingdom", code: "GB", dial: "+44", flag: "🇬🇧" },
  { name: "Australia", code: "AU", dial: "+61", flag: "🇦🇺" },
  { name: "Canada", code: "CA", dial: "+1", flag: "🇨🇦" },
  { name: "Singapore", code: "SG", dial: "+65", flag: "🇸🇬" },
  { name: "Malaysia", code: "MY", dial: "+60", flag: "🇲🇾" },
  { name: "Saudi Arabia", code: "SA", dial: "+966", flag: "🇸🇦" },
  { name: "Qatar", code: "QA", dial: "+974", flag: "🇶🇦" },
  { name: "Kuwait", code: "KW", dial: "+965", flag: "🇰🇼" },
  { name: "Bahrain", code: "BH", dial: "+973", flag: "🇧🇭" },
  { name: "Oman", code: "OM", dial: "+968", flag: "🇴🇲" },
  { name: "South Africa", code: "ZA", dial: "+27", flag: "🇿🇦" },
  { name: "New Zealand", code: "NZ", dial: "+64", flag: "🇳🇿" },
  { name: "Pakistan", code: "PK", dial: "+92", flag: "🇵🇰" },
  { name: "Bangladesh", code: "BD", dial: "+880", flag: "🇧🇩" },
  { name: "Sri Lanka", code: "LK", dial: "+94", flag: "🇱🇰" },
  { name: "Nepal", code: "NP", dial: "+977", flag: "🇳🇵" },
  { name: "Germany", code: "DE", dial: "+49", flag: "🇩🇪" },
  { name: "France", code: "FR", dial: "+33", flag: "🇫🇷" },
  { name: "Netherlands", code: "NL", dial: "+31", flag: "🇳🇱" },
  { name: "Ireland", code: "IE", dial: "+353", flag: "🇮🇪" },
  { name: "Nigeria", code: "NG", dial: "+234", flag: "🇳🇬" },
  { name: "Kenya", code: "KE", dial: "+254", flag: "🇰🇪" },
  { name: "Ghana", code: "GH", dial: "+233", flag: "🇬🇭" },
];

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name is too long")
    .regex(/^[\p{L}\s'\-\.]+$/u, "Please enter a valid name"),
  businessName: z
    .string()
    .min(2, "Business name is required")
    .max(120, "Business name is too long"),
  email: z
    .string()
    .email("Invalid email address")
    .refine((e) => !e.includes("+") || e.split("@")[0].length > 3, "Invalid email"),
  countryCode: z.string().default("+91"),
  phone: z
    .string()
    .regex(/^\d{6,15}$/, "Enter digits only, 6–15 characters")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(20, "Please describe what you want to build (at least 20 characters)")
    .max(2000, "Message is too long")
    .refine((m) => m.trim().split(/\s+/).length >= 4, "Please write at least a few words"),
  website: z.string().max(0, "").optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_CODES[0]);
  const formOpenedAt = useRef<number>(Date.now());

  useEffect(() => {
    formOpenedAt.current = Date.now();
    fetch("https://ipapi.co/json/")
      .then((r) => r.json())
      .then((data: { country_code?: string }) => {
        const match = COUNTRY_CODES.find((c) => c.code === data.country_code);
        if (match) setSelectedCountry(match);
      })
      .catch(() => {});
  }, []);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      businessName: "",
      email: "",
      countryCode: "+91",
      phone: "",
      message: "",
      website: "",
    },
  });

  async function onSubmit(values: FormValues) {
    if (values.website) return;

    const elapsed = Date.now() - formOpenedAt.current;
    if (elapsed < 3000) {
      toast({
        title: "Please take a moment",
        description: "Fill out the form carefully and try again.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        ...values,
        phone: values.phone ? `${selectedCountry.dial} ${values.phone}` : "",
        formOpenedAt: formOpenedAt.current,
        website: values.website ?? "",
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error((data as { error?: string }).error || "Something went wrong");
      }

      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours to schedule a free discovery call.",
      });
      form.reset();
    } catch (err) {
      toast({
        title: "Failed to send message",
        description:
          err instanceof Error
            ? err.message
            : "Please try again or email us directly at hello@zeplish.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="py-24 bg-background" id="contact">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              {content.contact.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-12">{content.contact.text}</p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-muted rounded-full flex items-center justify-center">
                  <Mail className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Email</p>
                  <a href={`mailto:${content.site.email}`} className="font-semibold hover:underline">
                    {content.site.email}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border rounded-2xl p-8 shadow-sm"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

                {/* Honeypot — hidden from humans, bots will fill it */}
                <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }}>
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    {...form.register("website")}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" autoComplete="name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="businessName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Acme Logistics" autoComplete="organization" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" type="email" autoComplete="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Phone with country code */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <div className="flex">
                          <div className="relative">
                            <select
                              value={selectedCountry.code}
                              onChange={(e) => {
                                const c = COUNTRY_CODES.find((x) => x.code === e.target.value);
                                if (c) setSelectedCountry(c);
                              }}
                              className="h-10 pl-3 pr-8 rounded-l-md border border-r-0 border-input bg-muted text-sm appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-ring"
                              style={{ minWidth: "90px" }}
                              aria-label="Country code"
                            >
                              {COUNTRY_CODES.map((c) => (
                                <option key={c.code} value={c.code}>
                                  {c.flag} {c.dial}
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
                          </div>
                          <Input
                            placeholder="9876543210"
                            type="tel"
                            inputMode="numeric"
                            autoComplete="tel-national"
                            className="rounded-l-none flex-1"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What do you want to build? *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your current process and what you want to automate..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full h-12 bg-accent text-accent-foreground hover:bg-accent/90 text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send message"
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
