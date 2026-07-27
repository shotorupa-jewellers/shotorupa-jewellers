"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Heart,
  ShoppingBag,
  Trash2
} from "lucide-react";

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


<main className="
min-h-screen
bg-[#F6F3EC]
py-24
">



<section className="
max-w-6xl
mx-auto
px-6
">





<div className="
flex
items-center
gap-3
mb-14
">


<Heart

size={22}

className="
text-[#A6875A]
"

/>


<h1 className="
text-2xl
font-serif
tracking-wide
text-[#19160F]
">

My Wishlist

</h1>


</div>









{
wishlist.length===0 ?


<div className="
bg-white
rounded-2xl
p-6
mt-10
text-center
border
border-[#A6875A]/20
max-w-md
mx-auto
">



<Heart

size={30}

className="
mx-auto
text-[#A6875A]
mb-3
"

/>





<h2 className="
text-lg
font-serif
text-gray-600
">

Your Wishlist is Empty

</h2>





<Link

href="/shop"

className="
inline-block
mt-4
bg-[#A6875A]
text-white
px-6
py-2
text-sm
rounded-full
hover:bg-[#8c6d45]
transition
"

>

Explore Jewellery

</Link>



</div>







:


<div className="
grid
sm:grid-cols-2
lg:grid-cols-3
gap-8
">






{
wishlist.map((product)=>(



<div

key={product.id}

className="
bg-white
rounded-2xl
overflow-hidden
border
border-[#A6875A]/20
group
transition
hover:-translate-y-1
"

>



<div className="
relative
h-64
overflow-hidden
">


<Image

src={product.image}

alt={product.name}

fill

className="
object-cover
group-hover:scale-105
transition
duration-500
"

/>


</div>









<div className="
p-5
">



<h2 className="
font-serif
text-lg
text-[#19160F]
">

{product.name}

</h2>





<p className="
text-sm
text-gray-500
mt-2
">

{product.purity}

</p>




<p className="
text-sm
text-gray-500
">

Weight: {product.weight}

</p>





<p className="
text-xl
font-semibold
text-[#A6875A]
mt-3
">

৳ {product.price.toLocaleString()}

</p>







<button


onClick={()=>{


addToCart({

...product,

id:String(product.id)

});


}}



className="
mt-4
w-full
bg-[#19160F]
text-white
py-2.5
rounded-full
flex
items-center
justify-center
gap-2
text-sm
hover:bg-[#A6875A]
transition
"

>


<ShoppingBag size={16}/>

Add To Cart


</button>







<button


onClick={()=>removeFromWishlist(product.id)}



className="
mt-2
w-full
border
border-red-300
text-red-500
py-2.5
rounded-full
flex
items-center
justify-center
gap-2
text-sm
hover:bg-red-50
transition
"

>


<Trash2 size={16}/>

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