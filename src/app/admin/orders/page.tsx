"use client";

import {
  useEffect,
  useState
} from "react";

import Link from "next/link";

import {
  Search,
  FileText,
  Trash2,
  CheckCircle,
  XCircle,
  Clock
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


const [orders,setOrders]=useState<any[]>([]);

const [search,setSearch]=useState("");






// LOAD ORDERS

useEffect(()=>{


const q=query(

collection(db,"orders"),

orderBy(
"createdAt",
"desc"
)

);



const unsubscribe=onSnapshot(

q,

(snapshot)=>{


const data=snapshot.docs.map((item)=>(

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










// STATUS UPDATE

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

status,
orderStatus:status

}

);



}

catch(error){

console.log(error);

}


}









// DELETE ORDER

async function deleteOrder(id:string){


const ok=confirm(
"Delete this order?"
);


if(!ok)return;



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

const filteredOrders=orders.filter((order)=>{


const text=search.toLowerCase();



return(

order.id
?.toLowerCase()
.includes(text)


||

order.customer?.name
?.toLowerCase()
.includes(text)


||

order.customer?.phone
?.includes(search)


);



});









return(


<main

className="
min-h-screen
bg-[#F6F3EC]
p-6
lg:p-10
text-[#19160F]
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
text-[#A6875A]
mb-8
"

>

📦 Admin Orders

</h1>






{/* SEARCH */}


<div

className="
bg-white
rounded-2xl
shadow
p-5
mb-8
flex
items-center
gap-3
border
border-[#A6875A]/20
"

>


<Search

className="
text-[#A6875A]
"

/>



<input

value={search}

onChange={(e)=>setSearch(e.target.value)}

placeholder="Search customer name or phone"

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
rounded-2xl
p-10
text-center
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
rounded-3xl
shadow-xl
border
border-[#A6875A]/20
p-6
"

>









{/* ORDER HEADER */}



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

<span

className="
text-[#A6875A]
"

>

{order.id}

</span>


</h2>



<p

className="
text-sm
text-gray-500
mt-1
"

>


{

order.createdAt?.toDate

?

order.createdAt
.toDate()
.toLocaleString()

:

""

}


</p>


</div>








<span

className={`

px-5
py-2
rounded-full
font-semibold
text-sm


${
order.status==="Delivered"

?

"bg-green-100 text-green-700"

:

order.status==="Cancelled"

?

"bg-red-100 text-red-700"

:

"bg-yellow-100 text-yellow-700"

}

`}

>


{order.status || "Pending"}


</span>




</div>









{/* CUSTOMER PAYMENT TOTAL */}



<div

className="
grid
md:grid-cols-3
gap-5
"

>







{/* CUSTOMER */}



<div

className="
bg-[#F6F3EC]
rounded-2xl
p-5
"

>


<h3

className="
font-bold
text-lg
text-[#A6875A]
mb-4
"

>

Customer

</h3>



<p>

Name:

<b>

{" "}

{

order.customer?.name ||

order.customerName ||

"N/A"

}

</b>

</p>




<p>

Phone:

<b>

{" "}

{

order.customer?.phone ||

order.phone ||

"N/A"

}

</b>

</p>





<p>

City:

<b>

{" "}

{

order.customer?.city ||

order.city ||

"N/A"

}

</b>

</p>





<p>

Address:

<b>

{" "}

{

order.customer?.address ||

order.address ||

"N/A"

}

</b>

</p>




</div>









{/* PAYMENT */}



<div

className="
bg-[#F6F3EC]
rounded-2xl
p-5
"

>


<h3

className="
font-bold
text-lg
text-[#A6875A]
mb-4
"

>

Payment

</h3>





<p>

Method:

<b>

{" "}

{

order.payment ||

"Cash On Delivery"

}

</b>

</p>





<p>

Payment Status:

<span

className="
font-bold
text-yellow-600
"

>

{" "}

{

order.paymentStatus ||

"Pending"

}

</span>


</p>




</div>









{/* TOTAL */}



<div

className="
bg-[#F6F3EC]
rounded-2xl
p-5
"

>


<h3

className="
font-bold
text-lg
text-[#A6875A]
mb-4
"

>

Total Amount

</h3>




<h2

className="
text-3xl
font-bold
text-[#A6875A]
"

>

৳ {order.total?.toLocaleString()}

</h2>



</div>







</div>













{/* PRODUCTS */}



<div

className="
mt-8
"

>



<h3

className="
text-xl
font-bold
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
items-center
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

(item.price * item.quantity)

.toLocaleString()

}


</p>





</div>



))


}




</div>



</div>
{/* ACTION BUTTONS */}



<div

className="
mt-8
flex
flex-wrap
gap-3
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
py-3
rounded-xl
flex
items-center
gap-2
hover:scale-105
transition
"

>


<Clock size={18}/>


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
py-3
rounded-xl
flex
items-center
gap-2
hover:scale-105
transition
"

>


<CheckCircle size={18}/>


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
py-3
rounded-xl
flex
items-center
gap-2
hover:scale-105
transition
"

>


<XCircle size={18}/>


Cancel


</button>












{/* GOLDEN INVOICE */}



<Link

href={`/admin/invoice/${order.id}`}

className="
bg-gradient-to-r
from-[#D4AF37]
to-[#A6875A]
text-white
px-5
py-3
rounded-xl
flex
items-center
gap-2
font-semibold
shadow-lg
hover:scale-105
transition
"

>


<FileText size={18}/>


Invoice


</Link>












{/* DELETE */}



<button


onClick={()=>deleteOrder(order.id)}


className="
border
border-red-500
text-red-500
px-5
py-3
rounded-xl
flex
items-center
gap-2
hover:bg-red-500
hover:text-white
transition
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