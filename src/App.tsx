
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import IntentGraph from "./pages/IntentGraph";
import TrustCircles from "./pages/TrustCircles";
import LocalCoordination from "./pages/LocalCoordination";
import MutualAid from "./pages/MutualAid";
import Introduction from "./pages/Introduction";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/intent-graph" element={<IntentGraph />} />
          <Route path="/trust-circles" element={<TrustCircles />} />
          <Route path="/coordination" element={<LocalCoordination />} />
          <Route path="/mutual-aid" element={<MutualAid />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
