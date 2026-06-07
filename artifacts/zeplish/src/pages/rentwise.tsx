import { Home, Users, Bell, Wrench } from "lucide-react";
import { ProductPageTemplate } from "@/components/ProductPageTemplate";

export function RentWisePage() {
  return (
    <ProductPageTemplate
      meta={{
        title: "RentWise — Property Management Software for Landlords & Airbnb Hosts | Zeplish",
        description: "Custom property management software for US landlords and Airbnb operators. Track tenants, automate rent reminders, and manage maintenance — across all your units.",
      }}
      hero={{
        heroBg: "#0d2137",
        ctaBg: "#0d2137",
        badge: "For Landlords & Airbnb Operators",
        name: "RentWise",
        tagline: "Property Management, Under Control",
        icon: Home,
        headline: "Manage every property. Miss nothing.",
        subheadline: "Track tenants, automate rent reminders, manage maintenance requests, and stay on top of every unit — whether you have 2 properties or 20.",
        features: [
          {
            icon: Home,
            title: "Property Dashboard",
            desc: "Every property, unit, and tenant at a glance — occupancy, lease dates, status.",
          },
          {
            icon: Users,
            title: "Tenant Management",
            desc: "Lease dates, contact details, and payment history in one organized place.",
          },
          {
            icon: Bell,
            title: "Automated Rent Reminders",
            desc: "SMS and email reminders sent before rent is due — fewer late payments, less chasing.",
          },
          {
            icon: Wrench,
            title: "Maintenance Ticketing",
            desc: "Tenants submit issues, you track them to resolution — no more lost WhatsApp threads.",
          },
        ],
      }}
      story={{
        subtitle: "Built for US landlords managing multiple rentals and Airbnb hosts scaling their short-term portfolio.",
        problem: "Landlords and Airbnb hosts managing multiple properties juggle lease dates, rent payments, maintenance requests, and tenant communications across texts, emails, and spreadsheets. Late rent slips through. Maintenance requests get lost. Tax time is a mess.",
        solution: "RentWise centralizes every property, tenant, and lease in one dashboard. Automated reminders go out before rent is due. Tenants submit maintenance tickets that you track from open to resolved. Works for traditional long-term rentals and short-term Airbnb-style properties.",
        outcomes: [
          "Late rent reduced with automated reminders sent before due dates",
          "Maintenance requests tracked from submission to completion",
          "Full portfolio visibility without the paperwork or spreadsheets",
          "Less time texting tenants, more time growing your portfolio",
        ],
        techTags: ["Property dashboard", "Tenant records", "Automated reminders", "Maintenance ticketing", "Multi-property support"],
      }}
      cta={{
        headline: "Ready to stop managing properties from your phone's Notes app?",
        subtext: "We'll build RentWise around your exact portfolio — number of units, property types, how you collect rent, and how tenants reach you.",
      }}
      breadcrumb={{ label: "RentWise" }}
    />
  );
}
