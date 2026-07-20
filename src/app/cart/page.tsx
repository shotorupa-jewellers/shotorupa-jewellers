"use client";


import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { useCart } from "@/context/CartContext";




export default function CartPage(){



const {

cart,

removeFromCart,

increaseQuantity,

decreaseQuantity


}=useCart();




const [removeId,setRemoveId]=useState<number | null>(null);





const total = cart.reduce(

(sum,item)=>

sum + item.price * item.quantity,

0

);





const totalItems = cart.reduce(

(sum,item)=>sum + item.quantity,

0

);








function removeItem(id:number){


setRemoveId(id);


setTimeout(()=>{


removeFromCart(id);


setRemoveId(null);



},300);


}









return(



<main className="min-h-screen bg-[#f8f4ee] py-12">



<section className="max-w-7xl mx-auto px-6">






<h1 className="text-5xl font-serif text-[#6b4d1f] mb-3">

Shopping Cart

</h1>




<p className="text-gray-500 mb-10">

{totalItems} Jewellery Item(s)

</p>








{

cart.length===0 ?





<div className="bg-white rounded-3xl shadow-xl p-12 text-center">



<div className="text-6xl mb-5">

💎

</div>



<h2 className="text-3xl font-serif text-[#6b4d1f]">

Your Cart is Empty

</h2>




<p className="text-gray-500 mt-3">

Add your favourite jewellery collection

</p>







<Link

href="/"

className="inline-block mt-8 bg-[#9b7a3d] text-white px-10 py-4 rounded-xl"

>

Continue Shopping

</Link>





</div>





:





<div className="grid lg:grid-cols-3 gap-8">







{/* Cart Items */}



<div className="lg:col-span-2 space-y-5">






{

cart.map((item)=>(



<div

key={item.id}

className={`
bg-white rounded-2xl shadow p-6 flex gap-6 items-center transition duration-300

${removeId===item.id ? "opacity-0 scale-95" : ""}
`}

>





<Image

src={item.image}

alt={item.name}

width={150}

height={150}

className="rounded-xl object-cover"

 />









<div className="flex-1">





<h2 className="text-xl font-bold text-[#6b4d1f]">

{item.name}

</h2>





<p className="text-gray-500 mt-2">

{item.purity}

</p>




<p className="text-gray-500">

Weight: {item.weight}

</p>







<p className="text-[#9b7a3d] text-2xl font-bold mt-3">

৳ {(item.price * item.quantity).toLocaleString()}

</p>








<div className="flex items-center gap-4 mt-5">





<button

onClick={()=>decreaseQuantity(item.id)}

className="w-10 h-10 rounded-full bg-gray-200 text-xl"

>

−

</button>







<span className="text-xl font-bold">

{item.quantity}

</span>







<button

onClick={()=>increaseQuantity(item.id)}

className="w-10 h-10 rounded-full bg-[#9b7a3d] text-white text-xl"

>

+

</button>






</div>








</div>









<button

onClick={()=>removeItem(item.id)}

className="text-red-500 hover:text-red-700"

>

Remove

</button>






</div>



))


}





</div>









{/* Summary */}



<div className="bg-white rounded-3xl shadow-xl p-8 h-fit">





<h2 className="text-3xl font-serif text-[#6b4d1f] mb-8">

Order Summary

</h2>







<div className="flex justify-between text-lg mb-4">


<span>

Items

</span>


<span>

{totalItems}

</span>


</div>







<div className="border-t pt-5 flex justify-between text-2xl font-bold">


<span>

Total

</span>


<span className="text-[#9b7a3d]">

৳ {total.toLocaleString()}

</span>



</div>









<Link

href="/checkout"

className="block text-center mt-8 bg-[#9b7a3d] text-white py-4 rounded-xl font-semibold hover:bg-[#7a602d]"

>

Proceed To Checkout

</Link>








<Link

href="/"

className="block text-center mt-4 border border-[#9b7a3d] text-[#9b7a3d] py-4 rounded-xl"

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