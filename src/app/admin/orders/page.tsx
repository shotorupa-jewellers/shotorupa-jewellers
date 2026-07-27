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



const [orders,setOrders]=useState<any[]>([]);

const [search,setSearch]=useState("");







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


const data=snapshot.docs.map(item=>(

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












// Update Status


async function changeStatus(

id:string,

status:string

){



await updateDoc(

doc(
db,
"orders",
id
),

{

orderStatus:status

}

);



}











// Delete Order


async function deleteOrder(

id:string

){



const confirmDelete=confirm(

"Delete this order?"

);



if(!confirmDelete)return;



await deleteDoc(

doc(
db,
"orders",
id
)

);



}









const filteredOrders=orders.filter((order)=>{


const text=

search.toLowerCase();



return (

order.orderId
?.toLowerCase()
.includes(text)

||

order.customer?.name
?.toLowerCase()
.includes(text)

);



});









return(



<main className="
min-h-screen
bg-[#f8f4ee]
p-6
lg:p-8
text-black
">



<section className="
max-w-7xl
mx-auto
">






<h1 className="
text-4xl
font-serif
font-bold
text-[#6b4d1f]
mb-8
">

📦 Admin Orders

</h1>









{/* Search */}



<div className="
bg-white
rounded-xl
shadow
p-5
mb-8
flex
items-center
gap-3
">


<Search

className="
text-gray-400
"

/>



<input

placeholder="Search Order ID or Customer Name"

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


<div className="
bg-white
p-8
rounded-xl
shadow
">

No Orders Found

</div>



:





<div className="
space-y-8
">





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







{/* Header */}



<div className="
flex
justify-between
items-center
mb-6
flex-wrap
gap-3
">



<h2 className="
text-xl
font-bold
">

Order ID:

{order.orderId || order.id}

</h2>






<span

className={`
px-4
py-2
rounded-full
text-white

${
order.orderStatus==="Delivered"

?

"bg-green-600"

:

order.orderStatus==="Cancelled"

?

"bg-red-600"

:

"bg-yellow-600"

}

`}

>

{order.orderStatus || "Pending"}

</span>




</div>









{/* Customer Payment Total */}



<div className="
grid
md:grid-cols-3
gap-6
">







<div>


<h3 className="
font-bold
text-lg
mb-3
">

Customer

</h3>



<p>

Name:

{order.customer?.name || "N/A"}

</p>



<p>

Email:

{order.customer?.email || "N/A"}

</p>



<p>

Phone:

{order.customer?.phone || "N/A"}

</p>



<p>

Address:

{order.customer?.address || "N/A"}

</p>



</div>









<div>


<h3 className="
font-bold
text-lg
mb-3
">

Payment

</h3>



<p>

Method:

{order.payment || "N/A"}

</p>



<p>

Payment Status:

{order.paymentStatus || "Pending"}

</p>


</div>









<div>


<h3 className="
font-bold
text-lg
mb-3
">

Total Amount

</h3>



<p className="
text-3xl
font-bold
text-[#9b7a3d]
">

৳ {order.total?.toLocaleString()}

</p>


</div>







</div>









{/* Products */}



<h3 className="
font-bold
text-xl
mt-8
mb-4
">

Products

</h3>








{

order.products?.map((item:any)=>(



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


<p className="
font-semibold
">

{item.name}

</p>



<p className="
text-sm
text-gray-500
">

Quantity:

{item.quantity}

</p>



</div>





<p className="
font-semibold
">

৳ {(item.price * item.quantity)
.toLocaleString()}

</p>




</div>



))


}













{/* Action Buttons */}



<div className="
mt-6
flex
gap-3
flex-wrap
">





<button

onClick={()=>
changeStatus(
order.id,
"Processing"
)

}

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

onClick={()=>
changeStatus(
order.id,
"Delivered"
)

}

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

onClick={()=>
changeStatus(
order.id,
"Cancelled"
)

}

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

onClick={()=>
deleteOrder(order.id)
}

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