import { motion } from "framer-motion";
import { MessageCircle, FileSpreadsheet, CalendarX, EyeOff, Clock, Database, BellOff, UserX } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const problems = [
  { icon: MessageCircle, text: "Too much work happening on WhatsApp" },
  { icon: FileSpreadsheet, text: "Excel sheets getting outdated" },
  { icon: CalendarX, text: "Missed follow-ups and renewals" },
  { icon: EyeOff, text: "No visibility into team performance" },
  { icon: Clock, text: "Repetitive admin work consuming hours" },
  { icon: Database, text: "Customer data scattered everywhere" },
  { icon: BellOff, text: "No automated reminders" },
  { icon: UserX, text: "Business owner personally tracking everything" },
];

export function Problem() {
  return (
    <section className="py-24 bg-muted/50" id="problem">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Most SMEs Don't Need More Apps.<br />
            <span className="text-muted-foreground">They Need One System That Fits Their Business.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow bg-background/50">
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <problem.icon className="h-6 w-6" />
                  </div>
                  <p className="font-medium text-foreground/90">{problem.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
