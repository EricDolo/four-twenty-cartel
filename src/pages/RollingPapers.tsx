import React from "react";
import { Layers, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { rollingPapers } from "../data/paperProducts.ts";
import { ProductCard } from "../components/ProductCard";
import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";
import { ShopSidebar } from "../components/ShopSidebar.tsx";

const features = [
  {
    icon: Layers,
    title: "Paper Variety",
    desc: "Ultra-thin, hemp, rice, and flavored papers for every type of roll.",
    link: "/products/papers",
  },
  {
    icon: Leaf,
    title: "Natural & Organic",
    desc: "RAW, Elements, and other top-tier organic brands with slow, clean burns.",
    link: "/products/papers",
  },
  {
    icon: Leaf,
    title: "Rolling Gear",
    desc: "Trays, filters, reusable cones, and tips to level up your roll game.",
    link: "/products/papers",
  },
];

export default function RollingPapers() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-transparent smoke-bg">
        <ShopSidebar />
        <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col items-center justify-start">
          <SidebarTrigger />
          <header className="w-full max-w-4xl mx-auto text-center mt-8 mb-10">
            <Link to="/">
              <img
                src="/four-twenty-cartel-logo.jpg"
                alt="Four Twenty Cartel Logo"
                className="w-42 h-40 mx-auto"
              />
            </Link>
            <br/>
          </header>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-pink-100 to-green-50 p-6 rounded-xl shadow-md text-center"
              >
                <item.icon size={40} className="text-pink-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </section>
          
          {/* Product Grid */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-green-800 mb-6">Popular Picks</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rollingPapers.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>      
            
          <div className="text-center mt-16">
            <Link
              to="/"
              className="inline-block bg-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition"
            >
              ← Back to All Products
            </Link>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
