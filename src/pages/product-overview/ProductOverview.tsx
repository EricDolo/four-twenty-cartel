import React from "react";
import { ProductCard } from "../../components/ProductCard";
import { cannabisProducts } from "../../data/cannabisProducts"; 

export default function ProductOverview() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-8">
        Premium Flower
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cannabisProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
