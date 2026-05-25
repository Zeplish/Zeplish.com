import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

const caseStudies = [
  {
    name: "LeadFlow CRM",
    industry: "Real Estate",
    problem: "Leads from calls, WhatsApp, ads scattered",
    solution: "CRM with lead status, follow-up reminders, property matching, team assignment",
    result: "Faster follow-ups and better lead visibility"
  },
  {
    name: "ClinicOps",
    industry: "Small Clinic",
    problem: "Appointments, patient follow-ups, reports handled manually",
    solution: "Appointment dashboard, patient records, reminders, prescription upload",
    result: "Reduced missed appointments, smoother clinic operations"
  },
  {
    name: "SchoolTrack",
    industry: "Coaching Institute",
    problem: "Fee records, student enquiries, batch management in registers and Excel",
    solution: "Student CRM, fee tracking, attendance, batch management, parent reminders",
    result: "Cleaner administration, easier student tracking"
  },
  {
    name: "RentWise",
    industry: "Property Manager",
    problem: "Multiple properties, tenants, rent dates, maintenance hard to manage",
    solution: "Property dashboard, tenant records, rent reminders, maintenance ticketing",
    result: "Better rent collection tracking, faster issue resolution"
  },
  {
    name: "BillSnap AI",
    industry: "Trading Business",
    problem: "Bills and purchases manually typed into spreadsheets",
    solution: "AI bill scanning, data extraction, vendor records, monthly reports",
    result: "Reduced manual data entry, faster reporting"
  },
  {
    name: "ServiceDesk",
    industry: "Repair Business",
    problem: "Customer complaints and technician assignments on WhatsApp",
    solution: "Ticket system, technician dashboard, status updates, customer notifications",
    result: "Better service tracking, fewer missed complaints"
  },
  {
    name: "TeamPulse",
    industry: "Small Agency",
    problem: "Tasks, client work, deadlines scattered across chats",
    solution: "Project dashboard, task assignment, deadline alerts, client-wise progress",
    result: "Better team accountability, clearer project visibility"
  },
  {
    name: "StockTrack",
    industry: "Manufacturer",
    problem: "Inventory, orders, production updates not in one place",
    solution: "Inventory dashboard, order tracking, low-stock alerts, production status",
    result: "Better stock planning, fewer operational delays"
  }
];

export function CaseStudies() {
  return (
    <section className="py-24 bg-muted/30" id="case-studies">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Featured Case Study */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto bg-card border rounded-3xl overflow-hidden shadow-xl mb-32"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center rounded-full bg-accent/10 text-accent px-3 py-1 text-sm font-medium mb-6 w-fit">
                Featured Case Study
              </div>
              <h3 className="text-3xl font-bold font-heading mb-2">DocTrackr</h3>
              <p className="text-lg text-muted-foreground mb-8">Document expiry tracking system for a US-based daycare business.</p>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-semibold mb-2">The Problem</h4>
                  <p className="text-muted-foreground">Documents tracked manually, expiry dates missed, staff compliance hard to monitor, follow-ups time-consuming.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">The Solution</h4>
                  <p className="text-muted-foreground">Custom dashboard, document database, expiry date tracking, automated SMS/email reminders, staff-wise document status, admin-friendly interface.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-accent">The Outcome</h4>
                  <ul className="space-y-2">
                    {["Less manual tracking", "Better compliance visibility", "Reduced missed renewals", "Owner saves time every week"].map((item, i) => (
                      <li key={i} className="flex items-center text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-fit bg-accent text-accent-foreground hover:bg-accent/90 group"
              >
                Build something like this for my business
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="bg-muted hidden md:flex items-center justify-center p-8">
               <div className="w-full aspect-[4/3] bg-background rounded-xl border shadow-sm flex flex-col overflow-hidden">
                 <div className="h-10 border-b bg-muted/50 flex items-center px-4 gap-2">
                   <div className="flex gap-1.5">
                     <div className="h-3 w-3 rounded-full bg-destructive/50" />
                     <div className="h-3 w-3 rounded-full bg-amber-400/50" />
                     <div className="h-3 w-3 rounded-full bg-emerald-400/50" />
                   </div>
                 </div>
                 <div className="p-6 flex-1 flex flex-col gap-4">
                   <div className="h-8 w-1/3 bg-muted rounded-md mb-4" />
                   <div className="grid grid-cols-3 gap-4 mb-4">
                     <div className="h-24 bg-accent/5 rounded-lg border border-accent/20" />
                     <div className="h-24 bg-muted rounded-lg border" />
                     <div className="h-24 bg-muted rounded-lg border" />
                   </div>
                   <div className="flex-1 bg-muted/50 rounded-lg border" />
                 </div>
               </div>
            </div>
          </div>
        </motion.div>

        {/* More Ideas */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              Software Ideas We Can Build for Businesses Like Yours
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card border rounded-2xl p-6 hover:shadow-lg transition-all"
              >
                <div className="mb-4">
                  <h3 className="font-bold text-lg">{study.name}</h3>
                  <span className="text-xs font-medium text-accent uppercase tracking-wider">{study.industry}</span>
                </div>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="font-semibold block mb-1">Problem:</span>
                    <span className="text-muted-foreground">{study.problem}</span>
                  </div>
                  <div>
                    <span className="font-semibold block mb-1">Solution:</span>
                    <span className="text-muted-foreground">{study.solution}</span>
                  </div>
                  <div className="pt-2 border-t border-border/50">
                    <span className="font-semibold block text-foreground">Result:</span>
                    <span className="text-foreground/90 font-medium">{study.result}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground text-sm max-w-2xl mx-auto"
          >
            These are examples of the type of custom systems Zeplish can build. Every business workflow is different — we design the software around your exact process.
          </motion.p>
        </div>

      </div>
    </section>
  );
}
