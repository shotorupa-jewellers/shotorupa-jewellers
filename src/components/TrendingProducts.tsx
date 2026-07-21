"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";

import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useProducts } from "@/context/ProductContext";

import Toast from "@/components/Toast";



const defaultProducts = [

{
id:"1",
name:"Royal Gold Necklace",
category:"Gold",
price:85000,
image:"/images/necklace.jpg",
weight:"25g",
purity:"22K Gold"
},

{
id:"2",
name:"Diamond Ring",
category:"Diamond",
price:120000,
image:"/images/ring.jpg",
weight:"8g",
purity:"18K Diamond"
},

{
id:"3",
name:"Bridal Jewellery Set",
category:"Gold",
price:250000,
image:"/images/bridal.jpg",
weight:"60g",
purity:"22K Gold"
},

{
id:"4",
name:"Luxury Earrings",
category:"Gold",
price:45000,
image:"/images/earrings.jpg",
weight:"10g",
purity:"22K Gold"
}

];





export default function TrendingProducts(){



const {products:adminProducts}=useProducts();



const products = [

...(adminProducts && adminProducts.length > 0

?

adminProducts

:

defaultProducts)

].sort(

(a,b)=>b.price-a.price

);





const {addToCart}=useCart();

const {addToWishlist}=useWishlist();


const router=useRouter();


const [toast,setToast]=useState("");





function showToast(message:string){

setToast(message);


setTimeout(()=>{

setToast("");

},2000);

}






function buyNow(product:any){


addToCart({

...product,

id:String(product.id)

});


showToast("⚡ Added To Cart");


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





<h2

className="
text-4xl
font-serif
text-center
text-[#6b4d1f]
mb-10
"

>

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


loop={products.length>4}



>





{

products.slice(0,10).map((product)=>(




<SwiperSlide key={product.id}>


<div

className="
bg-white
rounded-2xl
shadow-xl
overflow-hidden
"

>




<Image

src={product.image}

alt={product.name}

width={500}

height={400}

quality={100}

className="
w-full
h-64
object-cover
"

/>







<div className="p-5">





<span

className="
bg-[#9b7a3d]
text-white
text-xs
px-3
py-1
rounded-full
"

>

{product.category}

</span>






<h3

className="
mt-4
text-xl
font-bold
text-[#6b4d1f]
"

>

{product.name}

</h3>






<p className="text-gray-500 mt-2">

{product.purity}

</p>






<p className="text-gray-500">

Weight: {product.weight}

</p>






<p

className="
text-2xl
font-bold
text-[#9b7a3d]
mt-3
"

>

৳ {product.price.toLocaleString()}

</p>








<button

onClick={()=>{


addToCart({

...product,

id:String(product.id)

});


showToast("🛒 Added To Cart");


}}



className="
mt-5
w-full
bg-[#9b7a3d]
text-white
py-3
rounded-xl
hover:bg-[#7c622f]
"

>

🛒 Add To Cart

</button>








<button


onClick={()=>{


addToWishlist({

...product,

id:String(product.id)

});


showToast("❤️ Added To Wishlist");


}}



className="
mt-3
w-full
border
border-[#9b7a3d]
text-[#9b7a3d]
py-3
rounded-xl
"

>

♡ Wishlist

</button>








<button


onClick={()=>buyNow(product)}


className="
mt-3
w-full
bg-black
text-white
py-3
rounded-xl
"

>

⚡ Buy Now

</button>








<Link


href={`/products/${product.id}`}


className="
block
text-center
mt-4
text-[#9b7a3d]
font-semibold
"

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