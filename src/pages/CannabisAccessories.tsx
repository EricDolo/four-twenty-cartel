import React from "react";
import { Leaf, Star, PackageSearch } from "lucide-react";
import { Link } from "react-router-dom";
import { cannabisProducts } from "../data/cannabisProducts";
import { ProductCard } from "../components/ProductCard";
import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar"; 
import { ShopSidebar } from "../components/ShopSidebar";

const features = [
  {
    icon: Leaf,
    title: "Premium Flower",
    desc: "Organically grown strains with diverse terpene profiles and potency options for every mood.",
    link: "/products/cannabis/strains",
  },
  {
    icon: Star,
    title: "Grinders & Tools",
    desc: "Precision grinders, storage jars, and smell-proof containers built for the modern connoisseur.",
    link: "/products/cannabis/grinders", 
  },
  {
    icon: PackageSearch,
    title: "Accessories",
    desc: "Rolling trays, glass pipes, ashtrays, and cleaning kits that blend functionality with style.",
    link: "/products/cannabis/accessories",
  },
];

export default function CannabisAccessories() {
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
            <h1 className="text-4xl font-bold text-green-700 mb-3">Cannabis & Accessories</h1>
            <p className="text-gray-600 text-lg">
              Explore the finest cannabis products and thoughtfully designed accessories.
            </p>
          </header>

          {/* Features Section */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((item, idx) => (
            <Link to="/products" key={idx}>
              <div
                key={idx}
                className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-md text-center"
              >
                <item.icon size={40} className="text-green-700 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            </Link>
            ))}
          </section>

          {/* Product Grid */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-green-800 mb-6">Popular Picks</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cannabisProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>

          {/* Back Button */}
          <div className="text-center mt-16">
            <Link
              to="/"
              className="inline-block bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 transition"
            >
              ← Back to All Products
            </Link>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
