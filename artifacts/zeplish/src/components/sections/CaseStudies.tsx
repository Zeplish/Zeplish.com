import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useLocation } from "wouter";
import content from "@/content.json";

const { caseStudies } = content;

interface ProductCard {
  name: string;
  slug: string;
  color: string;
  industry: string;
  tagline: string;
  problem: string;
  outcomes: string[];
}

const PRODUCT_CARDS: ProductCard[] = [
  {
    name: "DocTrackr",
    slug: "doctrackr",
    color: "#1a2744",
    industry: "Daycare · US",
    tagline: "Document Compliance, Automated",
    problem: "Documents tracked manually, expiry dates missed, staff compliance hard to monitor, follow-ups time-consuming.",
    outcomes: [
      "Less manual tracking",
      "Better compliance visibility",
      "Reduced missed renewals",
      "Owner saves time every week",
    ],
  },
  {
    name: "ClinicOps",
    slug: "clinicops",
    color: "#0a3d62",
    industry: "Medical Practice · US",
    tagline: "Practice Management, Simplified",
    problem: "Appointments, patient follow-ups and compliance documents tracked manually across calls, notebooks and email.",
    outcomes: ["Fewer no-shows, less admin time, full patient visibility"],
  },
  {
    name: "RentWise",
    slug: "rentwise",
    color: "#0d2137",
    industry: "Landlords & Airbnb Hosts · US",
    tagline: "Property Management, Under Control",
    problem: "Multiple properties, tenants, rent dates and maintenance requests managed over text and spreadsheets.",
    outcomes: ["Less late rent, no lost maintenance requests, full portfolio visibility"],
  },
  {
    name: "BillSnap AI",
    slug: "billsnap",
    color: "#3b0fa0",
    industry: "Any US Business",
    tagline: "Bills Processed. Automatically.",
    problem: "Bills and receipts manually entered into spreadsheets — hours lost every week, tax season a nightmare.",
    outcomes: ["Hours saved weekly, bookkeeper costs reduced, one-click tax exports"],
  },
];

const IDEA_ITEMS = caseStudies.items.filter(
  (item) => !Object.prototype.hasOwnProperty.call(item, "slug")
);

export function CaseStudies() {
  const [, navigate] = useLocation();

  return (
    <section className="py-24 bg-slate-50" id="case-studies">
      <div className="container mx-auto px-4 md:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Products we've designed &amp; built
          </h2>
          <p className="text-muted-foreground">
            Real software built for real businesses. Each one started with a conversation about a workflow that wasn't working.
          </p>
        </motion.div>

        {/* 2×2 product card grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-24">
          {PRODUCT_CARDS.map((product, index) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all"
            >
              {/* Colored header */}
              <div className="px-7 pt-7 pb-6" style={{ backgroundColor: product.color }}>
                <div className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-2.5 py-0.5 text-xs text-white/75 mb-4">
                  {product.industry}
                </div>
                <h3 className="text-2xl font-bold font-heading text-white mb-1">
                  {product.name}
                </h3>
                <p className="text-white/55 text-sm">{product.tagline}</p>
              </div>

              {/* Body */}
              <div className="px-7 py-6 flex flex-col gap-5">
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                    The Problem
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{product.problem}</p>
                </div>

                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                    The Outcome
                  </span>
                  <ul className="space-y-1.5">
                    {product.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-3.5 w-3.5 text-accent mt-0.5 flex-shrink-0" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => navigate(`/${product.slug}`)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:gap-2.5 transition-all"
                  >
                    View product
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <Button
                    onClick={() => { window.location.href = "/#contact"; }}
                    size="sm"
                    className="bg-accent text-white hover:bg-accent/90 text-xs h-8 px-4"
                  >
                    Build something like this
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ideas section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold font-heading mb-2">More ideas we can build</h3>
          <p className="text-muted-foreground text-sm">{caseStudies.note}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {IDEA_ITEMS.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="bg-white border border-slate-100 rounded-xl p-5 hover:shadow-md hover:border-slate-200 transition-all"
            >
              <div className="mb-3">
                <h4 className="font-bold text-base font-heading">{study.name}</h4>
                <span className="text-xs font-medium text-indigo-600">{study.industry}</span>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <span className="font-semibold text-slate-500 uppercase tracking-wide text-xs">Problem · </span>
                  {study.problem}
                </p>
                <p>
                  <span className="font-semibold text-slate-500 uppercase tracking-wide text-xs">Solution · </span>
                  {study.solution}
                </p>
                <p className="pt-2 border-t border-slate-100 font-medium text-foreground/80">{study.result}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
