import React from 'react';
import { Cannabis, Cigarette, FlaskConical, File } from 'lucide-react';

const products = [
    {
        id: 'cannabis',
        icon: Cannabis,
        name: 'Cannabis & Accessories',
        desc: 'Flower, pre-rolls, grinders, and premium cannabis products.',
        modalDesc: 'Explore our curated selection of cannabis flower grown under organic conditions, hand-rolled pre-rolls, and precision grinders. Whether you’re seeking relaxation, creativity, or relief, we’ve got strains for every need—plus all the glassware and storage solutions to keep things fresh.',
        bg: 'from-green-100 to-green-200',
    },
    {
        id: 'vapes',
        icon: Cigarette,
        name: 'Vapes & E-Liquids',
        desc: 'High quality vapes, pods, accessories, and e-liquids.',
        modalDesc: 'Dive into the latest in vaping tech: sleek, rechargeable devices, refillable pods, and a rainbow of premium e-liquid flavours. From fruity blends to classic tobacco, each bottle is lab-tested for purity and potency—enjoy smooth clouds every time.',
        bg: 'from-purple-100 to-purple-300',
    },
    {
        id: 'hookah',
        icon: FlaskConical,
        name: 'Hookah & Pipes',
        desc: 'Classic hookahs, shisha, and glass pipes for every vibe.',
        modalDesc: 'Whether you’re hosting a party or chilling solo, our hookahs and pipes deliver top-tier performance and style. Choose from modern stainless steel setups or hand-blown glass pieces, plus an array of shisha flavours from minty fresh to sweet fruit medleys.',
        bg: 'from-yellow-100 to-pink-100',
    },
    {
        id: 'papers',
        icon: File,
        name: 'Rolling Papers',
        desc: 'Best brands, all sizes, for the perfect roll every time.',
        modalDesc: 'Roll your own the right way—with ultra-thin organic papers, hemp wraps, and specialty tips. We stock RAW, Zig-Zag, Elements, and other fan-favourites in sizes from single to king-size, plus reusable rolling trays.',
        bg: 'from-pink-100 to-green-50',
    },
];

export default function Products() {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((item) => (
                <div key={item.id} className={`bg-gradient-to-br ${item.bg} p-4 rounded-lg shadow-md text-center`}>
                    <item.icon size={48} className="text-green-700 mx-auto mb-2" />
                    <h2 className="text-xl font-bold">{item.name}</h2>
                    <p className="text-sm text-gray-700 mb-4">{item.desc}</p>
                    <p className="text-xs text-gray-600">{item.modalDesc}</p>
                </div>
            ))}
        </div>
    );
}
