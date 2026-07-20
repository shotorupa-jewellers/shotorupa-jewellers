"use client";

import { useEffect, useState } from "react";

import { auth, db } from "@/lib/firebase";

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







const unsubscribe = onSnapshot(q,(snapshot)=>{



const data = snapshot.docs.map((doc)=>(


{

id:doc.id,

...doc.data()

}


));



setOrders(data);


setLoading(false);



});






return ()=>unsubscribe();




},[]);











return(



<main className="min-h-screen bg-[#f8f4ee] py-12">



<section className="max-w-6xl mx-auto px-6">





<h1 className="text-4xl font-serif text-[#6b4d1f] mb-8">

My Orders

</h1>









{

loading ?


<div className="bg-white p-8 rounded-xl shadow">

Loading Orders...

</div>



:



orders.length===0 ?



<div className="bg-white p-8 rounded-xl shadow text-center">


<h2 className="text-xl text-gray-500">

No Orders Found

</h2>


</div>





:



<div className="space-y-6">







{

orders.map((order)=>(



<div

key={order.id}

className="bg-white rounded-xl shadow p-6"

>






<div className="flex justify-between items-center mb-5">



<div>

<h2 className="font-bold text-xl">

{order.orderId}

</h2>



<p className="text-sm text-gray-500">

{

order.createdAt?.toDate

?

order.createdAt.toDate().toLocaleString()

:

""

}

</p>


</div>







<span className="bg-yellow-600 text-white px-4 py-2 rounded-full">


{order.status}


</span>




</div>









<h3 className="font-bold text-lg mb-3">

Products

</h3>







{

order.products?.map((item:any)=>(



<div

key={item.id}

className="flex justify-between border-b py-3"

>



<span>

{item.name} × {item.quantity}

</span>



<span>

৳ {(item.price * item.quantity).toLocaleString()}

</span>



</div>



))


}









<div className="flex justify-between mt-6 text-xl font-bold">



<span>

Total

</span>




<span className="text-[#9b7a3d]">

৳ {order.total?.toLocaleString()}

</span>



</div>








<div className="mt-5">


<p>

Payment: {order.payment}

</p>



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