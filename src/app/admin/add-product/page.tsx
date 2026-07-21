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

const [loading,setLoading]=useState(false);







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



if(!name || !price || !image){


alert("Please fill all required fields");


return;


}



try{


setLoading(true);




addProduct({


id:Date.now(),


name:name,


price:Number(price),


category:category,


weight:weight,


purity:purity,


image:image


});





alert("Product Added Successfully");


router.push("/admin");



}

finally{


setLoading(false);


}


}










return(


<main className="
min-h-screen
bg-[#f8f4ee]
py-12
text-black
">



<section className="
max-w-xl
mx-auto
px-6
">



<div className="
bg-white
shadow-xl
rounded-2xl
p-8
">





<h1 className="
text-3xl
font-bold
text-[#6b4d1f]
mb-8
">

Add New Jewellery

</h1>







<input

placeholder="Product Name"

value={name}

onChange={(e)=>setName(e.target.value)}

className="
w-full
border
p-3
rounded-lg
mb-4
"

/>







<input

type="number"

placeholder="Price ৳"

value={price}

onChange={(e)=>setPrice(e.target.value)}

className="
w-full
border
p-3
rounded-lg
mb-4
"

/>







<select

value={category}

onChange={(e)=>setCategory(e.target.value)}

className="
w-full
border
p-3
rounded-lg
mb-4
"

>


<option>Gold</option>

<option>Diamond</option>

<option>Platinum</option>

<option>Silver</option>


</select>








<input

placeholder="Weight (Gram)"

value={weight}

onChange={(e)=>setWeight(e.target.value)}

className="
w-full
border
p-3
rounded-lg
mb-4
"

/>







<input

placeholder="Purity (22K/24K)"

value={purity}

onChange={(e)=>setPurity(e.target.value)}

className="
w-full
border
p-3
rounded-lg
mb-4
"

/>









<label className="
font-semibold
block
mb-2
">

Product Image

</label>






<input

type="file"

accept="image/*"

onChange={handleImage}

className="
w-full
border
p-3
rounded-lg
mb-4
"

/>








{

image &&

<img

src={image}

alt="preview"

className="
w-48
h-48
object-cover
rounded-xl
mb-5
"

/>

}








<button

onClick={saveProduct}

disabled={loading}

className="
w-full
bg-[#9b7a3d]
text-white
py-4
rounded-xl
font-bold
"

>


{

loading

?

"Saving..."

:

"Save Product"

}


</button>






</div>



</section>



</main>


);


}