"use client";

import Image from "next/image";
import Link from "next/link";

import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";


export default function WishlistPage(){


const {
 wishlist,
 removeFromWishlist

}=useWishlist();



const {
 addToCart

}=useCart();








return(


<main className="min-h-screen bg-[#f8f4ee] py-12">


<section className="max-w-6xl mx-auto px-6">



<h1 className="text-4xl font-serif text-[#6b4d1f] mb-10">

My Wishlist

</h1>







{

wishlist.length===0 ?



<div className="bg-white rounded-xl shadow p-10 text-center">


<h2 className="text-2xl text-gray-600">

Your Wishlist is Empty

</h2>



<Link

href="/"

className="inline-block mt-6 bg-[#9b7a3d] text-white px-8 py-3 rounded-lg"

>

Continue Shopping

</Link>


</div>





:





<div className="grid md:grid-cols-3 gap-8">


{


wishlist.map((product)=>(



<div

key={product.id}

className="bg-white rounded-xl shadow overflow-hidden hover:scale-105 transition"

>



<Image

src={product.image}

alt={product.name}

width={400}

height={300}

className="w-full h-64 object-cover"

/>







<div className="p-5">





<h2 className="text-xl font-bold text-[#6b4d1f]">

{product.name}

</h2>





<p className="text-gray-500 mt-2">

{product.purity}

</p>





<p className="text-gray-500">

Weight: {product.weight}

</p>






<p className="text-2xl font-bold text-[#9b7a3d] mt-3">

৳ {product.price.toLocaleString()}

</p>









<button

onClick={()=>addToCart({

...product,

id:String(product.id)

})}

className="mt-5 w-full bg-[#9b7a3d] text-white py-3 rounded-lg"

>

Add To Cart

</button>









<button

onClick={()=>removeFromWishlist(String(product.id))}

className="mt-3 w-full border border-red-500 text-red-500 py-3 rounded-lg"

>

Remove

</button>







</div>





</div>




))


}




</div>




}



</section>


</main>


);


}