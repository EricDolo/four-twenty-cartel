import React from "react";
import { Droplet, BatteryFull, Wind } from "lucide-react";
import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";
import { ShopSidebar } from "../components/ShopSidebar";


import { Link } from "react-router-dom";
import { link } from "fs";
import { vapeProducts } from "../data/vapeProducts";
import { ProductCard } from "../components/ProductCard";

const features = [
  {
    icon: Droplet,
    title: "E-Liquids",
    desc: "Lab-tested flavors ranging from fruity to tobacco, available in multiple nicotine strengths.",
    link: "/products/vapes/",
  },
  {
    icon: BatteryFull,
    title: "Rechargeable Devices",
    desc: "Long-lasting, stylish vape pens and pod systems for smooth, reliable performance.",
    link: "/products/vapes/",
  },
  {
    icon: Wind,
    title: "Accessories",
    desc: "Pods, coils, cases, and more—everything you need for the perfect vaping experience.",
    link: "/products/vapes/",
  },
];

export default function VapesEliquids() {
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
          <h1 className="text-4xl font-bold text-purple-700 mb-3">Vapes & E-Liquids</h1>
            <p className="text-gray-600 text-lg">
              A curated selection of top-tier vaping gear and premium e-liquids.
            </p>
          </header>
          
      {/* Features Section */}

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-purple-100 to-purple-200 p-6 rounded-xl shadow-md text-center"
          >
            <item.icon size={40} className="text-purple-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-700 text-sm">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Product Grid */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-green-800 mb-6">Popular Picks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vapeProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <div className="text-center mt-16">
        <Link
          to="/"
          className="inline-block bg-purple-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-800 transition"
        >
          ← Back to All Products
        </Link>
      </div>
    </div>
      
        </div>
    </SidebarProvider>
  );
}
