"use client";

import {
  useEffect,
  useState
} from "react";

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

import {
  Printer,
  Gem,
  Crown
} from "lucide-react";


export default function InvoicePage(){


const params = useParams();

const id = params.id as string;


const [order,setOrder]=useState<any>(null);





useEffect(()=>{


async function load(){


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

load();

}



},[id]);







if(!order){


return(

<div

className="
min-h-screen
flex
items-center
justify-center
bg-[#F6F3EC]
text-[#A6875A]
text-xl
"

>

Loading Invoice...

</div>

);


}







return(



<main

className="
min-h-screen
bg-[#F6F3EC]
p-5
lg:p-10
text-[#19160F]
"

>


<div

className="
max-w-5xl
mx-auto
bg-white
rounded-3xl
shadow-xl
border
border-[#A6875A]/30
p-8
lg:p-12
"

>





{/* HEADER */}


<div

className="
flex
justify-between
items-start
border-b
border-[#A6875A]/20
pb-8
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


<div

className="
w-14
h-14
rounded-full
bg-[#A6875A]/10
flex
items-center
justify-center
"

>


<Crown

className="
text-[#A6875A]
"

/>


</div>



<div>


<h1

className="
text-3xl
font-serif
text-[#A6875A]
tracking-wide
"

>

SHOTORUPA

</h1>


<p

className="
text-xs
tracking-[0.3em]
"

>

JEWELLERS

</p>


</div>


</div>



<p

className="
mt-5
text-gray-500
"

>

Premium Gold & Diamond Jewellery

</p>


</div>





<div

className="
text-right
"

>


<h2

className="
text-3xl
font-serif
"

>

INVOICE

</h2>



<p className="text-sm mt-3">

Invoice ID:

<span className="font-semibold">

{order.orderId || order.id}

</span>

</p>



<p className="text-sm text-gray-500">

{

order.createdAt?.toDate

?

order.createdAt.toDate().toLocaleDateString()

:

""

}

</p>



</div>



</div>
{/* CUSTOMER INFO */}


<div

className="
grid
md:grid-cols-2
gap-6
my-8
"

>





<div

className="
bg-[#F6F3EC]
rounded-2xl
p-6
"

>


<h3

className="
font-serif
text-xl
mb-4
text-[#A6875A]
"

>

Bill To

</h3>



<p>

Name:

<b>

{" "}

{order.customer?.name}

</b>

</p>



<p>

Phone:

<b>

{" "}

{order.customer?.phone}

</b>

</p>



<p>

Address:

<b>

{" "}

{order.customer?.address}

</b>

</p>



</div>









<div

className="
bg-[#F6F3EC]
rounded-2xl
p-6
"

>


<h3

className="
font-serif
text-xl
mb-4
text-[#A6875A]
"

>

Payment

</h3>



<p>

Method:

<b>

{" "}

{order.payment}

</b>

</p>



<p>

Payment Status:

<b>

{" "}

{order.paymentStatus || "Paid"}

</b>

</p>



<p>

Order Status:

<b>

{" "}

{order.orderStatus || "Pending"}

</b>

</p>



</div>





</div>









{/* PRODUCTS TABLE */}



<div

className="
overflow-x-auto
"

>



<table

className="
w-full
border-collapse
"

>



<thead>


<tr

className="
bg-gradient-to-r
from-[#D4AF37]
to-[#A6875A]
text-white
"

>



<th

className="
p-4
text-left
rounded-tl-xl
"

>

Product

</th>



<th

className="
p-4
"

>

Qty

</th>



<th

className="
p-4
"

>

Price

</th>



<th

className="
p-4
rounded-tr-xl
"

>

Total

</th>



</tr>


</thead>







<tbody>



{

order.products?.map((item:any)=>(



<tr

key={item.id}

className="
border-b
hover:bg-[#F6F3EC]
transition
"

>



<td

className="
p-4
"

>


<div

className="
flex
items-center
gap-3
"

>


<Gem

size={18}

className="
text-[#A6875A]
"

/>



<div>


<p className="font-semibold">

{item.name}

</p>



{

item.purity &&

<p className="text-sm text-gray-500">

{item.purity}

</p>

}



</div>



</div>


</td>







<td

className="
text-center
"

>

{item.quantity}

</td>






<td

className="
text-center
"

>

৳ {item.price?.toLocaleString()}

</td>






<td

className="
text-center
font-semibold
text-[#A6875A]
"

>

৳ {(item.price * item.quantity)
.toLocaleString()}

</td>





</tr>



))


}



</tbody>



</table>



</div>
{/* TOTAL SECTION */}


<div

className="
mt-8
flex
justify-end
"

>


<div

className="
bg-[#F6F3EC]
rounded-2xl
p-6
text-right
border
border-[#A6875A]/20
"

>


<p

className="
text-gray-500
"

>

Grand Total

</p>



<h2

className="
text-4xl
font-bold
text-[#A6875A]
"

>

৳ {order.total?.toLocaleString()}

</h2>



</div>



</div>









{/* FOOTER MESSAGE */}



<div

className="
mt-10
text-center
border-t
pt-6
text-gray-500
"

>


<p>

Thank you for choosing

</p>


<h3

className="
font-serif
text-xl
text-[#A6875A]
mt-2
"

>

SHOTORUPA JEWELLERS

</h3>


<p className="text-sm mt-2">

Crafting Timeless Beauty With Pure Gold

</p>


</div>









{/* PRINT BUTTON */}



<button


onClick={()=>window.print()}


className="
mt-10
bg-gradient-to-r
from-[#D4AF37]
via-[#F5D76E]
to-[#A6875A]

text-white

px-10

py-4

rounded-xl

flex

items-center

gap-3

font-semibold

shadow-lg

shadow-[#D4AF37]/30

hover:scale-105

hover:shadow-xl

transition

"


>


<Printer size={20}/>


Print Invoice


</button>








</div>


</main>


);


}