"use client";


import { useEffect, useState } from "react";

import {
useParams
} from "next/navigation";


import {
doc,
getDoc
} from "firebase/firestore";


import {
db
} from "@/lib/firebase";





export default function InvoicePage(){



const params = useParams();

const id = params.id as string;



const [order,setOrder]=useState<any>(null);








useEffect(()=>{


async function loadOrder(){



const snap = await getDoc(

doc(
db,
"orders",
id
)

);



if(snap.exists()){


setOrder({

id:snap.id,

...snap.data()

});


}


}



if(id){

loadOrder();

}



},[id]);









if(!order){


return(

<div className="
min-h-screen
flex
items-center
justify-center
">

Loading Invoice...


</div>

);


}









return(


<main className="
min-h-screen
bg-gray-100
p-8
text-black
">






<div className="
max-w-4xl
mx-auto
bg-white
shadow-xl
p-10
rounded-xl
">







{/* Header */}



<div className="
flex
justify-between
border-b
pb-6
mb-6
">





<div>


<h1 className="
text-3xl
font-serif
font-bold
text-[#6b4d1f]
">

SHOTORUPA JEWELLERS

</h1>


<p>

Premium Gold & Diamond Jewellery

</p>


</div>






<div className="text-right">


<h2 className="
text-xl
font-bold
">

INVOICE

</h2>


<p>

Order ID:

{order.orderId}

</p>


</div>




</div>









{/* Customer */}



<div className="
grid
md:grid-cols-2
gap-6
mb-8
">



<div>


<h3 className="
font-bold
mb-2
">

Bill To

</h3>


<p>

Name:

{order.customer?.name}

</p>


<p>

Phone:

{order.customer?.phone}

</p>


<p>

Address:

{order.customer?.address}

</p>



</div>







<div>


<h3 className="
font-bold
mb-2
">

Payment

</h3>



<p>

Method:

{order.payment}

</p>



<p>

Status:

{order.paymentStatus}

</p>



<p>

Order Status:

{order.orderStatus}

</p>



</div>




</div>









{/* Product Table */}



<table className="
w-full
border
">



<thead className="
bg-[#f3e5c5]
">


<tr>


<th className="
border
p-3
text-left
">

Product

</th>


<th className="
border
p-3
">

Qty

</th>


<th className="
border
p-3
">

Price

</th>


<th className="
border
p-3
">

Total

</th>



</tr>



</thead>







<tbody>



{

order.products?.map((item:any)=>(


<tr key={item.id}>


<td className="
border
p-3
">

{item.name}

</td>



<td className="
border
p-3
text-center
">

{item.quantity}

</td>




<td className="
border
p-3
">

৳ {item.price?.toLocaleString()}

</td>





<td className="
border
p-3
">

৳ {(item.price * item.quantity)
.toLocaleString()}

</td>



</tr>


))


}



</tbody>



</table>









{/* Total */}



<div className="
text-right
mt-8
">


<h2 className="
text-3xl
font-bold
text-[#9b7a3d]
">

Total:

৳ {order.total?.toLocaleString()}

</h2>



</div>









<button

onClick={()=>window.print()}

className="
mt-8
bg-[#9b7a3d]
text-white
px-8
py-3
rounded-lg
"

>

🖨 Print Invoice

</button>







</div>


</main>


);


}