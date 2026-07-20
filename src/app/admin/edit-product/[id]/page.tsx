"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";

import { useProducts } from "@/context/ProductContext";


export default function EditProductPage(){


const router = useRouter();

const params = useParams();


const id = Number(params.id);



const {

products,

updateProduct

}=useProducts();





const product = products.find(

(item)=>item.id === id

);





const [name,setName] = useState(product?.name || "");

const [price,setPrice] = useState(

product ? String(product.price) : ""

);

const [category,setCategory] = useState(

product?.category || "Gold"

);

const [weight,setWeight] = useState(

product?.weight || ""

);

const [purity,setPurity] = useState(

product?.purity || ""

);

const [image,setImage] = useState(

product?.image || ""

);







function handleUpdate(){


if(!product){

alert("Product not found");

return;

}




updateProduct({

id:product.id,

name:name,

price:Number(price),

category:category,

weight:weight,

purity:purity,

image:image

});




alert("Product Updated Successfully");


router.push("/admin");


}







if(!product){


return (

<main className="min-h-screen flex items-center justify-center text-black">

<h1>

Product Not Found

</h1>

</main>

);


}







return (

<main className="min-h-screen bg-[#f8f4ee] py-12 text-black">


<section className="max-w-xl mx-auto px-6">



<div className="bg-white shadow rounded-xl p-8">



<h1 className="text-3xl font-bold text-[#6b4d1f] mb-8">

Edit Product

</h1>








<input

value={name}

onChange={(e)=>setName(e.target.value)}

placeholder="Product Name"

className="w-full border p-3 rounded mb-4 text-black bg-white"

/>







<input

type="number"

value={price}

onChange={(e)=>setPrice(e.target.value)}

placeholder="Price"

className="w-full border p-3 rounded mb-4 text-black bg-white"

/>







<select

value={category}

onChange={(e)=>setCategory(e.target.value)}

className="w-full border p-3 rounded mb-4 text-black bg-white"

>


<option>

Gold

</option>


<option>

Diamond

</option>


<option>

Platinum

</option>


</select>







<input

value={weight}

onChange={(e)=>setWeight(e.target.value)}

placeholder="Weight"

className="w-full border p-3 rounded mb-4 text-black bg-white"

/>







<input

value={purity}

onChange={(e)=>setPurity(e.target.value)}

placeholder="Purity"

className="w-full border p-3 rounded mb-4 text-black bg-white"

/>







<input

value={image}

onChange={(e)=>setImage(e.target.value)}

placeholder="Image URL"

className="w-full border p-3 rounded mb-4 text-black bg-white"

/>








<button

onClick={handleUpdate}

className="w-full bg-[#9b7a3d] text-white py-4 rounded-xl"

>

Update Product

</button>






</div>


</section>


</main>

);


}