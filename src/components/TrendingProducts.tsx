"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useProducts } from "@/context/ProductContext";

import Toast from "@/components/Toast";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";


export default function TrendingProducts(){


const { products } = useProducts();


const { addToCart } = useCart();

const { addToWishlist } = useWishlist();


const router = useRouter();


const [toast,setToast]=useState("");





function showToast(message:string){


setToast(message);


setTimeout(()=>{

setToast("");

},2000);


}







function buyNow(product:any){


addToCart(product);


showToast("⚡ Added to Cart. Going Checkout...");


setTimeout(()=>{

router.push("/checkout");

},500);


}






return(


<>


<Toast

message={toast}

show={toast!==""}

/>






<section className="max-w-7xl mx-auto px-6 py-12">





<h2 className="text-4xl font-serif text-center text-[#6b4d1f] mb-8">

TRENDING PRODUCTS

</h2>






<Swiper


modules={[Autoplay,FreeMode]}


spaceBetween={25}


slidesPerView={1}



breakpoints={{


640:{
slidesPerView:2
},


1024:{
slidesPerView:4
}


}}




autoplay={{


delay:2500,

disableOnInteraction:false


}}




freeMode={{


enabled:true


}}



grabCursor={true}


loop={products.length > 4}



>






{

products.slice(0,10).map((product)=>(



<SwiperSlide key={product.id}>


<div className="bg-white rounded-xl shadow-lg overflow-hidden">






<Image


src={product.image}


alt={product.name}


width={400}


height={300}


quality={100}


className="w-full h-64 object-cover"



/>







<div className="p-5">





<span className="bg-[#9b7a3d] text-white text-xs px-3 py-1 rounded-full">


{product.category}


</span>








<h3 className="mt-3 text-lg font-bold text-[#6b4d1f]">


{product.name}


</h3>







<p className="text-gray-500">


{product.purity}


</p>







<p className="text-gray-500">


Weight: {product.weight}


</p>







<p className="mt-3 text-2xl font-bold text-[#9b7a3d]">


৳ {product.price.toLocaleString()}


</p>









<button


onClick={()=>{


addToCart(product);


showToast("🛒 Added to Cart");


}}



className="mt-4 w-full bg-[#9b7a3d] text-white py-3 rounded-lg hover:bg-[#7c622f]"



>


Add To Cart


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


Buy Now


</button>










<Link


href={`/products/${product.id}`}



className="mt-3 block text-center text-[#9b7a3d]"



>


View Product


</Link>








</div>





</div>



</SwiperSlide>



))



}






</Swiper>







</section>




</>


);



}