import { Switch, Route } from "wouter";
import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "@/components/ErrorBoundary";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <TooltipProvider>
        <Toaster position="top-right" />
        <Router />
      </TooltipProvider>
    </ErrorBoundary>
  );
}
