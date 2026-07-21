"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { useCart } from "@/context/CartContext";

import { db } from "@/lib/firebase";

import {
  collection,
  addDoc,
  serverTimestamp
} from "firebase/firestore";


export default function CheckoutPage(){

const router = useRouter();


const {
  cart,
  clearCart
} = useCart();



const [name,setName] = useState("");

const [email,setEmail] = useState("");

const [phone,setPhone] = useState("");

const [address,setAddress] = useState("");

const [payment,setPayment] = useState(
"Cash On Delivery"
);


const [loading,setLoading] = useState(false);






// Auto Fill Customer Information

useEffect(()=>{


const userInfo = JSON.parse(

localStorage.getItem("userInfo") || "null"

);



if(userInfo){


setName(userInfo.name || "");

setEmail(userInfo.email || "");

setPhone(userInfo.phone || "");


}



},[]);








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





const order = {



orderId:

"ORD-" + Date.now(),






customer:{


name:name,

email:email,

phone:phone,

address:address


},






products:cart,






total:total,






payment:payment,





paymentStatus:"Pending",





orderStatus:"Pending",






createdAt:serverTimestamp()



};







await addDoc(

collection(db,"orders"),

order

);







// Clear Cart

clearCart();



// Save success order id

localStorage.setItem(

"lastOrder",

order.orderId

);







router.push(

"/order-success"

);





}

catch(error){


console.log(error);


alert(
"Order Failed"
);


}


finally{


setLoading(false);


}



}









return(


<main className="
min-h-screen
bg-[#f8f4ee]
py-12
text-black
">



<section className="
max-w-6xl
mx-auto
px-6
">





<h1 className="
text-4xl
font-serif
text-[#6b4d1f]
mb-8
">

Checkout

</h1>









<div className="
grid
md:grid-cols-2
gap-8
">







{/* Customer Information */}



<div className="
bg-white
rounded-xl
shadow
p-8
">



<h2 className="
text-2xl
font-bold
mb-6
">

Customer Information

</h2>






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
p-3
rounded-lg
mb-4
"

/>







<input

type="email"

placeholder="Email"

value={email}

onChange={(e)=>
setEmail(e.target.value)
}

className="
w-full
border
p-3
rounded-lg
mb-4
"

/>







<input

type="text"

placeholder="Phone Number"

value={phone}

onChange={(e)=>
setPhone(e.target.value)
}

className="
w-full
border
p-3
rounded-lg
mb-4
"

/>







<textarea

placeholder="Delivery Address"

value={address}

onChange={(e)=>
setAddress(e.target.value)
}

className="
w-full
border
p-3
rounded-lg
mb-4
h-32
"

/>







<select

value={payment}

onChange={(e)=>
setPayment(e.target.value)
}

className="
w-full
border
p-3
rounded-lg
"

>



<option>
Cash On Delivery
</option>


<option>
Bank Transfer
</option>


<option>
Card Payment
</option>


<option>
bKash
</option>


<option>
Nagad
</option>



</select>





</div>













{/* Order Summary */}



<div className="
bg-white
rounded-xl
shadow
p-8
">





<h2 className="
text-2xl
font-bold
mb-6
">

Order Summary

</h2>









{

cart.map((item)=>(


<div

key={item.id}

className="
flex
justify-between
border-b
py-3
"

>


<div>


<p className="font-semibold">

{item.name}

</p>


<p className="text-sm text-gray-500">

Quantity: {item.quantity}

</p>


</div>






<p>

৳ {(item.price * item.quantity)
.toLocaleString()}

</p>





</div>


))


}









<div className="
flex
justify-between
mt-6
text-xl
font-bold
">



<span>

Total

</span>




<span className="
text-[#9b7a3d]
">

৳ {total.toLocaleString()}

</span>




</div>










<button


onClick={placeOrder}


disabled={loading}


className="
mt-8
w-full
bg-[#9b7a3d]
text-white
py-4
rounded-xl
font-semibold
hover:bg-[#7c622f]
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









</div>







</section>





</main>


);


}