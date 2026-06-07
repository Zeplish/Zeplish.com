import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Analytics } from "@vercel/analytics/react";
import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Home } from "@/pages/home";
import { DocTrackrPage } from "@/pages/doctrackr";
import { ClinicOpsPage } from "@/pages/clinicops";
import { BillSnapPage } from "@/pages/billsnap";
import { RentWisePage } from "@/pages/rentwise";
import { DaycareLandingPage } from "@/pages/daycare-landing";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/doctrackr" component={DocTrackrPage} />
          <Route path="/clinicops" component={ClinicOpsPage} />
          <Route path="/billsnap" component={BillSnapPage} />
          <Route path="/rentwise" component={RentWisePage} />
          <Route path="/document-compliance-software-for-daycares" component={DaycareLandingPage} />
          <Route component={NotFound} />
        </Switch>
        <Toaster />
        <Analytics />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
