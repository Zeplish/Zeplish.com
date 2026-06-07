import { Calendar, Users, Bell, ShieldCheck } from "lucide-react";
import { ProductPageTemplate } from "@/components/ProductPageTemplate";

export function ClinicOpsPage() {
  return (
    <ProductPageTemplate
      meta={{
        title: "ClinicOps — Practice Management Software for Small Clinics | Zeplish",
        description: "Custom clinic management software for small medical practices. Appointment scheduling, patient records, automated reminders, and front-desk efficiency — built for your practice.",
      }}
      hero={{
        heroBg: "#0a3d62",
        ctaBg: "#0a3d62",
        badge: "For Small Medical Practices",
        name: "ClinicOps",
        tagline: "Practice Management, Simplified",
        icon: ShieldCheck,
        headline: "Run your clinic. Not your spreadsheets.",
        subheadline: "Appointment scheduling, patient records, automated reminders, and compliance tracking — all in one dashboard built for your front desk.",
        features: [
          {
            icon: Calendar,
            title: "Appointment Dashboard",
            desc: "Visual daily schedule, no-show alerts, and easy rescheduling — no phone tag.",
          },
          {
            icon: Users,
            title: "Patient Records",
            desc: "Complete patient history, documents, and visit notes in one secure place.",
          },
          {
            icon: Bell,
            title: "Automated Reminders",
            desc: "SMS and email reminders reduce no-shows before they happen.",
          },
          {
            icon: ShieldCheck,
            title: "HIPAA-Aware Design",
            desc: "Built with patient data privacy best practices in mind from day one.",
          },
        ],
      }}
      story={{
        subtitle: "Built for family doctors, specialist clinics, and small medical practices across the US.",
        problem: "Most small clinics track appointments in basic calendars, chase patients by phone, and store documents in filing cabinets or email threads. Front desk staff spend hours on admin instead of patient care — and the doctor has no visibility without being physically present.",
        solution: "ClinicOps gives your front desk a clean dashboard to manage every appointment, patient record, and follow-up. Automated SMS reminders go out before each visit. Patient documents are uploaded and stored securely. The clinic owner gets full visibility from anywhere.",
        outcomes: [
          "Fewer no-shows with automated appointment reminders",
          "Patient records and documents stored securely in one place",
          "Front desk spends less time on phones, more time on patients",
          "Clinic owner has full visibility without being in the building",
        ],
        techTags: ["Appointment scheduling", "Patient records", "SMS & email reminders", "Document uploads", "Analytics dashboard"],
      }}
      cta={{
        headline: "Ready to modernize your clinic's operations?",
        subtext: "Tell us how your practice currently operates. We'll design a system around your exact workflow — no generic software, no steep learning curve.",
      }}
      breadcrumb={{ label: "ClinicOps" }}
    />
  );
}
