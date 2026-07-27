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
Upload
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



try{


setLoading(true);



await addDoc(

collection(db,"products"),

{


...product,


price:Number(product.price),

weight:Number(product.weight),

stock:Number(product.stock),


createdAt:serverTimestamp()


}


);





router.push("/admin/products");



}

catch(error){


console.log(error);


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

via-[#100c06]

to-black


text-white


p-5

lg:p-8


"


>



<div

className="

max-w-4xl

mx-auto

"

>







{/* HEADER */}



<div

className="

flex

items-center

gap-4

mb-10

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



<p

className="

text-gray-400

mt-2

"

>

Create premium product

</p>


</div>


</div>









{/* FORM */}



<div


className="

bg-white/5


backdrop-blur-xl


border

border-yellow-600/30


rounded-3xl


p-6

lg:p-10


space-y-6


"

>







<div

className="

grid

md:grid-cols-2

gap-5

"

>



<input


name="name"


onChange={handleChange}


placeholder="Product Name"


className="inputStyle"


/>






<select


name="category"


onChange={handleChange}


className="inputStyle"


>


<option className="text-black">

Select Category

</option>


<option className="text-black">

Gold

</option>


<option className="text-black">

Diamond

</option>


<option className="text-black">

Wedding

</option>


<option className="text-black">

City Gold

</option>


</select>






<input


name="price"


type="number"


onChange={handleChange}


placeholder="Price"


className="inputStyle"


/>






<input


name="weight"


type="number"


onChange={handleChange}


placeholder="Weight (gm)"


className="inputStyle"


/>







<input


name="purity"


onChange={handleChange}


placeholder="Purity (22K/24K)"


className="inputStyle"


/>






<input


name="stock"


type="number"


onChange={handleChange}


placeholder="Stock Quantity"


className="inputStyle"


/>



</div>









<input


name="image"


onChange={handleChange}


placeholder="Image URL"


className="inputStyle"


/>







<textarea


name="description"


onChange={handleChange}


placeholder="Product Description"


rows={5}


className="inputStyle"


/>









{/* SAVE */}



<button


onClick={saveProduct}


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


<Save size={20}/>


{

loading

?

"Saving..."

:

"Save Product"

}


</button>







</div>








</div>


</main>


)


}