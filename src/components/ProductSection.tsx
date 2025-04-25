import React from 'react';
import { Link } from 'react-router-dom';
import { Cannabis, Cigarette, FlaskConical, File } from 'lucide-react';

const products = [
  { id: 'cannabis', icon: Cannabis, name: 'Cannabis & Accessories', desc: 'Flower, pre-rolls, grinders, and premium cannabis products.', bg: 'from-green-100 to-green-200' },
  { id: 'vapes', icon: Cigarette, name: 'Vapes & E-Liquids', desc: 'High quality vapes, pods, accessories, and e-liquids.', bg: 'from-green-100 to-green-300' },
  { id: 'hookah', icon: FlaskConical, name: 'Hookah & Pipes', desc: 'Classic hookahs, shisha, and glass pipes for every vibe.', bg: 'from-green-100 to-green-100' },
  { id: 'papers', icon: File, name: 'Rolling Papers', desc: 'Best brands, all sizes, for the perfect roll every time.', bg: 'from-green-100 to-green-50' },
];

export function ProductsSection() {
  return (
    <section className="max-w-4xl mx-auto py-12" id="products">
      <h2 className="section-heading text-center mb-8">Our Offerings</h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
        {products.map((item) => (
          <Link
            to={`/products/${item.id}`}
            key={item.id}
            className={`rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-br ${item.bg} shadow-lg hover:scale-105 transform transition-all duration-300`}
          >
            <item.icon size={38} className="text-green-700" />
            <div>
              <h3 className="font-bold text-lg mb-1">{item.name}</h3>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
