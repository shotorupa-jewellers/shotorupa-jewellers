"use client";

import Image from "next/image";
import Link from "next/link";

import { Heart } from "lucide-react";

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

product?:Product;

}){



const {
addToWishlist,
wishlist

}=useWishlist();





if(!product){

return null;

}





const isWishlisted = wishlist?.some(

(item:any)=>

item.id === String(product.id)

);







const handleWishlist = ()=>{


if(!product) return;



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


};









return(


<div

className="
group
relative
cursor-pointer
"

>





{/* IMAGE */}


<div

className="
relative
aspect-[4/5]
overflow-hidden
border
border-[#e8dfd2]
bg-gradient-to-br
from-[#f6f3ec]
via-white
to-[#eee5d8]
"

>



<Image

src={product.img || "/images/ring.jpg"}

alt={product.name}

fill

sizes="(max-width:768px) 100vw, 300px"

className="
object-cover
transition-all
duration-700
group-hover:scale-110
"

/>







<div

className="
absolute
inset-0
border
border-[#A6875A]
opacity-0
group-hover:opacity-100
transition
duration-500
"

/>








{/* WISHLIST BUTTON */}



<button


onClick={handleWishlist}


className="
absolute
top-4
right-4
z-10
w-9
h-9
rounded-full
bg-[#f6f3ec]/90
flex
items-center
justify-center
shadow
hover:bg-white
transition
"

>



<Heart

size={16}

strokeWidth={1.5}

className={

isWishlisted

?

"fill-[#A6875A] stroke-[#A6875A]"

:

"stroke-[#19160F]"

}

/>



</button>









{/* HOVER DETAILS */}



<div

className="
absolute
inset-0
bg-black/30
opacity-0
group-hover:opacity-100
transition
duration-500
flex
items-center
justify-center
"

>



<Link

href={`/products/${product.id}`}

className="
border
border-white
text-white
px-8
py-3
text-[10px]
uppercase
tracking-[0.35em]
hover:bg-white
hover:text-black
transition
"

>

VIEW DETAILS

</Link>



</div>





</div>









{/* DETAILS */}



<div

className="
pt-5
px-1
flex
justify-between
items-start
"

>



<div>



<p

className="
text-[10px]
uppercase
tracking-[0.35em]
text-[#A6875A]
mb-2
"

>

THE SIGNATURE EDIT

</p>





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
text-[11px]
uppercase
tracking-widest
text-[#91806B]
"

>

{product.metal}

&nbsp; · &nbsp;

{product.stone}


</p>



</div>







<p

className="
text-sm
text-[#A6875A]
whitespace-nowrap
"

>

{product.price}

</p>





</div>









<Link

href={`/products/${product.id}`}

className="
block
mt-5
text-center
text-[10px]
uppercase
tracking-[0.3em]
text-[#A6875A]
hover:underline
"

>

EXPLORE JEWELLERY

</Link>





</div>


);


}