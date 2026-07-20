"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useProducts } from "@/context/ProductContext";


export default function AddProduct(){


const router = useRouter();

const { addProduct } = useProducts();



const [name,setName]=useState("");

const [price,setPrice]=useState("");

const [category,setCategory]=useState("Gold");

const [weight,setWeight]=useState("");

const [purity,setPurity]=useState("");

const [image,setImage]=useState("");





function handleImage(e:any){

const file = e.target.files[0];


if(file){


const reader = new FileReader();


reader.onload = ()=>{


setImage(reader.result as string);


};


reader.readAsDataURL(file);



}


}







function saveProduct(){



if(!name || !price){

alert("Fill required fields");

return;

}




addProduct({

id:Date.now(),

name,

price:Number(price),

category,

weight,

purity,

image

});





alert("Product Added Successfully");


router.push("/admin");


}







return(

<main className="min-h-screen bg-[#f8f4ee] py-12 text-black">


<section className="max-w-xl mx-auto px-6">



<div className="bg-white shadow rounded-xl p-8">


<h1 className="text-3xl font-bold text-[#6b4d1f] mb-8">

Add New Jewellery

</h1>







<input

placeholder="Product Name"

value={name}

onChange={(e)=>setName(e.target.value)}

className="w-full border p-3 rounded mb-4 text-black"

/>







<input

type="number"

placeholder="Price"

value={price}

onChange={(e)=>setPrice(e.target.value)}

className="w-full border p-3 rounded mb-4 text-black"

/>







<select

value={category}

onChange={(e)=>setCategory(e.target.value)}

className="w-full border p-3 rounded mb-4 text-black"

>

<option>Gold</option>

<option>Diamond</option>

<option>Platinum</option>

</select>








<input

placeholder="Weight"

value={weight}

onChange={(e)=>setWeight(e.target.value)}

className="w-full border p-3 rounded mb-4 text-black"

/>








<input

placeholder="Purity"

value={purity}

onChange={(e)=>setPurity(e.target.value)}

className="w-full border p-3 rounded mb-4 text-black"

/>







<label className="block mb-2 font-semibold">

Product Image

</label>



<input

type="file"

accept="image/*"

onChange={handleImage}

className="w-full border p-3 rounded mb-4"

/>







{

image &&

<img

src={image}

alt="preview"

className="w-40 h-40 object-cover rounded mb-4"

/>

}







<button

onClick={saveProduct}

className="w-full bg-[#9b7a3d] text-white py-4 rounded-xl"

>

Save Product

</button>




</div>


</section>


</main>

);


}