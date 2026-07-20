"use client";


import { useEffect, useState } from "react";

import { 
  useParams,
  useRouter
} from "next/navigation";


import {
  doc,
  getDoc,
  updateDoc
} from "firebase/firestore";


import {
  ref,
  uploadBytes,
  getDownloadURL
} from "firebase/storage";


import {
  db,
  storage
} from "@/lib/firebase";





export default function EditProductPage(){



const router = useRouter();

const params = useParams();


const id = params.id as string;





const [name,setName]=useState("");

const [price,setPrice]=useState("");

const [category,setCategory]=useState("Gold");

const [weight,setWeight]=useState("");

const [purity,setPurity]=useState("");

const [image,setImage]=useState("");

const [newImage,setNewImage]=useState<File | null>(null);


const [loading,setLoading]=useState(false);





// Load Product


useEffect(()=>{


async function loadProduct(){


const snap = await getDoc(

doc(db,"products",id)

);



if(snap.exists()){


const data=snap.data();


setName(data.name);

setPrice(String(data.price));

setCategory(data.category);

setWeight(data.weight);

setPurity(data.purity);

setImage(data.image);



}


}



if(id){

loadProduct();

}



},[id]);








function handleImage(e:any){


const file=e.target.files[0];


if(file){

setNewImage(file);


}


}









async function handleUpdate(){



try{


setLoading(true);



let imageUrl=image;





// Upload new image


if(newImage){



const imageRef = ref(

storage,

`products/${Date.now()}-${newImage.name}`

);



await uploadBytes(

imageRef,

newImage

);



imageUrl = await getDownloadURL(

imageRef

);



}







await updateDoc(

doc(db,"products",id),

{


name,

price:Number(price),

category,

weight,

purity,

image:imageUrl


}


);






alert("Product Updated Successfully ✅");



router.push("/admin/products");



}

catch(error){


console.log(error);


alert("Update Failed");


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



<section className="max-w-xl mx-auto px-6">



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

Edit Product

</h1>








<input

value={name}

onChange={(e)=>setName(e.target.value)}

placeholder="Product Name"

className="
w-full
border
p-3
rounded
mb-4
"

/>







<input

type="number"

value={price}

onChange={(e)=>setPrice(e.target.value)}

placeholder="Price"

className="
w-full
border
p-3
rounded
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
rounded
mb-4
"

>


<option>Gold</option>

<option>Diamond</option>

<option>Platinum</option>

<option>Bridal</option>

<option>Ring</option>

<option>Necklace</option>

<option>Earrings</option>


</select>








<input

value={weight}

onChange={(e)=>setWeight(e.target.value)}

placeholder="Weight"

className="
w-full
border
p-3
rounded
mb-4
"

/>







<input

value={purity}

onChange={(e)=>setPurity(e.target.value)}

placeholder="Purity"

className="
w-full
border
p-3
rounded
mb-4
"

/>








<img

src={image}

alt="product"

className="
w-40
h-40
object-cover
rounded-xl
mb-4
"

/>








<input

type="file"

accept="image/*"

onChange={handleImage}

className="
w-full
border
p-3
rounded
mb-5
"

/>








<button

onClick={handleUpdate}

disabled={loading}

className="
w-full
bg-[#9b7a3d]
text-white
py-4
rounded-xl
"

>


{

loading

?

"Updating..."

:

"Update Product"

}


</button>







</div>


</section>


</main>


);


}