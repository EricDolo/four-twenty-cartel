import React from "react";
import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";
import { Flame, GlassWater, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { hookahProducts } from "../data/hookahProducts.ts";
import { ProductCard } from "../components/ProductCard.tsx";
import { ShopSidebar } from "../components/ShopSidebar.tsx";

const features = [
  {
    icon: Flame,
    title: "Hookahs & Shisha",
    desc: "Modern and traditional hookah sets with rich-flavored shisha from mint to mango.",
    link: "/products/hookah/sets",
  },
  {
    icon: GlassWater,
    title: "Glass Pipes",
    desc: "Premium hand-blown glass pipes and bubblers with vibrant designs and smooth airflow.",
    link: "/products/hookah/pipes",
  },
  {
    icon: Sparkles,
    title: "Accessories & Cleaners",
    desc: "Charcoal, foils, mouth tips, and cleaning kits to keep your session fresh every time.",
    link: "/products/hookah/accessories",
  },
];

export default function HookahProducts() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-transparent smoke-bg">
          <ShopSidebar />
          <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col items-center justify-start w-full">
            <SidebarTrigger />
          <div className="w-full max-w-4xl mx-auto text-center mt-8 mb-10">
            <header className="text-center mb-10">
              <Link to="/">
                <img
                  src="/four-twenty-cartel-logo.jpg"
                  alt="Four Twenty Cartel Logo"
                  className="w-42 h-40 mx-auto"
                    />
              </Link>
              <br/>
              <h1 className="text-4xl font-bold text-yellow-700 mb-3">Hookah & Pipes</h1>
              <p className="text-gray-600 text-lg">
                Everything you need for a smooth, flavorful experience—solo or social.
              </p>
            </header>
  
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {features.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-yellow-100 to-pink-100 p-6 rounded-xl shadow-md text-center"
                >
                  <item.icon size={40} className="text-yellow-700 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </div>
              ))}
            </section>
            
            {/* Product Grid */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-green-800 mb-6">Popular Picks</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {hookahProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
              
            <div className="text-center mt-16">
              <Link
                to="/"
                className="inline-block bg-yellow-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-800 transition"
              >
                ← Back to All Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
