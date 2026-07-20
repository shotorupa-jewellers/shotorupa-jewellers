"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

import { products } from "@/data/products";

import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

import Toast from "@/components/Toast";


export default function ProductDetails(){


const params = useParams();

const router = useRouter();


const id = Number(params.id);



const product = products.find(
(item)=>item.id === id
);



const { addToCart } = useCart();

const { addToWishlist } = useWishlist();



const [toast,setToast] = useState("");



function showToast(message:string){

setToast(message);


setTimeout(()=>{

setToast("");

},2000);

}





if(!product){

return(

<div className="min-h-screen flex items-center justify-center">

<h1 className="text-3xl">

Product Not Found

</h1>

</div>

);

}







function addCart(){

if(!product) return;


addToCart(product);


showToast("🛒 Added to Cart");

}





function addWish(){

if(!product) return;


addToWishlist(product);


showToast("❤️ Added to Wishlist");

}







function buyNow(){

if(!product) return;


addToCart(product);


showToast("⚡ Added to Cart");


setTimeout(()=>{

router.push("/checkout");

},500);

}








function shareWhatsapp(){


if(!product) return;



const message =

`আমি এই Jewellery টি দেখতে চাই:

${product.name}

Price:
৳ ${product.price.toLocaleString()}

SHOTORUPA JEWELLERS`;



const url =

`https://wa.me/8801828784693?text=${encodeURIComponent(message)}`;



window.open(url,"_blank");


}









function callShop(){


window.open(

"tel:+8801828784693"

);


}







return(


<main className="min-h-screen bg-[#f8f4ee] py-12">


<Toast

message={toast}

show={toast !== ""}

/>





<section className="max-w-6xl mx-auto px-6">



<div className="grid md:grid-cols-2 gap-10 bg-white rounded-3xl shadow-xl p-8">





<div>


<Image

src={product.image}

alt={product.name}

width={700}

height={700}

quality={100}

className="w-full h-[600px] object-cover rounded-2xl"

/>


</div>









<div className="flex flex-col justify-center">



<span className="bg-[#9b7a3d] text-white px-5 py-2 rounded-full w-fit">

{product.category}

</span>






<h1 className="text-5xl font-serif text-[#6b4d1f] mt-6">

{product.name}

</h1>







<p className="text-gray-600 mt-6 text-lg">

Purity: {product.purity}

</p>






<p className="text-gray-600 text-lg">

Weight: {product.weight}

</p>






<h2 className="text-4xl font-bold text-[#9b7a3d] mt-8">

৳ {product.price.toLocaleString()}

</h2>








<div className="grid grid-cols-2 gap-4 mt-8">





<button

onClick={addCart}

className="bg-[#9b7a3d] text-white py-4 rounded-xl"

>

🛒 Add To Cart

</button>








<button

onClick={buyNow}

className="bg-black text-white py-4 rounded-xl"

>

⚡ Buy Now

</button>








<button

onClick={addWish}

className="border border-[#9b7a3d] text-[#9b7a3d] py-4 rounded-xl"

>

♡ Wishlist

</button>








<button

onClick={shareWhatsapp}

className="bg-green-600 text-white py-4 rounded-xl"

>

💬 WhatsApp

</button>




</div>










<button

onClick={callShop}

className="mt-5 w-full border-2 border-[#9b7a3d] text-[#9b7a3d] py-4 rounded-xl"

>

📞 Call Shop

</button>







</div>





</div>


</section>


</main>


);


}