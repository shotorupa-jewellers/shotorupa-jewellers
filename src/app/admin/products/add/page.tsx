"use client";


import {
useState
} from "react";


import {
useRouter
} from "next/navigation";


import {
collection,
addDoc,
serverTimestamp
} from "firebase/firestore";


import {
db
} from "@/lib/firebase";


import {
Save,
ArrowLeft,
Image as ImageIcon,
Loader2
} from "lucide-react";


import Link from "next/link";





export default function AddProduct(){



const router = useRouter();



const [name,setName]=useState("");

const [price,setPrice]=useState("");

const [category,setCategory]=useState("Gold");

const [purity,setPurity]=useState("");

const [weight,setWeight]=useState("");

const [stock,setStock]=useState("");

const [makingCharge,setMakingCharge]=useState("");

const [image,setImage]=useState("");

const [description,setDescription]=useState("");

const [loading,setLoading]=useState(false);










async function addProduct(){



if(
!name ||
!price ||
!image
){


alert("Please fill required fields");

return;


}




try{


setLoading(true);



await addDoc(

collection(db,"products"),

{


name,

price:Number(price),

category,

purity,

weight,

stock:Number(stock),

makingCharge:Number(makingCharge),

image,

description,


createdAt:serverTimestamp(),


status:"active"


}


);




alert("Product Added Successfully ✅");



router.push("/admin/products");



}

catch(error){


console.log(error);

alert("Product Adding Failed");


}

finally{


setLoading(false);


}



}









return(



<main

className="
min-h-screen
bg-gradient-to-br
from-black
via-[#120d06]
to-black

p-6
text-white
"

>



<section

className="
max-w-4xl
mx-auto
"

>







<div

className="
flex
items-center
gap-4
mb-8
"

>


<Link

href="/admin/products"

className="
p-3
rounded-xl
bg-yellow-500/10
text-yellow-400
"

>


<ArrowLeft/>


</Link>



<div>


<h1

className="
text-4xl
font-serif
text-yellow-400
"

>

Add New Jewellery

</h1>



<p className="text-gray-400">

Create premium jewellery product

</p>


</div>


</div>









<div

className="
bg-white/10
backdrop-blur-xl

border
border-yellow-600/30

rounded-3xl

p-8

space-y-5

"

>









<input

placeholder="Product Name"

value={name}

onChange={(e)=>setName(e.target.value)}

className="
inputStyle
"

 />









<div className="grid md:grid-cols-2 gap-5">


<input

type="number"

placeholder="Price"

value={price}

onChange={(e)=>setPrice(e.target.value)}

className="inputStyle"

/>





<select

value={category}

onChange={(e)=>setCategory(e.target.value)}

className="inputStyle text-black"

>


<option>Gold</option>

<option>Diamond</option>

<option>City Gold</option>

<option>Wedding</option>

<option>Platinum</option>


</select>


</div>








<div className="grid md:grid-cols-3 gap-5">


<input

placeholder="Purity"

value={purity}

onChange={(e)=>setPurity(e.target.value)}

className="inputStyle"

/>




<input

placeholder="Weight"

value={weight}

onChange={(e)=>setWeight(e.target.value)}

className="inputStyle"

/>





<input

type="number"

placeholder="Stock"

value={stock}

onChange={(e)=>setStock(e.target.value)}

className="inputStyle"

/>



</div>









<input

type="number"

placeholder="Making Charge"

value={makingCharge}

onChange={(e)=>setMakingCharge(e.target.value)}

className="inputStyle"

/>









<input

placeholder="Image URL"

value={image}

onChange={(e)=>setImage(e.target.value)}

className="inputStyle"

/>







{

image &&


<div className="mt-4">


<img

src={image}

alt="preview"

className="
w-40
h-40
object-cover
rounded-xl
border
border-yellow-500
"

/>


</div>


}










<textarea

placeholder="Product Description"

value={description}

onChange={(e)=>setDescription(e.target.value)}

rows={5}

className="
inputStyle
"

/>









<button

onClick={addProduct}

disabled={loading}

className="

w-full

py-4

rounded-xl


bg-gradient-to-r

from-yellow-400

to-yellow-600


text-black

font-bold


flex

justify-center

items-center

gap-3


hover:scale-[1.02]

transition

"

>


{

loading

?

<>

<Loader2 className="animate-spin"/>

Saving...

</>


:

<>

<Save/>

Add Product

</>


}


</button>










</div>








</section>





</main>


);


}