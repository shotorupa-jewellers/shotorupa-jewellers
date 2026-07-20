"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { useProducts } from "@/context/ProductContext";
import { db } from "@/lib/firebase";

import {
  collection,
  onSnapshot
} from "firebase/firestore";


export default function AdminPage(){


const {

products=[],
deletedProducts=[],
deleteProduct,
restoreProduct

}=useProducts();



const [orders,setOrders] = useState<any[]>([]);





useEffect(()=>{


const unsubscribe = onSnapshot(

collection(db,"orders"),

(snapshot)=>{


const data = snapshot.docs.map(doc=>(

{
id:doc.id,
...doc.data()

}

));


setOrders(data);


}


);


return ()=>unsubscribe();


},[]);





return(

<main className="min-h-screen bg-[#f8f4ee] py-12 text-black">


<section className="max-w-7xl mx-auto px-6">





<h1 className="text-4xl font-serif text-[#6b4d1f] mb-10">

SHOTORUPA ADMIN DASHBOARD

</h1>





{/* Dashboard Cards */}

<div className="grid md:grid-cols-4 gap-6 mb-10">



<div className="bg-white shadow rounded-xl p-6">

<h2 className="text-xl font-bold">
Products
</h2>

<p className="text-4xl text-[#9b7a3d] mt-3">
{products.length}
</p>

</div>




<div className="bg-white shadow rounded-xl p-6">

<h2 className="text-xl font-bold">
Orders
</h2>

<p className="text-4xl text-[#9b7a3d] mt-3">
{orders.length}
</p>

</div>




<div className="bg-white shadow rounded-xl p-6">

<h2 className="text-xl font-bold">
Deleted
</h2>

<p className="text-4xl text-red-600 mt-3">
{deletedProducts.length}
</p>

</div>




<div className="bg-white shadow rounded-xl p-6">

<h2 className="text-xl font-bold">
Customers
</h2>

<p className="text-4xl text-[#9b7a3d] mt-3">
0
</p>

</div>



</div>






{/* Admin Menu */}


<div className="bg-white shadow rounded-xl p-6 mb-10">


<h2 className="text-2xl font-bold mb-6">
⚙ Admin Panel
</h2>


<div className="grid md:grid-cols-3 gap-4">



<Link
href="/admin"
className="bg-[#9b7a3d] text-white p-4 rounded-lg text-center"
>
Dashboard
</Link>



<Link
href="/admin/add-product"
className="bg-black text-white p-4 rounded-lg text-center"
>
Add Product
</Link>




<Link
href="/admin/orders"
className="bg-[#9b7a3d] text-white p-4 rounded-lg text-center"
>
Orders
</Link>




<Link
href="/admin/customers"
className="bg-black text-white p-4 rounded-lg text-center"
>
Customers
</Link>




<Link
href="/admin/settings"
className="bg-[#9b7a3d] text-white p-4 rounded-lg text-center"
>
Settings
</Link>



</div>


</div>









{/* Orders */}


<div className="bg-white shadow rounded-xl p-6 mb-10">


<h2 className="text-2xl font-bold mb-6">
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
className="border-b py-4"
>


<h3 className="font-bold">
{order.orderId}
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


<p className="text-[#9b7a3d]">
Status: {order.status}
</p>


</div>


))


}



<Link

href="/admin/orders"

className="inline-block mt-5 bg-[#9b7a3d] text-white px-6 py-3 rounded-lg"

>

View All Orders

</Link>


</div>









{/* Products */}



<div className="bg-white shadow rounded-xl p-6 mb-10">



<div className="flex justify-between items-center mb-6">


<h2 className="text-2xl font-bold">
Product List
</h2>



<Link

href="/admin/add-product"

className="bg-[#9b7a3d] text-white px-5 py-3 rounded-lg"

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

className="flex justify-between items-center border-b py-5"

>



<div className="flex gap-5 items-center">


{

product.image &&

<img

src={product.image}

alt={product.name}

className="w-24 h-24 rounded-xl object-cover"

/>

}



<div>

<h3 className="font-bold text-lg">
{product.name}
</h3>


<p>
৳ {product.price.toLocaleString()}
</p>


<p className="text-gray-600">

{product.category}

{" | "}

{product.weight}

{" | "}

{product.purity}

</p>


</div>


</div>





<div className="flex gap-3">



<Link

href={`/admin/edit-product/${product.id}`}

className="border px-4 py-2 rounded"

>

Edit

</Link>




<button

onClick={()=>deleteProduct(product.id)}

className="border border-red-500 text-red-600 px-4 py-2 rounded"

>

Delete

</button>



</div>



</div>


))


}



</div>









{/* Deleted Products */}



<div className="bg-white shadow rounded-xl p-6">


<h2 className="text-2xl font-bold mb-6">

🗑 Deleted Product History

</h2>




{

deletedProducts.length===0 ?


<p>
No Deleted Product
</p>


:


deletedProducts.map((product)=>(


<div

key={product.id}

className="flex justify-between items-center border-b py-4"

>


<div>

<h3 className="font-bold text-red-600">

{product.name}

</h3>


<p>
৳ {product.price.toLocaleString()}
</p>


</div>




<button

onClick={()=>restoreProduct(product.id)}

className="bg-green-600 text-white px-5 py-2 rounded"

>

Restore

</button>



</div>


))


}



</div>





</section>


</main>


);


}