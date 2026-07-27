"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { useProducts } from "@/context/ProductContext";

import { db } from "@/lib/firebase";

import {
  collection,
  onSnapshot
} from "firebase/firestore";


import {
  Package,
  ShoppingCart,
  Users,
  Gem,
  Plus,
  TrendingUp
} from "lucide-react";





export default function AdminPage(){



const {
products=[],
deleteProduct

}=useProducts();




const [orders,setOrders]=useState<any[]>([]);

const [customers,setCustomers]=useState<any[]>([]);

const [goldStock,setGoldStock]=useState(0);







// Orders

useEffect(()=>{


const unsubscribe = onSnapshot(

collection(db,"orders"),

(snapshot)=>{


const data=snapshot.docs.map(doc=>(

{
id:doc.id,
...doc.data()

}

));


setOrders(data);



}


);



return()=>unsubscribe();



},[]);








// Customers + Gold Stock


useEffect(()=>{



const customerUnsub = onSnapshot(

collection(db,"customers"),

(snapshot)=>{


const data=snapshot.docs.map(doc=>(

{
id:doc.id,
...doc.data()

}

));


setCustomers(data);



}

);







const stockUnsub = onSnapshot(

collection(db,"goldStock"),

(snapshot)=>{


let total=0;



snapshot.docs.forEach((item)=>{


const data=item.data();


total += Number(data.weight || 0);



});



setGoldStock(total);



}


);





return()=>{

customerUnsub();

stockUnsub();

}



},[]);









const totalSales = orders.reduce(

(sum,order)=>

sum + Number(order.total || 0),

0

);







const dashboardCards=[


{
title:"Total Products",
value:products.length,
icon:Package
},


{
title:"Total Orders",
value:orders.length,
icon:ShoppingCart
},


{
title:"Customers",
value:customers.length,
icon:Users
},


{
title:"Gold Stock",
value:`${goldStock} gm`,
icon:Gem
},


{
title:"Total Sales",
value:`৳ ${totalSales.toLocaleString()}`,
icon:TrendingUp
}



];









return(



<main className="
min-h-screen
bg-[#f8f4ee]
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
mb-10
">

SHOTORUPA DASHBOARD

</h1>









{/* Dashboard Cards */}



<div className="
grid
md:grid-cols-2
xl:grid-cols-5
gap-5
mb-10
">



{

dashboardCards.map((card,index)=>{


const Icon=card.icon;


return(


<div

key={index}

className="
bg-white
rounded-2xl
shadow
border
border-[#ead9b0]
p-6
flex
justify-between
items-center
"


>


<div>


<p className="
text-gray-500
text-sm
">

{card.title}

</p>



<h2 className="
text-3xl
font-bold
text-[#9b7a3d]
mt-3
">

{card.value}

</h2>



</div>





<div className="
bg-[#f3e5c5]
text-[#9b7a3d]
p-4
rounded-full
">

<Icon size={28}/>

</div>




</div>



)


})


}



</div>









{/* Quick Menu */}



<div className="
bg-white
rounded-xl
shadow
p-6
mb-10
">


<h2 className="
text-2xl
font-bold
mb-6
">

⚙ Admin Panel

</h2>




<div className="
grid
md:grid-cols-4
gap-4
">



<Link

href="/admin/add-product"

className="
bg-[#9b7a3d]
text-white
p-4
rounded-lg
text-center
"

>

<Plus className="inline mr-2"/>

Add Product

</Link>






<Link

href="/admin/products"

className="
bg-black
text-white
p-4
rounded-lg
text-center
"

>

Products

</Link>







<Link

href="/admin/orders"

className="
bg-[#9b7a3d]
text-white
p-4
rounded-lg
text-center
"

>

Orders

</Link>








<Link

href="/admin/customers"

className="
bg-black
text-white
p-4
rounded-lg
text-center
"

>

Customers

</Link>



</div>


</div>









{/* Orders */}




<div className="
bg-white
shadow
rounded-xl
p-6
mb-10
">


<h2 className="
text-2xl
font-bold
mb-6
">

📦 Customer Orders

</h2>





{

orders.length===0 ?


<p>
No Orders Found
</p>



:


orders.slice(0,5).map((order)=>(


<div

key={order.id}

className="
border-b
py-4
"

>


<h3 className="font-bold">

{order.orderId || order.id}

</h3>




<p>

Customer: {order.customer?.name}

</p>




<p>

Phone: {order.customer?.phone}

</p>




<p>

Total: ৳ {order.total?.toLocaleString()}

</p>




<p className="
text-[#9b7a3d]
">

Status: {order.orderStatus || "Pending"}

</p>




</div>


))



}




<Link

href="/admin/orders"

className="
inline-block
mt-5
bg-[#9b7a3d]
text-white
px-6
py-3
rounded-lg
"

>

View All Orders

</Link>



</div>













{/* Product List */}




<div className="
bg-white
shadow
rounded-xl
p-6
">



<div className="
flex
justify-between
items-center
mb-6
">



<h2 className="
text-2xl
font-bold
">

💎 Product List

</h2>





<Link

href="/admin/add-product"

className="
bg-[#9b7a3d]
text-white
px-5
py-3
rounded-lg
"

>

+ Add Product

</Link>



</div>









{

products.length===0 ?



<p>

No Product Found

</p>




:


products.map((product)=>(




<div

key={product.id}

className="
flex
flex-col
md:flex-row
justify-between
items-start
md:items-center
gap-5
border-b
py-5
"

>




<div className="
flex
items-center
gap-5
">





{

product.image &&


<img

src={product.image}

alt={product.name}

className="
w-24
h-24
rounded-xl
object-cover
border
"

/>



}







<div>


<h3 className="
font-bold
text-lg
">

{product.name}

</h3>





<p className="
text-[#9b7a3d]
font-semibold
">

৳ {product.price?.toLocaleString()}

</p>





<p className="
text-gray-500
text-sm
">

{product.category}

{" | "}

{product.weight}

{" | "}

{product.purity}

</p>



</div>




</div>









<div className="
flex
gap-3
">





<Link

href={`/admin/edit-product/${product.id}`}

className="
border
border-[#9b7a3d]
text-[#9b7a3d]
px-4
py-2
rounded-lg
"

>

Edit

</Link>







<button

onClick={()=>deleteProduct(product.id)}

className="
border
border-red-500
text-red-600
px-4
py-2
rounded-lg
"

>

Delete

</button>





</div>







</div>




))



}



</div>








</section>


</main>



);


}