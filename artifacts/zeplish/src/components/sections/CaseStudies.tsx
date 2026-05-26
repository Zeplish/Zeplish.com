import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import content from "@/content.json";

const { featuredCaseStudy: featured, caseStudies } = content;

export function CaseStudies() {
  return (
    <section className="py-24 bg-slate-50" id="case-studies">
      <div className="container mx-auto px-4 md:px-8">

        {/* Featured Case Study */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto bg-white border rounded-3xl overflow-hidden shadow-xl mb-32"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center min-w-0">
              <div className="inline-flex items-center rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 px-3 py-1 text-sm font-medium mb-6 w-fit">
                {featured.badge}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading mb-2">{featured.name}</h3>
              <p className="text-base text-muted-foreground mb-6">
                {featured.subtitle}
              </p>

              <div className="space-y-5 mb-6">
                <div>
                  <h4 className="font-semibold mb-2 text-sm uppercase tracking-wider text-slate-400">The Problem</h4>
                  <p className="text-sm text-muted-foreground">{featured.problem}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-sm uppercase tracking-wider text-slate-400">The Solution</h4>
                  <p className="text-sm text-muted-foreground">{featured.solution}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-sm uppercase tracking-wider text-slate-400">The Outcome</h4>
                  <ul className="space-y-2">
                    {featured.outcomes.map((item, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-fit bg-accent text-accent-foreground hover:bg-accent/90 group text-sm"
              >
                {featured.cta}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </Button>
            </div>
            <div className="bg-slate-50 hidden md:flex items-center justify-center p-8">
              <div className="w-full aspect-[4/3] bg-white rounded-xl border shadow-sm flex flex-col overflow-hidden">
                <div className="h-10 border-b bg-slate-50 flex items-center px-4 gap-2">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-rose-300" />
                    <div className="h-3 w-3 rounded-full bg-amber-300" />
                    <div className="h-3 w-3 rounded-full bg-green-300" />
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col gap-4">
                  <div className="h-7 w-1/3 bg-slate-100 rounded-md mb-3" />
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="h-20 bg-accent/5 rounded-lg border border-accent/20" />
                    <div className="h-20 bg-slate-50 rounded-lg border" />
                    <div className="h-20 bg-slate-50 rounded-lg border" />
                  </div>
                  <div className="flex-1 bg-slate-50 rounded-lg border" />
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
              {caseStudies.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {caseStudies.items.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-lg hover:border-slate-200 transition-all"
              >
                <div className="mb-4">
                  <h3 className="font-bold text-base font-heading">{study.name}</h3>
                  <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">{study.industry}</span>
                </div>

                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold block mb-0.5 text-slate-500 text-xs uppercase tracking-wide">Problem</span>
                    <span className="text-muted-foreground">{study.problem}</span>
                  </div>
                  <div>
                    <span className="font-semibold block mb-0.5 text-slate-500 text-xs uppercase tracking-wide">Solution</span>
                    <span className="text-muted-foreground">{study.solution}</span>
                  </div>
                  <div className="pt-3 border-t border-slate-100">
                    <span className="font-semibold block text-foreground/90 font-medium">{study.result}</span>
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
            {caseStudies.note}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
