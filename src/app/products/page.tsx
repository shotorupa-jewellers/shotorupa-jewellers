"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { products } from "@/data/products";

import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

import Toast from "@/components/Toast";


export default function ProductsPage(){


const { addToCart } = useCart();

const { addToWishlist } = useWishlist();


const [toast,setToast] = useState("");



function showToast(message:string){

setToast(message);


setTimeout(()=>{

setToast("");

},2000);


}





function buyNow(product:any){


if(!product) return;


addToCart(product);


showToast("⚡ Added to Cart. Going Checkout...");


setTimeout(()=>{

window.location.href="/checkout";

},500);


}






return(


<main className="min-h-screen bg-[#f8f4ee]">


<Toast

message={toast}

show={toast !== ""}

/>





<div className="bg-[#9b7a3d] text-white py-14">


<h1 className="text-center text-5xl font-serif">

OUR COLLECTION

</h1>


<p className="text-center mt-4">

Explore our premium gold & diamond jewellery

</p>


</div>






<section className="max-w-7xl mx-auto px-6 py-10">


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">



{

products.map((product)=>(


<div

key={product.id}

className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"

>



<Image

src={product.image}

alt={product.name}

width={500}

height={400}

className="w-full h-72 object-cover"

/>






<div className="p-5">



<h2 className="text-xl font-bold text-[#6b4d1f]">

{product.name}

</h2>





<p className="mt-2 text-gray-600">

{product.purity}

</p>





<p className="text-gray-600">

Weight: {product.weight}

</p>






<p className="text-2xl font-bold text-[#9b7a3d] mt-3">

৳ {product.price.toLocaleString()}

</p>








<button

onClick={()=>{

addToCart(product);

showToast("🛒 Added to Cart");

}}

className="mt-5 w-full bg-[#9b7a3d] text-white py-3 rounded-lg"

>

🛒 Add To Cart

</button>








<button

onClick={()=>{

addToWishlist(product);

showToast("❤️ Added to Wishlist");

}}

className="mt-3 w-full border border-[#9b7a3d] text-[#9b7a3d] py-3 rounded-lg"

>

♡ Wishlist

</button>










<button

onClick={()=>buyNow(product)}

className="mt-3 w-full bg-black text-white py-3 rounded-lg"

>

⚡ Buy Now

</button>










<Link

href={`/products/${product.id}`}

className="block text-center mt-4 text-[#9b7a3d] font-semibold"

>

View Product

</Link>






</div>


</div>


))


}



</div>


</section>


</main>


);


}