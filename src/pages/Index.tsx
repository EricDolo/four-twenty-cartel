import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";
import { ShopSidebar } from "../components/ShopSidebar";
import { ProductsSection } from "../components/ProductSection";
import { InfoCard } from "../components/InfoCard";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-transparent smoke-bg">
        <ShopSidebar />
        <main className="max-w-5xl mx-auto px-6 py-12 flex flex-col items-center justify-start">
          <SidebarTrigger />
          <header className="w-full max-w-4xl mx-auto text-center mt-8 mb-10">
            <div>
              <img
                src="/four-twenty-cartel-logo.jpg"
                alt="Four Twenty Cartel Logo"
                className="w-42 h-40 mx-auto"
              />
              <br/>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-2 text-primary drop-shadow-lg">
                Four Twenty Cartel
              </h1>
            </div>
          </header>
        
          <ProductsSection />
          <Link to="/visit" className="w-full max-w-md hover:scale-105 transition-transform">
            <InfoCard />
          </Link>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
