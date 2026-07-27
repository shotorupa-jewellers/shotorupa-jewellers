"use client";


import { useEffect, useState } from "react";


import {
db
} from "@/lib/firebase";


import {
collection,
addDoc,
onSnapshot,
serverTimestamp
} from "firebase/firestore";


import {
Gem,
Plus,
Minus,
Scale
} from "lucide-react";





export default function InventoryPage(){



const [stock,setStock]=useState<any[]>([]);


const [type,setType]=useState("Purchase");


const [purity,setPurity]=useState("22K");


const [weight,setWeight]=useState("");



const [loading,setLoading]=useState(false);








useEffect(()=>{


const unsubscribe = onSnapshot(

collection(db,"goldStock"),

(snapshot)=>{


const data=snapshot.docs.map(doc=>(


{

id:doc.id,

...doc.data()

}


));


setStock(data);



}


);



return()=>unsubscribe();



},[]);













async function addStock(){



if(!weight){

alert("Enter gold weight");

return;

}



try{


setLoading(true);



await addDoc(

collection(db,"goldStock"),

{


type,

purity,

weight:Number(weight),


createdAt:serverTimestamp()



}


);



setWeight("");



alert("Gold Stock Updated ✅");



}


catch(error){


console.log(error);


alert("Failed");


}


finally{


setLoading(false);


}



}









const totalGold = stock.reduce(

(sum,item)=>{


if(item.type==="Purchase"){

return sum + Number(item.weight);

}


else{

return sum - Number(item.weight);

}


},

0

);









return(



<main className="
min-h-screen
bg-[#f8f4ee]
p-6
text-black
">





<section className="
max-w-7xl
mx-auto
">








<h1 className="
text-4xl
font-serif
font-bold
text-[#6b4d1f]
mb-10
">

🪙 Gold Stock Management

</h1>









{/* Stock Card */}



<div className="
grid
md:grid-cols-3
gap-6
mb-10
">





<div className="
bg-white
rounded-2xl
shadow
p-6
">


<Gem
className="text-[#9b7a3d]"
size={35}
/>



<p className="
mt-4
text-gray-500
">

Current Gold Stock

</p>



<h2 className="
text-4xl
font-bold
text-[#9b7a3d]
">

{totalGold} gm

</h2>



</div>









<div className="
bg-white
rounded-2xl
shadow
p-6
">


<Scale
className="text-[#9b7a3d]"
size={35}
/>



<p className="
mt-4
text-gray-500
">

Total Entries

</p>



<h2 className="
text-4xl
font-bold
">

{stock.length}

</h2>



</div>







<div className="
bg-white
rounded-2xl
shadow
p-6
">


<Gem
className="text-[#9b7a3d]"
size={35}
/>



<p className="
mt-4
text-gray-500
">

22K Gold

</p>



<h2 className="
text-3xl
font-bold
">

{

stock
.filter(
(item)=>item.purity==="22K"
)
.reduce(
(sum,item)=>sum+Number(item.weight),
0
)

}

gm

</h2>


</div>





</div>












{/* Add Stock */}



<div className="
bg-white
rounded-2xl
shadow
p-8
mb-10
">



<h2 className="
text-2xl
font-bold
mb-6
">

Add Gold Transaction

</h2>





<div className="
grid
md:grid-cols-4
gap-4
">






<select

value={type}

onChange={(e)=>setType(e.target.value)}

className="
border
p-3
rounded-lg
"

>


<option>
Purchase
</option>


<option>
Sale
</option>


</select>









<select

value={purity}

onChange={(e)=>setPurity(e.target.value)}

className="
border
p-3
rounded-lg
"

>


<option>
24K
</option>


<option>
22K
</option>


<option>
21K
</option>


<option>
18K
</option>



</select>









<input

type="number"

placeholder="Weight Gram"

value={weight}

onChange={(e)=>setWeight(e.target.value)}

className="
border
p-3
rounded-lg
"

/>







<button

onClick={addStock}

disabled={loading}

className="
bg-[#9b7a3d]
text-white
rounded-lg
flex
items-center
justify-center
gap-2
"

>


<Plus size={20}/>

{

loading
?
"Saving..."
:
"Add"

}


</button>






</div>




</div>













{/* History */}



<div className="
bg-white
rounded-2xl
shadow
p-8
">


<h2 className="
text-2xl
font-bold
mb-6
">

Stock History

</h2>







{

stock.length===0 ?


<p>
No Stock History
</p>



:



stock.map((item)=>(



<div

key={item.id}

className="
flex
justify-between
border-b
py-4
"

>


<div>


<p className="font-bold">

{item.type}

</p>


<p className="text-gray-500">

{item.purity}

</p>



</div>






<div className="
font-bold
text-[#9b7a3d]
">

{

item.type==="Purchase"

?

"+"

:

"-"

}


{item.weight} gm


</div>






</div>




))


}







</div>









</section>





</main>



);


}