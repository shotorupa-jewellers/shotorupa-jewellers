"use client";


import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


import {
  Trash2,
  Minus,
  Plus,
  ShoppingBag,
  Gem,
  Truck,
  Tag
} from "lucide-react";


import { useCart } from "@/context/CartContext";







export default function CartPage(){



const {

cart,

removeFromCart,

increaseQuantity,

decreaseQuantity


}=useCart();





const [removeId,setRemoveId]=useState<string | null>(null);








const subtotal = cart.reduce(

(sum,item)=>

sum + Number(item.price) * item.quantity,

0

);





const totalItems = cart.reduce(

(sum,item)=>

sum + item.quantity,

0

);





const shipping = subtotal > 50000 ? 0 : 500;



const discount = 0;



const total = subtotal + shipping - discount;









function removeItem(id:string){



setRemoveId(id);



setTimeout(()=>{


removeFromCart(id);


setRemoveId(null);



},300);



}









return(



<main

className="
min-h-screen
bg-[#F8F4EE]
py-14
"

>



<section

className="
max-w-7xl
mx-auto
px-5
"

>








<div className="mb-12">


<p

className="
text-xs
tracking-[0.3em]
uppercase
text-[#A6875A]
"

>

Luxury Collection

</p>





<h1

className="
mt-3
text-5xl
font-serif
text-[#19160F]
"

>

Shopping Cart

</h1>





<p

className="
mt-3
text-gray-500
"

>

{totalItems} jewellery item(s) selected

</p>



</div>












{

cart.length===0 ?





<div

className="
bg-white
rounded-3xl
shadow-xl
p-14
text-center
"

>



<div

className="
w-20
h-20
mx-auto
rounded-full
bg-[#A6875A]/10
flex
items-center
justify-center
"

>


<Gem

size={40}

className="text-[#A6875A]"

/>


</div>







<h2

className="
mt-8
text-3xl
font-serif
text-[#19160F]
"

>

Your Cart Is Empty

</h2>







<p

className="
text-gray-500
mt-3
"

>

Discover our handcrafted jewellery collection

</p>








<Link

href="/shop"

className="
inline-block
mt-8
px-10
py-4
bg-[#A6875A]
text-white
rounded-xl
hover:bg-[#8b6d42]
transition
"

>

Explore Collection

</Link>





</div>







:





<div

className="
grid
lg:grid-cols-3
gap-8
"

>









{/* CART ITEMS */}



<div

className="
lg:col-span-2
space-y-6
"

>



{


cart.map((item)=>(





<div

key={item.id}

className={`
bg-white
rounded-3xl
p-6
flex
flex-col
sm:flex-row
gap-6
items-start
sm:items-center

border
border-[#A6875A]/10

transition-all
duration-300

${
removeId===item.id
?
"opacity-0 scale-95"
:
"hover:shadow-xl"
}

`}

>







<div

className="
relative
"

>


<Image


src={
item.image ||
"/images/product-placeholder.jpg"
}


alt={item.name}


width={160}


height={160}


className="
rounded-2xl
object-cover
w-40
h-40
"

/>





<div

className="
absolute
bottom-2
right-2
bg-[#A6875A]
text-white
rounded-full
p-2
"

>

<Gem size={14}/>

</div>


</div>









<div className="flex-1">





<h2

className="
text-xl
font-serif
text-[#19160F]
"

>

{item.name}

</h2>





<p className="text-gray-500 mt-2">

{item.purity}

</p>





<p className="text-gray-500 text-sm">

Weight: {item.weight}

</p>






<p

className="
mt-4
text-2xl
font-bold
text-[#A6875A]
"

>

৳ {(item.price * item.quantity).toLocaleString()}

</p>







<div

className="
flex
items-center
gap-4
mt-5
"

>





<button


onClick={()=>{

if(item.quantity>1){

decreaseQuantity(item.id)

}

}}


className="
w-10
h-10
rounded-full
border
border-[#A6875A]
flex
items-center
justify-center
hover:bg-[#A6875A]
hover:text-white
transition
"

>


<Minus size={18}/>


</button>








<span className="font-bold text-lg">

{item.quantity}

</span>








<button


onClick={()=>increaseQuantity(item.id)}


className="
w-10
h-10
rounded-full
bg-[#A6875A]
text-white
flex
items-center
justify-center
hover:bg-[#8b6d42]
transition
"

>


<Plus size={18}/>


</button>





</div>





</div>









<button


onClick={()=>removeItem(item.id)}


className="
text-red-500
hover:text-red-700
"

>


<Trash2 size={22}/>


</button>






</div>





))


}





</div>













{/* SUMMARY */}





<div

className="
bg-white
rounded-3xl
p-8
shadow-xl
h-fit
sticky
top-24
border
border-[#A6875A]/20
"

>



<h2

className="
text-3xl
font-serif
text-[#19160F]
mb-8
"

>

Order Summary

</h2>








<div className="space-y-5">





<div className="flex justify-between">

<span>

Items

</span>


<strong>

{totalItems}

</strong>


</div>






<div className="flex justify-between">


<span>

Subtotal

</span>


<span>

৳ {subtotal.toLocaleString()}

</span>


</div>








<div className="flex justify-between">


<span className="flex items-center gap-2">

<Truck size={17}/>

Shipping

</span>



<span>

{

shipping===0

?

"FREE"

:

`৳ ${shipping}`

}

</span>



</div>







<div className="flex justify-between">


<span className="flex items-center gap-2">

<Tag size={17}/>

Discount

</span>



<span>

৳ {discount}

</span>



</div>









<div

className="
border-t
pt-5
flex
justify-between
text-2xl
font-bold
"

>


<span>

Total

</span>



<span className="text-[#A6875A]">

৳ {total.toLocaleString()}

</span>


</div>







</div>










<Link


href={
cart.length
?
"/checkout"
:
"/shop"
}


className="
mt-8
block
text-center
py-4
rounded-xl
bg-gradient-to-r
from-[#D4AF37]
to-[#A6875A]
text-white
font-semibold
hover:scale-105
transition
"

>


<ShoppingBag

className="inline mr-2"

/>


Proceed To Checkout


</Link>







<Link


href="/shop"


className="
mt-4
block
text-center
py-4
rounded-xl
border
border-[#A6875A]
text-[#A6875A]
hover:bg-[#A6875A]
hover:text-white
transition
"

>


Continue Shopping


</Link>







</div>









</div>





}



</section>



</main>


);


}