"use client";

import {
  useState
} from "react";

import {
  useRouter
} from "next/navigation";


import {
  db
} from "@/lib/firebase";


import {
  collection,
  addDoc,
  serverTimestamp
} from "firebase/firestore";


import {
  Save,
  ArrowLeft,
  Gem
} from "lucide-react";


import Link from "next/link";





export default function AddProduct(){


const router = useRouter();


const [loading,setLoading]=useState(false);



const [product,setProduct]=useState({

name:"",
category:"",
price:"",
weight:"",
purity:"",
stock:"",
image:"",
description:""

});





function handleChange(e:any){

setProduct({

...product,

[e.target.name]:e.target.value

});

}





async function saveProduct(){


if(
!product.name ||
!product.category ||
!product.price
){

alert("Please fill required fields");

return;

}



try{


setLoading(true);



await addDoc(

collection(db,"products"),

{


name:product.name,

category:product.category,

price:Number(product.price),

weight:Number(product.weight),

purity:product.purity,

stock:Number(product.stock),

image:product.image,

description:product.description,


createdAt:serverTimestamp()


}



);



router.push("/admin/products");



}

catch(error){

console.log(error);

alert("Product save failed");


}

finally{

setLoading(false);

}


}









return(



<main

className="
min-h-screen
bg-[#F6F3EC]
p-5
lg:p-10
"

>


<div

className="
max-w-5xl
mx-auto
"

>





{/* HEADER */}



<div

className="
flex
items-center
gap-5
mb-10
"

>



<Link

href="/admin/products"

className="
w-12
h-12
rounded-xl
bg-white
border
border-[#A6875A]/30
flex
items-center
justify-center
text-[#A6875A]
"

>

<ArrowLeft/>

</Link>







<div>


<p

className="
text-xs
tracking-[0.3em]
uppercase
text-[#A6875A]
"

>

Admin Panel

</p>


<h1

className="
text-4xl
font-serif
text-[#19160F]
mt-2
"

>

Add Jewellery Product

</h1>



</div>



</div>









{/* FORM */}




<div

className="
bg-white
rounded-3xl
border
border-[#A6875A]/20
shadow-xl
p-6
lg:p-10
space-y-6
"

>





<div

className="
flex
items-center
gap-3
mb-5
"

>


<div

className="
w-12
h-12
rounded-full
bg-[#A6875A]/10
flex
items-center
justify-center
"

>

<Gem

className="
text-[#A6875A]
"

/>


</div>



<h2

className="
text-2xl
font-serif
"

>

Product Information

</h2>


</div>










<div

className="
grid
md:grid-cols-2
gap-5
"

>





<input

name="name"

value={product.name}

onChange={handleChange}

placeholder="Product Name"

className="
w-full
px-5
py-4
rounded-xl
border
border-gray-200
outline-none
focus:border-[#A6875A]
"

/>







<select

name="category"

value={product.category}

onChange={handleChange}

className="
w-full
px-5
py-4
rounded-xl
border
border-gray-200
outline-none
"

>


<option value="">
Select Category
</option>


<option>
Gold
</option>


<option>
Diamond
</option>


<option>
Wedding
</option>


<option>
City Gold
</option>


</select>








<input

name="price"

type="number"

value={product.price}

onChange={handleChange}

placeholder="Price"

className="
w-full
px-5
py-4
rounded-xl
border
border-gray-200
"

/>








<input

name="weight"

type="number"

value={product.weight}

onChange={handleChange}

placeholder="Weight (Gram)"

className="
w-full
px-5
py-4
rounded-xl
border
border-gray-200
"

/>








<input

name="purity"

value={product.purity}

onChange={handleChange}

placeholder="Purity (22K / 24K)"

className="
w-full
px-5
py-4
rounded-xl
border
border-gray-200
"

/>







<input

name="stock"

type="number"

value={product.stock}

onChange={handleChange}

placeholder="Stock Quantity"

className="
w-full
px-5
py-4
rounded-xl
border
border-gray-200
"

/>





</div>










<input

name="image"

value={product.image}

onChange={handleChange}

placeholder="Product Image URL"

className="
w-full
px-5
py-4
rounded-xl
border
border-gray-200
"

/>








<textarea

name="description"

value={product.description}

onChange={handleChange}

placeholder="Product Description"

rows={5}

className="
w-full
px-5
py-4
rounded-xl
border
border-gray-200
"

/>










<button

onClick={saveProduct}

disabled={loading}

className="
w-full
py-4
rounded-xl
bg-gradient-to-r
from-[#D4AF37]
to-[#A6875A]
text-white
font-semibold
flex
justify-center
items-center
gap-3
hover:scale-[1.02]
transition
disabled:opacity-50
"

>


<Save size={20}/>



{

loading

?

"Saving Product..."

:

"Save Jewellery Product"

}



</button>









</div>





</div>


</main>


);


}