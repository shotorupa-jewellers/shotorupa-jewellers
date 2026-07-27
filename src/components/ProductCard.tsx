"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Heart,
  ShoppingBag
} from "lucide-react";

import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";



type Product = {

  id:number;

  name:string;

  cat:string;

  price:string;

  metal:string;

  stone:string;

  img:string;

};





export default function ProductCard({

product

}:{

product:Product;

}) {



const {addToCart}=useCart();

const {addToWishlist}=useWishlist();





function handleWishlist(){


addToWishlist({

id:String(product.id),

name:product.name,

price:Number(
product.price.replace(/[^\d]/g,"")
),

image:product.img,

category:product.cat,

weight:product.metal,

purity:product.stone

});


}





return (

<div

className="
group
bg-white
rounded-2xl
overflow-hidden
shadow-sm
hover:shadow-xl
transition-all
duration-500
"

>





{/* IMAGE */}


<div

className="
relative
aspect-square
overflow-hidden
"

>


<Image

src={product.img}

alt={product.name}

fill

className="
object-cover
group-hover:scale-110
transition-transform
duration-700
"

/>





{/* WISHLIST BUTTON */}


<button

onClick={handleWishlist}

className="
absolute
top-4
right-4
w-10
h-10
rounded-full
bg-white
flex
items-center
justify-center
shadow
hover:text-[#A6875A]
transition
"

>


<Heart size={18}/>


</button>



</div>







{/* DETAILS */}


<div

className="
p-6
"

>



<h3

className="
font-serif
text-xl
text-[#19160F]
"

>

{product.name}

</h3>





<p

className="
mt-2
text-xs
uppercase
tracking-widest
text-gray-500
"

>

{product.metal}

</p>





<p

className="
mt-1
text-xs
uppercase
tracking-widest
text-[#A6875A]
"

>

{product.stone}

</p>





<p

className="
mt-4
text-lg
font-bold
text-[#A6875A]
"

>

{product.price}

</p>







{/* CART BUTTON */}


<button

onClick={()=>addToCart({

id:String(product.id),

name:product.name,

price:Number(
product.price.replace(/[^\d]/g,"")
),

image:product.img,

category:product.cat,

weight:product.metal,

purity:product.stone

})}


className="
mt-6
w-full
py-3
bg-[#241C16]
text-white
flex
items-center
justify-center
gap-2
text-xs
uppercase
tracking-[0.2em]
hover:bg-[#A6875A]
transition
duration-300
"

>


<ShoppingBag size={16}/>


Add To Cart


</button>







<Link

href={`/products/${product.id}`}

className="
block
mt-5
text-center
text-xs
uppercase
tracking-widest
text-[#A6875A]
hover:underline
"

>

View Details

</Link>





</div>





</div>

);

}