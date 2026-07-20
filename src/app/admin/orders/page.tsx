"use client";

import { useEffect, useState } from "react";

import { db } from "@/lib/firebase";

import {
  collection,
  onSnapshot,
  query,
  orderBy,
  doc,
  updateDoc
} from "firebase/firestore";



export default function OrdersPage(){



const [orders,setOrders] = useState<any[]>([]);






useEffect(()=>{


const q = query(

collection(db,"orders"),

orderBy("createdAt","desc")

);





const unsubscribe = onSnapshot(q,(snapshot)=>{


const data = snapshot.docs.map((doc)=>({


id:doc.id,

...doc.data()


}));



setOrders(data);



});





return ()=>unsubscribe();



},[]);









async function changeStatus(id:string,status:string){


const orderRef = doc(

db,

"orders",

id

);



await updateDoc(orderRef,{

status:status

});


}









return(


<main className="min-h-screen bg-[#f8f4ee] p-8">





<section className="max-w-7xl mx-auto">



<h1 className="text-4xl font-serif text-[#6b4d1f] mb-8">

Admin Orders

</h1>









{

orders.length===0 ?


<div className="bg-white p-8 rounded-xl shadow">


No Orders Found


</div>



:


<div className="space-y-8">





{

orders.map((order)=>(




<div

key={order.id}

className="bg-white rounded-xl shadow p-6"

>






<div className="flex justify-between items-center mb-5">



<h2 className="text-xl font-bold">

Order ID: {order.orderId}

</h2>




<span className="bg-yellow-600 text-white px-4 py-2 rounded-full">


{order.status}


</span>



</div>









<div className="grid md:grid-cols-3 gap-6">





<div>


<h3 className="font-bold text-lg mb-3">

Customer

</h3>


<p>

Name: {order.customer?.name}

</p>


<p>

Email: {order.customer?.email}

</p>



<p>

Phone: {order.customer?.phone}

</p>



<p>

Address: {order.customer?.address}

</p>



</div>










<div>


<h3 className="font-bold text-lg mb-3">

Payment

</h3>


<p>

{order.payment}

</p>



</div>








<div>


<h3 className="font-bold text-lg mb-3">

Total Amount

</h3>


<p className="text-2xl text-[#9b7a3d] font-bold">

৳ {order.total?.toLocaleString()}

</p>



</div>





</div>









<h3 className="font-bold text-xl mt-6 mb-3">

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









<div className="mt-6 flex gap-3">



<button

onClick={()=>changeStatus(order.id,"Processing")}

className="bg-blue-600 text-white px-4 py-2 rounded"

>

Processing

</button>





<button

onClick={()=>changeStatus(order.id,"Delivered")}

className="bg-green-600 text-white px-4 py-2 rounded"

>

Delivered

</button>







<button

onClick={()=>changeStatus(order.id,"Cancelled")}

className="bg-red-600 text-white px-4 py-2 rounded"

>

Cancel

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