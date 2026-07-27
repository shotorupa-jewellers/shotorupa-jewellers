"use client";


import { useEffect, useState } from "react";

import Link from "next/link";


import {
  Search,
  FileText,
  Trash2
} from "lucide-react";


import {
  db
} from "@/lib/firebase";


import {
  collection,
  onSnapshot,
  query,
  orderBy,
  doc,
  updateDoc,
  deleteDoc
} from "firebase/firestore";







export default function OrdersPage(){



const [orders,setOrders] = useState<any[]>([]);

const [search,setSearch] = useState("");






// GET ORDERS FROM FIREBASE

useEffect(()=>{


const q = query(

collection(db,"orders"),

orderBy(
"createdAt",
"desc"
)

);




const unsubscribe = onSnapshot(

q,

(snapshot)=>{


const data = snapshot.docs.map((item)=>(

{

id:item.id,

...item.data()

}

));


setOrders(data);



}

);



return()=>unsubscribe();



},[]);











// CHANGE STATUS


async function changeStatus(

id:string,

status:string

){


try{


await updateDoc(

doc(
db,
"orders",
id
),

{

status:status

}

);



}

catch(error){


console.log(error);


}


}











// DELETE ORDER


async function deleteOrder(

id:string

){



const ok = confirm(
"Delete this order?"
);



if(!ok) return;



try{


await deleteDoc(

doc(
db,
"orders",
id
)

);



}

catch(error){


console.log(error);


}



}












// SEARCH


const filteredOrders = orders.filter((order)=>{


const text = search.toLowerCase();



return (

order.id
.toLowerCase()
.includes(text)

||

order.customerName
?.toLowerCase()
.includes(text)

||

order.phone
?.includes(search)

);


});












return(



<main

className="
min-h-screen
bg-[#f8f4ee]
p-6
lg:p-10
text-black
"

>



<section

className="
max-w-7xl
mx-auto
"

>



<h1

className="
text-4xl
font-serif
font-bold
text-[#6b4d1f]
mb-8
"

>

📦 Admin Orders

</h1>









{/* SEARCH */}


<div

className="
bg-white
rounded-xl
shadow
p-5
mb-8
flex
items-center
gap-3
"

>


<Search
className="
text-gray-400
"
/>



<input

placeholder="
Search Customer Name or Phone
"

value={search}

onChange={(e)=>
setSearch(e.target.value)
}

className="
w-full
outline-none
"

/>


</div>









{

filteredOrders.length===0 ?


<div

className="
bg-white
p-8
rounded-xl
shadow
"

>

No Orders Found

</div>



:





<div

className="
space-y-8
"

>


{


filteredOrders.map((order)=>(



<div

key={order.id}

className="
bg-white
rounded-2xl
shadow
p-6
"

>










{/* HEADER */}



<div

className="
flex
justify-between
items-center
flex-wrap
gap-4
mb-6
"

>



<div>


<h2

className="
text-xl
font-bold
"

>

Order ID:

<span className="text-[#A6875A]">

{order.id}

</span>


</h2>



</div>






<span

className={`

px-4
py-2
rounded-full
text-white
text-sm


${
order.status==="Delivered"

?

"bg-green-600"

:

order.status==="Cancelled"

?

"bg-red-600"

:

"bg-yellow-600"

}

`}

>


{order.status || "Pending"}


</span>



</div>













{/* CUSTOMER INFO */}



<div

className="
grid
md:grid-cols-3
gap-8
"

>





<div>


<h3

className="
font-bold
text-lg
mb-3
"

>

Customer

</h3>



<p>

Name:

{order.customerName || "N/A"}

</p>



<p>

Phone:

{order.phone || "N/A"}

</p>



<p>

City:

{order.city || "N/A"}

</p>



<p>

Address:

{order.address || "N/A"}

</p>



</div>












{/* PAYMENT */}



<div>


<h3

className="
font-bold
text-lg
mb-3
"

>

Payment

</h3>



<p>

Method:

Cash On Delivery

</p>



<p>

Payment Status:

Pending

</p>



</div>













{/* TOTAL */}



<div>


<h3

className="
font-bold
text-lg
mb-3
"

>

Total Amount

</h3>



<p

className="
text-3xl
font-bold
text-[#9b7a3d]
"

>

৳ {order.total?.toLocaleString()}


</p>



</div>





</div>













{/* PRODUCTS */}



<h3

className="
font-bold
text-xl
mt-8
mb-4
"

>

Products

</h3>







<div

className="
space-y-3
"

>


{


order.products?.map((item:any)=>(



<div

key={item.id}

className="
flex
justify-between
border-b
pb-3
"

>


<div>


<p

className="
font-semibold
"

>

{item.name}

</p>



<p

className="
text-sm
text-gray-500
"

>

Quantity:

{item.quantity}

</p>



</div>




<p

className="
font-bold
"

>

৳ {(item.price * item.quantity)
.toLocaleString()}

</p>




</div>



))


}



</div>














{/* BUTTONS */}



<div

className="
mt-8
flex
gap-3
flex-wrap
"

>




<button

onClick={()=>changeStatus(
order.id,
"Processing"
)}

className="
bg-blue-600
text-white
px-5
py-2
rounded-lg
"

>

Processing

</button>







<button

onClick={()=>changeStatus(
order.id,
"Delivered"
)}

className="
bg-green-600
text-white
px-5
py-2
rounded-lg
"

>

Delivered

</button>








<button

onClick={()=>changeStatus(
order.id,
"Cancelled"
)}

className="
bg-red-600
text-white
px-5
py-2
rounded-lg
"

>

Cancel

</button>









<Link

href={`/admin/invoice/${order.id}`}

className="
bg-black
text-white
px-5
py-2
rounded-lg
flex
items-center
gap-2
"

>


<FileText size={18}/>

Invoice


</Link>








<button

onClick={()=>deleteOrder(order.id)}

className="
border
border-red-600
text-red-600
px-5
py-2
rounded-lg
flex
items-center
gap-2
"

>


<Trash2 size={18}/>

Delete


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