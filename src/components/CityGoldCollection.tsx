"use client";


import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


import {
  collection,
  query,
  where,
  limit,
  onSnapshot
} from "firebase/firestore";


import { db } from "@/lib/firebase";



type Product = {

id:string;

name:string;

image:string;

price:number;

purity?:string;

weight?:string;

category:string;

};





export default function CityGoldCollection(){



const [products,setProducts] = useState<Product[]>([]);





useEffect(()=>{


const q = query(

collection(db,"products"),

where("category","==","City Gold"),

limit(3)

);





const unsubscribe = onSnapshot(

q,

(snapshot)=>{


const data = snapshot.docs.map(doc=>({

id:doc.id,

...doc.data()

})) as Product[];



setProducts(data);



}

);



return ()=>unsubscribe();



},[]);








return(


<section className="max-w-7xl mx-auto px-6 py-14">





<div className="flex justify-between items-center mb-8">



<div>


<h2 className="text-4xl font-serif text-[#6b4d1f]">

CITY GOLD COLLECTION

</h2>



<p className="text-gray-500 mt-2">

Beautiful gold plated jewellery with modern designs.

</p>


</div>





<Link

href="/products?category=City%20Gold"

className="border border-[#9b7a3d] px-6 py-3 rounded-full text-[#9b7a3d] hover:bg-[#9b7a3d] hover:text-white transition"

>

View All

</Link>




</div>









{

products.length === 0 ?


<p className="text-center text-gray-500">

No City Gold Products Available

</p>



:


<div className="grid grid-cols-1 md:grid-cols-3 gap-8">





{

products.map((product)=>(



<div

key={product.id}

className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"

>





<div className="overflow-hidden">



<Image

src={product.image}

alt={product.name}

width={500}

height={400}

className="w-full h-72 object-cover hover:scale-110 transition duration-500"

/>



</div>







<div className="p-6">





<span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">

CITY GOLD

</span>








<h3 className="text-2xl font-bold text-[#6b4d1f] mt-4">

{product.name}

</h3>







<p className="text-gray-500 mt-2">

{product.purity}

</p>







<p className="text-gray-500">

Weight: {product.weight}

</p>







<p className="text-3xl font-bold text-[#9b7a3d] mt-4">

৳ {product.price.toLocaleString()}

</p>








<Link

href={`/products/${product.id}`}

className="block text-center mt-6 bg-[#9b7a3d] text-white py-3 rounded-xl hover:bg-[#7a602d]"

>

View Product

</Link>







</div>





</div>



))


}



</div>


}




</section>


);



}