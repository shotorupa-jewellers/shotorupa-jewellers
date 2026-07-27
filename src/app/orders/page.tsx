"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import {
  Package,
  Gem,
  CreditCard,
  CalendarDays,
  FileText
} from "lucide-react";


import {
  auth,
  db
} from "@/lib/firebase";


import {
  collection,
  query,
  where,
  onSnapshot,
  orderBy
} from "firebase/firestore";







export default function OrdersPage(){



const [orders,setOrders] = useState<any[]>([]);

const [loading,setLoading] = useState(true);







useEffect(()=>{



const user = auth.currentUser;



if(!user){

setLoading(false);

return;

}






const q = query(

collection(db,"orders"),

where(
"customer.email",
"==",
user.email
),

orderBy(
"createdAt",
"desc"
)

);








const unsubscribe = onSnapshot(

q,

(snapshot)=>{


const data = snapshot.docs.map(doc=>(

{
id:doc.id,
...doc.data()

}

));



setOrders(data);

setLoading(false);



}



);





return ()=>unsubscribe();




},[]);









function statusStyle(status:string){


switch(status){


case "Delivered":

return "bg-green-100 text-green-700";


case "Cancelled":

return "bg-red-100 text-red-700";


case "Confirmed":

return "bg-blue-100 text-blue-700";


default:

return "bg-yellow-100 text-yellow-700";


}



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
max-w-6xl
mx-auto
px-5
"

>






{/* HEADER */}



<div className="mb-12">


<p

className="
text-xs
tracking-[0.3em]
uppercase
text-[#A6875A]
"

>

Luxury Jewellery Account

</p>



<h1

className="
text-5xl
font-serif
mt-3
text-[#19160F]
"

>

My Orders

</h1>




<p

className="
text-gray-500
mt-3
"

>

Track your Shotorupa jewellery purchases

</p>



</div>









{

loading ?



<div

className="
bg-white
rounded-3xl
p-10
text-center
shadow
"

>

Loading Orders...


</div>








:





orders.length===0 ?





<div

className="
bg-white
rounded-3xl
p-12
text-center
shadow-xl
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

className="
text-[#A6875A]
"

/>


</div>





<h2

className="
text-3xl
font-serif
mt-6
"

>

No Orders Found


</h2>




<p

className="
text-gray-500
mt-3
"

>

Your jewellery collection journey starts here


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
"

>

Shop Jewellery


</Link>




</div>







:





<div

className="
space-y-8
"

>


{


orders.map((order)=>(



<div

key={order.id}

className="
bg-white
rounded-3xl
shadow-lg
border
border-[#A6875A]/20
p-7
"

>









{/* ORDER HEADER */}



<div

className="
flex
flex-col
md:flex-row
justify-between
gap-5
mb-8
"

>


<div>



<div

className="
flex
items-center
gap-3
"

>


<Package

className="
text-[#A6875A]
"

/>



<h2

className="
text-xl
font-bold
"

>

{order.orderId || order.id}


</h2>



</div>





<div

className="
flex
items-center
gap-2
text-gray-500
text-sm
mt-3
"

>

<CalendarDays size={16}/>



{

order.createdAt?.toDate

?

order.createdAt
.toDate()
.toLocaleDateString()

:

""

}


</div>




</div>







<span

className={`
px-5
py-2
rounded-full
text-sm
font-semibold
w-fit

${statusStyle(order.status)}
`}

>

{

order.status || "Pending"

}


</span>



</div>









{/* PRODUCTS */}



<h3

className="
font-serif
text-xl
mb-5
"

>

Products

</h3>







<div

className="
space-y-4
"

>


{

order.products?.map((item:any)=>(



<div

key={item.id}

className="
flex
items-center
gap-5
bg-[#F8F4EE]
rounded-2xl
p-4
"

>



{

item.image &&

<Image

src={item.image}

alt={item.name}

width={80}

height={80}

className="
rounded-xl
object-cover
"

/>

}






<div className="flex-1">


<h4

className="
font-semibold
"

>

{item.name}


</h4>




<p

className="
text-sm
text-gray-500
"

>

Quantity: {item.quantity}


</p>




</div>







<p

className="
font-bold
text-[#A6875A]
"

>

৳ {

(item.price *
item.quantity)
.toLocaleString()

}


</p>






</div>



))


}



</div>









{/* FOOTER */}



<div

className="
border-t
mt-8
pt-6
space-y-4
"

>




<div

className="
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

৳ {order.total?.toLocaleString()}


</span>


</div>







<div

className="
flex
items-center
gap-2
text-gray-600
"

>

<CreditCard size={18}/>


Payment:

{" "}

{order.payment || "Cash On Delivery"}


</div>








<Link

href={`/invoice/${order.id}`}

className="
inline-flex
items-center
gap-2
mt-4
px-6
py-3
border
border-[#A6875A]
text-[#A6875A]
rounded-xl
hover:bg-[#A6875A]
hover:text-white
transition
"

>


<FileText size={18}/>


View Invoice


</Link>






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