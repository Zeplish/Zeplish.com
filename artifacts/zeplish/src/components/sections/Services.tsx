import { motion } from "framer-motion";
import { Users, FileCheck, LayoutDashboard, Target, MessageSquare, Receipt, GraduationCap, Building2, FileScan, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  { icon: Users, title: "Custom CRM Systems", desc: "Track customers, leads and follow-ups in one place" },
  { icon: FileCheck, title: "AI-powered Document Tracking", desc: "Automate expiry dates, renewals and compliance" },
  { icon: LayoutDashboard, title: "Internal Business Dashboards", desc: "See your operations at a glance" },
  { icon: Target, title: "Lead & Sales Management", desc: "Manage leads from every channel in one flow" },
  { icon: MessageSquare, title: "WhatsApp/SMS/Email Reminders", desc: "Send automated reminders to staff and customers" },
  { icon: Receipt, title: "Billing & Invoice Tracking", desc: "Track payments, invoices and outstanding amounts" },
  { icon: GraduationCap, title: "School / Training Management", desc: "Manage students, fees, batches and attendance" },
  { icon: Building2, title: "Property Management Software", desc: "Handle properties, tenants and rent in one system" },
  { icon: FileScan, title: "AI Data Entry from Bills & PDFs", desc: "Extract data from documents automatically" },
  { icon: Settings, title: "Custom Admin Portals", desc: "Build internal tools for your specific business ops" },
];

export function Services() {
  return (
    <section className="py-24" id="services">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading">
            Custom Software We Can Build for Your Business
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="h-full hover:border-accent/50 transition-colors">
                <CardHeader className="pb-2">
                  <div className="mb-4 text-accent">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
