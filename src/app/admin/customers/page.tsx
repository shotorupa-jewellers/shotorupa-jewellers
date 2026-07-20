"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";

import {
 collection,
 onSnapshot
} from "firebase/firestore";


export default function CustomersPage(){


const [customers,setCustomers]=useState<any[]>([]);



useEffect(()=>{


const unsub = onSnapshot(

collection(db,"users"),

(snapshot)=>{


const data=snapshot.docs.map(doc=>({

id:doc.id,

...doc.data()

}));


setCustomers(data);


}


);



return ()=>unsub();



},[]);





return(

<main className="min-h-screen bg-[#f8f4ee] p-8">


<h1 className="text-4xl font-serif text-[#6b4d1f] mb-8">

Customers

</h1>




<div className="bg-white rounded-xl shadow p-6">


{

customers.length===0 ?


<p>No Customers Found</p>


:


customers.map((user)=>(


<div

key={user.id}

className="border-b py-5"

>


<h2 className="font-bold text-xl">

{user.name}

</h2>


<p>

Email: {user.email}

</p>


<p>

Phone: {user.phone}

</p>



</div>


))


}



</div>



</main>


)

}