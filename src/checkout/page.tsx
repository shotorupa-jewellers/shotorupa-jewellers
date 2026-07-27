"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { useCart } from "@/context/CartContext";



export default function CheckoutPage(){


const {cart,clearCart}=useCart();



const [name,setName]=useState("");

const [phone,setPhone]=useState("");

const [address,setAddress]=useState("");

const [city,setCity]=useState("");

const [loading,setLoading]=useState(false);





const total = cart.reduce(

(sum,item)=>

sum + item.price * item.quantity,

0

);







function placeOrder(){


if(!name || !phone || !address){

alert("Please fill all information");

return;

}



setLoading(true);





const order={


customerName:name,

phone:phone,

address:address,

city:city,


products:cart,


total:total,


date:new Date().toISOString()


};




console.log(order);



clearCart();


setLoading(false);



alert("Order placed successfully!");



}









return(


<main className="
min-h-screen
bg-[#F6F3EC]
py-24
px-6
">





<div className="
max-w-6xl
mx-auto
grid
md:grid-cols-2
gap-10
">








{/* CUSTOMER INFORMATION */}


<section className="
bg-white
p-8
rounded-2xl
shadow
">


<h1 className="
font-serif
text-4xl
mb-8
text-[#19160F]
">

Checkout

</h1>






<div className="
space-y-5
">



<input

type="text"

placeholder="Full Name"

value={name}

onChange={(e)=>setName(e.target.value)}

className="
w-full
border
px-5
py-4
rounded-lg
outline-none
"

/>






<input

type="tel"

placeholder="Phone Number"

value={phone}

onChange={(e)=>setPhone(e.target.value)}

className="
w-full
border
px-5
py-4
rounded-lg
outline-none
"

/>







<input

type="text"

placeholder="City"

value={city}

onChange={(e)=>setCity(e.target.value)}

className="
w-full
border
px-5
py-4
rounded-lg
outline-none
"

/>







<textarea

placeholder="Full Address"

value={address}

onChange={(e)=>setAddress(e.target.value)}

className="
w-full
border
px-5
py-4
rounded-lg
h-32
outline-none
"

/>







<button

onClick={placeOrder}

disabled={loading}

className="
w-full
bg-[#A6875A]
text-white
py-4
uppercase
tracking-widest
rounded-lg
hover:bg-[#8d7048]
transition
"

>

{

loading

?

"Processing..."

:

"Place Order"

}


</button>





</div>


</section>









{/* ORDER SUMMARY */}



<section className="
bg-white
p-8
rounded-2xl
shadow
">


<h2 className="
text-3xl
font-serif
mb-8
">

Order Summary

</h2>





<div className="
space-y-5
">


{

cart.map((item)=>(


<div

key={item.id}

className="
flex
gap-4
border-b
pb-4
"


>


<Image

src={item.image}

alt={item.name}

width={80}

height={80}

className="
rounded-lg
object-cover
"

/>





<div>

<h3 className="font-semibold">

{item.name}

</h3>


<p className="text-sm text-gray-500">

Qty: {item.quantity}

</p>


<p className="text-[#A6875A]">

৳ {(item.price * item.quantity).toLocaleString()}

</p>


</div>



</div>


))


}





</div>







<div className="
mt-8
border-t
pt-5
flex
justify-between
text-xl
font-bold
">


<span>

Total

</span>


<span className="text-[#A6875A]">

৳ {total.toLocaleString()}

</span>


</div>





<Link

href="/cart"

className="
block
mt-8
text-center
border
py-3
rounded
"

>

Back To Cart

</Link>





</section>







</div>


</main>


);


}