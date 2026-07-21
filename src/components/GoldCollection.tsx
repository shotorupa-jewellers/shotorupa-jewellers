"use client";

import Image from "next/image";
import Link from "next/link";

import { useProducts } from "@/context/ProductContext";


const defaultGold = [
{
id:"g1",
name:"Royal Gold Necklace",
image:"/images/necklace.jpg",
purity:"22K Gold",
weight:"15g",
price:85000,
category:"Gold"
},
{
id:"g2",
name:"Bridal Gold Set",
image:"/images/bridal.jpg",
purity:"22K Gold",
weight:"45g",
price:250000,
category:"Gold"
},
{
id:"g3",
name:"Elegant Gold Ring",
image:"/images/ring.jpg",
purity:"22K Gold",
weight:"8g",
price:45000,
category:"Gold"
}
];



export default function GoldCollection(){


const {products=[]}=useProducts();



const goldProducts =
products.filter(
(product)=>product.category==="Gold"
);



const showProducts =
goldProducts.length > 0
?
goldProducts
:
defaultGold;



return(


<section className="max-w-7xl mx-auto px-6 py-14">



<div className="flex justify-between items-center mb-8">


<div>

<h2 className="text-4xl font-serif text-[#6b4d1f]">
GOLD COLLECTION
</h2>


<p className="text-gray-500 mt-2">
Timeless gold jewellery crafted with elegance.
</p>


</div>



<Link

href="/products?category=Gold"

className="border border-[#9b7a3d] px-6 py-3 rounded-full text-[#9b7a3d]"

>

View All

</Link>


</div>





<div className="grid md:grid-cols-3 gap-8">


{

showProducts.map((product)=>(


<div

key={product.id}

className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition"

>


<div className="overflow-hidden">


<Image

src={product.image}

alt={product.name}

width={500}

height={400}

className="w-full h-72 object-cover"

 />

</div>



<div className="p-6">


<span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">

GOLD

</span>



<h3 className="text-2xl font-bold text-[#6b4d1f] mt-4">

{product.name}

</h3>


<p className="text-gray-500 mt-2">

{product.purity}

</p>



<p className="text-gray-500">

Weight: {product.weight}

</p>



<p className="text-3xl font-bold text-[#9b7a3d] mt-4">

৳ {product.price.toLocaleString()}

</p>



<Link

href={`/products/${product.id}`}

className="block text-center mt-6 bg-[#9b7a3d] text-white py-3 rounded-xl"

>

View Product

</Link>



</div>


</div>


))


}


</div>




</section>


);


}