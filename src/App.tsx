import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages importing
import Index from "./pages/Index";
import CannabisAccessories from './pages/CannabisAccessories';
import VapesEliquids from './pages/VapesEliquids';
import HookahProducts from './pages/HookahProducts';



import NotFound from "./pages/NotFound";
import { Toaster } from "./components/ui/toaster";
import RollingPapers from "./pages/RollingPapers";
import VisitUsPage from "./pages/VisitUsPage";
import ProductOverview from "./pages/product-overview/ProductOverview";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products/cannabis" element={<CannabisAccessories />} />
          <Route path="/products/vapes" element={<VapesEliquids />} />
          <Route path="/products/hookah" element={<HookahProducts />} />
          <Route path="/products/papers" element={<RollingPapers />} />
          <Route path="/products" element={<ProductOverview />} />

          <Route path="/visit" element={<VisitUsPage />} />

          <Route path="*" element={<NotFound />} /> {/* Fallback for unmatched routes */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
