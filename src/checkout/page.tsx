"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { useCart } from "@/context/CartContext";

import {
  collection,
  addDoc,
  Timestamp
} from "firebase/firestore";

import { db } from "@/lib/firebase";



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






async function placeOrder(){


if(!name || !phone || !address){


alert(
"Please fill all information"
);


return;


}



if(cart.length===0){


alert(
"Your cart is empty"
);


return;


}






try{


setLoading(true);





const orderData={



customerName:name,


phone:phone,


city:city,


address:address,



products:cart.map(item=>({

id:item.id,

name:item.name,

image:item.image,

price:item.price,

quantity:item.quantity,

category:item.category,

weight:item.weight,

purity:item.purity

})),



total:total,


status:"Pending",


createdAt:Timestamp.now()



};







await addDoc(

collection(db,"orders"),

orderData

);








clearCart();



alert(
"Order placed successfully!"
);



window.location.href="/";





}

catch(error){


console.error(
"Order Error:",
error
);


alert(
"Order failed. Try again!"
);



}

finally{


setLoading(false);


}



}









return(


<main
className="
min-h-screen
bg-[#F6F3EC]
py-24
px-6
"
>



<div
className="
max-w-6xl
mx-auto
grid
md:grid-cols-2
gap-10
"
>







{/* CUSTOMER FORM */}


<section
className="
bg-white
p-8
rounded-2xl
shadow
"
>


<h1
className="
font-serif
text-4xl
mb-8
"
>

Checkout

</h1>





<div
className="
space-y-5
"
>





<input

type="text"

placeholder="Full Name"

value={name}

onChange={(e)=>
setName(e.target.value)
}

className="
w-full
border
px-5
py-4
rounded-lg
"

 />








<input

type="tel"

placeholder="Phone Number"

value={phone}

onChange={(e)=>
setPhone(e.target.value)
}

className="
w-full
border
px-5
py-4
rounded-lg
"

 />









<input

type="text"

placeholder="City"

value={city}

onChange={(e)=>
setCity(e.target.value)
}

className="
w-full
border
px-5
py-4
rounded-lg
"

 />









<textarea

placeholder="Full Address"

value={address}

onChange={(e)=>
setAddress(e.target.value)
}

className="
w-full
border
px-5
py-4
rounded-lg
h-32
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
rounded-lg
tracking-widest
uppercase
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



<section
className="
bg-white
p-8
rounded-2xl
shadow
"
>


<h2
className="
font-serif
text-3xl
mb-8
"
>

Order Summary

</h2>








{

cart.length===0 ?



<p>
Cart is empty
</p>



:



cart.map(item=>(


<div

key={item.id}

className="
flex
gap-4
border-b
pb-4
mb-5
"

>


<Image

src={item.image}

alt={item.name}

width={90}

height={90}

className="
rounded-lg
object-cover
"

/>






<div>


<h3
className="
font-semibold
"
>

{item.name}

</h3>



<p>
Qty: {item.quantity}
</p>



<p
className="
text-[#A6875A]
"
>

৳ {(item.price * item.quantity).toLocaleString()}

</p>



</div>





</div>



))


}








<div
className="
border-t
pt-5
mt-8
flex
justify-between
text-xl
font-bold
"
>


<span>
Total
</span>


<span
className="
text-[#A6875A]
"
>

৳ {total.toLocaleString()}

</span>



</div>







<Link

href="/cart"

className="
block
mt-8
border
py-3
text-center
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