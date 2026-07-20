"use client";


import { useEffect, useState } from "react";

import Link from "next/link";


import {
collection,
onSnapshot,
deleteDoc,
doc
} from "firebase/firestore";


import {
db
} from "@/lib/firebase";





export default function ProductsPage(){


const [products,setProducts]=useState<any[]>([]);




useEffect(()=>{


const unsubscribe = onSnapshot(

collection(db,"products"),

(snapshot)=>{


const data=snapshot.docs.map((item)=>(


{

id:item.id,

...item.data()


}


));


setProducts(data);



}


);



return ()=>unsubscribe();



},[]);








async function deleteProduct(id:string){


const confirmDelete = confirm(

"Delete this product?"

);



if(!confirmDelete) return;



await deleteDoc(

doc(db,"products",id)

);



}









return(


<main className="min-h-screen bg-[#f8f4ee] p-8 text-black">


<div className="max-w-7xl mx-auto">





<div className="flex justify-between items-center mb-8">


<h1 className="text-4xl font-serif text-[#6b4d1f]">

Product List

</h1>




<Link

href="/admin/add-product"

className="
bg-[#9b7a3d]
text-white
px-6
py-3
rounded-xl
"

>

+ Add Product

</Link>



</div>









<div className="bg-white rounded-2xl shadow p-6">





{

products.length===0

?

<p>

No Product Found

</p>


:


<div className="grid md:grid-cols-3 gap-6">



{

products.map((product)=>(



<div

key={product.id}

className="
border
rounded-xl
overflow-hidden
bg-white
"

>



<img

src={product.image}

alt={product.name}

className="
w-full
h-56
object-cover
"

/>






<div className="p-5">



<h2 className="text-xl font-bold">

{product.name}

</h2>





<p className="text-[#9b7a3d] text-lg font-semibold">

৳ {product.price?.toLocaleString()}

</p>





<p className="text-gray-600">

{product.category}

</p>




<p>

Weight: {product.weight} gm

</p>




<p>

Purity: {product.purity}

</p>









<div className="flex gap-3 mt-5">



<Link

href={`/admin/edit-product/${product.id}`}

className="
flex-1
text-center
border
py-2
rounded-lg
"

>

Edit

</Link>








<button

onClick={()=>deleteProduct(product.id)}

className="
flex-1
bg-red-600
text-white
py-2
rounded-lg
"

>

Delete

</button>





</div>






</div>






</div>



))


}



</div>


}





</div>






</div>


</main>


);


}