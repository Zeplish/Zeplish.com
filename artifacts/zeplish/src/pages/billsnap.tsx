import { ScanLine, Database, BarChart2, FileDown } from "lucide-react";
import { ProductPageTemplate } from "@/components/ProductPageTemplate";

export function BillSnapPage() {
  return (
    <ProductPageTemplate
      meta={{
        title: "BillSnap AI — AI Bill & Receipt Scanner for Small Businesses | Zeplish",
        description: "Stop manually entering bills. BillSnap AI scans any receipt or invoice, extracts the data automatically, and exports to QuickBooks — saving hours every week.",
      }}
      hero={{
        heroBg: "#3b0fa0",
        ctaBg: "#3b0fa0",
        badge: "AI-Powered · Any US Business",
        name: "BillSnap AI",
        tagline: "Bills Processed. Automatically.",
        icon: ScanLine,
        headline: "Stop typing bills. Let AI do it.",
        subheadline: "Snap a photo of any bill or receipt. BillSnap AI reads it, extracts the data, and logs it — saving hours of manual entry every week.",
        features: [
          {
            icon: ScanLine,
            title: "AI Bill Scanning",
            desc: "Point your phone at any bill — AI extracts vendor, amount, date, and category instantly.",
          },
          {
            icon: Database,
            title: "Vendor Records",
            desc: "Every supplier and every transaction organized, searchable, and always up to date.",
          },
          {
            icon: BarChart2,
            title: "Monthly Reports",
            desc: "Expense summaries, category breakdowns, and tax-season-ready exports in one click.",
          },
          {
            icon: FileDown,
            title: "QuickBooks-Ready Export",
            desc: "Export data directly to QuickBooks or your accountant's preferred format.",
          },
        ],
      }}
      story={{
        subtitle: "Built for US small business owners, freelancers, and anyone tired of manually entering bills before tax season.",
        problem: "Small business owners spend hours each week manually entering bills and receipts into spreadsheets. Come IRS filing season, it's a scramble through inboxes and shoeboxes. Bookkeepers charge by the hour for work that AI can now do in seconds.",
        solution: "BillSnap AI uses machine learning to read your bills and receipts the moment you upload them. Vendor name, amount, date, and category — extracted instantly and stored in a clean, searchable database. One click exports to QuickBooks or a CSV your accountant can use.",
        outcomes: [
          "Hours saved per week — no more manual data entry",
          "Tax season becomes a one-click export, not a week of panic",
          "Bookkeeper costs reduced significantly",
          "Real-time view of all business expenses at any time",
        ],
        techTags: ["AI document scanning", "Data extraction", "Expense tracking", "QuickBooks export", "Vendor management"],
      }}
      cta={{
        headline: "Want BillSnap AI for your business?",
        subtext: "We'll build it around your exact bill types, categories, and accounting setup. No off-the-shelf software — a system that fits how you actually work.",
      }}
      breadcrumb={{ label: "BillSnap AI" }}
    />
  );
}
