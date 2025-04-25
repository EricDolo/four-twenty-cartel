import React from "react";

type Product = {
  id: string;
  name: string;
  image: string;
  price: string;
  description: string;
};

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition">
      <div className="p-2">
        <img
          src={product.image}
          alt={product.name}
          className="h-60 w-full object-cover rounded-lg"
        />
      </div>
      <div className="p-4 pt-0">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.description}</p>
        <div className="mt-2 text-green-700 font-bold">{product.price}</div>
      </div>
    </div>
  );
};
