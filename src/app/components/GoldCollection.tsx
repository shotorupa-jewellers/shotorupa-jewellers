"use client";

import Image from "next/image";


const goldProducts = [
  {
    name: "Royal Gold Necklace",
    image: "/images/necklace.jpg",
    price: "৳ 1,50,000",
    weight: "25 Gram",
    purity: "22K Gold",
  },
  {
    name: "Traditional Gold Earrings",
    image: "/images/earrings.jpg",
    price: "৳ 45,000",
    weight: "8 Gram",
    purity: "22K Gold",
  },
  {
    name: "Bridal Gold Set",
    image: "/images/bridal.jpg",
    price: "৳ 3,50,000",
    weight: "60 Gram",
    purity: "22K Gold",
  },
  {
    name: "Gold Ring",
    image: "/images/ring.jpg",
    price: "৳ 85,000",
    weight: "10 Gram",
    purity: "22K Gold",
  },
];


export default function GoldCollection(){

return (

<section className="max-w-7xl mx-auto px-6 py-12">


<h2 className="text-4xl font-serif text-center text-[#6b4d1f] mb-3">
GOLD COLLECTION
</h2>


<p className="text-center text-gray-500 mb-8">
Premium 22K gold jewellery crafted for your special moments
</p>



<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">


{goldProducts.map((product)=>(


<div
key={product.name}
className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
>


<Image
src={product.image}
alt={product.name}
width={400}
height={300}
quality={100}
className="w-full h-64 object-cover hover:scale-105 transition"
/>


<div className="p-5">


<h3 className="font-bold text-lg text-[#6b4d1f]">
{product.name}
</h3>


<p className="text-gray-600 mt-2">
{product.purity}
</p>


<p className="text-gray-600">
Weight: {product.weight}
</p>


<p className="text-xl font-bold text-[#9b7a3d] mt-3">
{product.price}
</p>


<button className="mt-4 w-full bg-[#9b7a3d] text-white py-2 rounded">
View Product
</button>


</div>


</div>


))}


</div>


</section>

);

}