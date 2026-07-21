"use client";

import Image from "next/image";
import Link from "next/link";

import { useProducts } from "@/context/ProductContext";


const defaultDiamond = [
{
id:"d1",
name:"Diamond Bridal Necklace",
image:"/images/diamond-necklace.jpg",
purity:"VVS Diamond",
weight:"12g",
price:350000,
category:"Diamond"
},
{
id:"d2",
name:"Diamond Engagement Ring",
image:"/images/diamond-ring.jpg",
purity:"Pure Diamond",
weight:"5g",
price:180000,
category:"Diamond"
},
{
id:"d3",
name:"Luxury Diamond Earrings",
image:"/images/diamond-earrings.jpg",
purity:"VVS Diamond",
weight:"8g",
price:220000,
category:"Diamond"
}
];



export default function DiamondCollection(){


const {products=[]}=useProducts();



const diamondProducts = products.filter(

(product)=>product.category==="Diamond"

);



const showProducts =

diamondProducts.length > 0

?

diamondProducts

:

defaultDiamond;




return(


<section className="max-w-7xl mx-auto px-6 py-14">





<div className="flex justify-between items-center mb-8">



<div>


<h2 className="text-4xl font-serif text-[#6b4d1f]">

DIAMOND COLLECTION

</h2>



<p className="text-gray-500 mt-2">

Elegant diamond jewellery for your special moments.

</p>


</div>





<Link

href="/products?category=Diamond"

className="border border-[#9b7a3d] px-6 py-3 rounded-full text-[#9b7a3d] hover:bg-[#9b7a3d] hover:text-white transition"

>

View All

</Link>



</div>






<div className="grid grid-cols-1 md:grid-cols-3 gap-8">


{

showProducts.map((product)=>(



<div

key={product.id}

className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"

>



<div className="overflow-hidden">


<Image

src={product.image}

alt={product.name}

width={500}

height={400}

quality={100}

className="w-full h-72 object-cover hover:scale-110 transition duration-500"

/>


</div>





<div className="p-6">


<span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">

DIAMOND

</span>




<h3 className="mt-4 text-2xl font-bold text-[#6b4d1f]">

{product.name}

</h3>




<p className="mt-2 text-gray-500">

{product.purity}

</p>




<p className="text-gray-500">

Weight: {product.weight}

</p>




<p className="mt-4 text-3xl font-bold text-[#9b7a3d]">

৳ {product.price.toLocaleString()}

</p>




<Link

href={`/products/${product.id}`}

className="mt-6 block text-center w-full bg-[#9b7a3d] text-white py-3 rounded-xl hover:bg-[#7a602d]"

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