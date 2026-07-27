"use client";

import {
  useEffect,
  useState
} from "react";


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


import {
  ArrowLeft,
  Save,
  Upload,
  Gem
} from "lucide-react";


import Link from "next/link";






export default function EditProductPage(){



const router = useRouter();

const params = useParams();

const id = params.id as string;





const [loading,setLoading]=useState(false);



const [name,setName]=useState("");

const [price,setPrice]=useState("");

const [category,setCategory]=useState("");

const [weight,setWeight]=useState("");

const [purity,setPurity]=useState("");

const [makingCharge,setMakingCharge]=useState("");

const [stock,setStock]=useState("");

const [image,setImage]=useState("");

const [newImage,setNewImage]=useState<File|null>(null);








useEffect(()=>{


async function load(){


const snap = await getDoc(

doc(db,"products",id)

);



if(snap.exists()){


const data:any=snap.data();



setName(data.name || "");

setPrice(String(data.price || ""));

setCategory(data.category || "Gold");

setWeight(String(data.weight || ""));

setPurity(data.purity || "");

setMakingCharge(
String(data.makingCharge || "")
);

setStock(
String(data.stock || "")
);


setImage(data.image || "");



}


}



if(id){

load();

}



},[id]);









function handleImage(e:any){


const file=e.target.files?.[0];


if(file){

setNewImage(file);

}


}









async function updateProduct(){



try{


setLoading(true);



let imageUrl=image;




if(newImage){


const storageRef = ref(

storage,

`products/${Date.now()}-${newImage.name}`

);



await uploadBytes(

storageRef,

newImage

);



imageUrl = await getDownloadURL(

storageRef

);


}







await updateDoc(

doc(db,"products",id),

{


name,

category,

price:Number(price),

weight:Number(weight),

purity,

makingCharge:Number(makingCharge),

stock:Number(stock),

image:imageUrl,


updatedAt:new Date()


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

Product Management

</p>


<h1

className="
text-4xl
font-serif
text-[#19160F]
mt-2
"

>

Edit Jewellery Product

</h1>


</div>


</div>









{/* FORM */}



<div

className="
bg-white
rounded-3xl
shadow-xl
border
border-[#A6875A]/20
p-6
lg:p-10
"

>





<div

className="
flex
items-center
gap-3
mb-8
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

Product Details

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

value={name}

onChange={(e)=>setName(e.target.value)}

placeholder="Product Name"

className="input"

 />




<input

type="number"

value={price}

onChange={(e)=>setPrice(e.target.value)}

placeholder="Price"

className="input"

/>





<select

value={category}

onChange={(e)=>setCategory(e.target.value)}

className="input"

>


<option>Gold</option>

<option>Diamond</option>

<option>Platinum</option>

<option>Silver</option>

<option>Bridal</option>

<option>Ring</option>

<option>Necklace</option>

<option>Earrings</option>


</select>






<input

value={weight}

onChange={(e)=>setWeight(e.target.value)}

placeholder="Weight Gram"

className="input"

/>






<input

value={purity}

onChange={(e)=>setPurity(e.target.value)}

placeholder="Purity 22K / 24K"

className="input"

/>






<input

type="number"

value={makingCharge}

onChange={(e)=>setMakingCharge(e.target.value)}

placeholder="Making Charge"

className="input"

/>







<input

type="number"

value={stock}

onChange={(e)=>setStock(e.target.value)}

placeholder="Stock Quantity"

className="input"

/>






</div>









{/* IMAGE */}



<div

className="
mt-8
"

>


<h3 className="
font-semibold
mb-3
">

Product Image

</h3>





{

image &&

<img

src={image}

alt="product"

className="
w-44
h-44
object-cover
rounded-2xl
border
border-[#A6875A]/30
mb-5
"

/>


}







<label

className="
flex
items-center
gap-3
border
border-dashed
border-[#A6875A]
rounded-xl
p-5
cursor-pointer
text-[#A6875A]
"

>


<Upload/>


Upload New Image


<input

type="file"

accept="image/*"

onChange={handleImage}

className="hidden"

/>


</label>



</div>









<button

onClick={updateProduct}

disabled={loading}

className="
mt-8
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
"

>


<Save size={20}/>


{

loading

?

"Updating..."

:

"Update Product"

}



</button>









</div>







</div>



</main>


);


}