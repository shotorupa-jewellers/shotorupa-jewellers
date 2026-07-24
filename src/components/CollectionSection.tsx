"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import {
  collection,
  query,
  where,
  limit,
  getDocs
} from "firebase/firestore";

import { db } from "@/lib/firebase";



type Product = {

id:string;

name:string;

price:number;

image:string;

category:string;

};




export default function CollectionSection(){


const [gold,setGold] = useState<Product[]>([]);

const [diamond,setDiamond] = useState<Product[]>([]);





useEffect(()=>{


async function loadProducts(){



const productsRef = collection(db,"products");



const goldQuery = query(

productsRef,

where("category","==","Gold"),

limit(4)

);



const diamondQuery = query(

productsRef,

where("category","==","Diamond"),

limit(4)

);





const goldSnap = await getDocs(goldQuery);

const diamondSnap = await getDocs(diamondQuery);






setGold(

goldSnap.docs.map(doc=>({

id:doc.id,

...doc.data()

})) as Product[]

);





setDiamond(

diamondSnap.docs.map(doc=>({

id:doc.id,

...doc.data()

})) as Product[]

);




}



loadProducts();



},[]);






function ProductCard({product}:{product:Product}){


return(

<div className="bg-white rounded-xl shadow-lg overflow-hidden">


<Image

src={product.image}

alt={product.name}

width={400}

height={350}

className="w-full h-64 object-cover"

/>


<div className="p-4">


<h3 className="font-bold text-lg text-[#6b4d1f]">

{product.name}

</h3>


<p className="text-[#9b7a3d] font-bold mt-2">

৳ {product.price.toLocaleString()}

</p>


<Link

href={`/products/${product.id}`}

className="block mt-3 text-center border border-[#9b7a3d] py-2 rounded"

>

View Product

</Link>



</div>


</div>


);


}







return(

<section className="bg-[#f8f4ee] py-12">





{/* GOLD COLLECTION */}

<div className="max-w-7xl mx-auto px-6 mb-16">



<div className="flex justify-between items-center mb-6">


<h2 className="text-3xl font-serif text-[#6b4d1f]">

Gold Collection

</h2>



<Link

href="/products?category=Gold"

className="text-[#9b7a3d] font-semibold"

>

View All →

</Link>


</div>





<div className="grid grid-cols-2 md:grid-cols-4 gap-6">


{

gold.map(product=>(

<ProductCard

key={product.id}

product={product}

/>


))

}



</div>


</div>








{/* DIAMOND COLLECTION */}


<div className="max-w-7xl mx-auto px-6">



<div className="flex justify-between items-center mb-6">


<h2 className="text-3xl font-serif text-[#6b4d1f]">

Diamond Collection

</h2>



<Link

href="/products?category=Diamond"

className="text-[#9b7a3d] font-semibold"

>

View All →

</Link>


</div>





<div className="grid grid-cols-2 md:grid-cols-4 gap-6">


{

diamond.map(product=>(

<ProductCard

key={product.id}

product={product}

/>


))

}



</div>


</div>





</section>


);


}