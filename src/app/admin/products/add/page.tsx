"use client";


import { useState } from "react";

import {
  collection,
  addDoc,
  serverTimestamp
} from "firebase/firestore";


import { db } from "@/lib/firebase";



export default function AddProduct(){



const [name,setName]=useState("");

const [price,setPrice]=useState("");

const [category,setCategory]=useState("Gold");

const [purity,setPurity]=useState("");

const [weight,setWeight]=useState("");

const [image,setImage]=useState("");

const [loading,setLoading]=useState(false);






async function addProduct(){


if(
!name ||
!price ||
!category ||
!image
){

alert("Please fill all required fields");

return;

}



try{


setLoading(true);





await addDoc(

collection(db,"products"),

{


name:name,

price:Number(price),

category:category,

purity:purity,

weight:weight,

image:image,

createdAt:serverTimestamp()


}

);





alert("Product Added Successfully");





setName("");

setPrice("");

setCategory("Gold");

setPurity("");

setWeight("");

setImage("");



}

catch(error){


console.log(error);


alert("Error Adding Product");


}

finally{


setLoading(false);


}



}









return(



<div className="min-h-screen bg-[#f8f4ee] p-8">






<div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-8">






<h1 className="text-3xl font-serif text-[#6b4d1f] mb-6">

Add New Jewellery

</h1>









<input


placeholder="Product Name"


value={name}


onChange={(e)=>setName(e.target.value)}


className="w-full border p-3 rounded mb-4"


/>









<input


placeholder="Price"


type="number"


value={price}


onChange={(e)=>setPrice(e.target.value)}


className="w-full border p-3 rounded mb-4"


/>









<select


value={category}


onChange={(e)=>setCategory(e.target.value)}


className="w-full border p-3 rounded mb-4"


>



<option value="Gold">

Gold

</option>





<option value="Diamond">

Diamond

</option>





<option value="City Gold">

City Gold

</option>





</select>









<input


placeholder="Purity (22K Gold / VVS Diamond)"


value={purity}


onChange={(e)=>setPurity(e.target.value)}


className="w-full border p-3 rounded mb-4"


/>









<input


placeholder="Weight (example: 10g)"


value={weight}


onChange={(e)=>setWeight(e.target.value)}


className="w-full border p-3 rounded mb-4"


/>









<input


placeholder="Image URL"


value={image}


onChange={(e)=>setImage(e.target.value)}


className="w-full border p-3 rounded mb-6"


/>









<button


onClick={addProduct}


disabled={loading}


className="w-full bg-[#9b7a3d] text-white py-3 rounded-xl"


>



{

loading ?

"Adding Product..."

:

"Add Product"

}



</button>








</div>






</div>



);



}