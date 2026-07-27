"use client";

import {
  useEffect,
  useState
} from "react";


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
  Scale,
  TrendingUp,
  ShoppingBag
} from "lucide-react";






export default function InventoryPage(){



const [stock,setStock]=useState<any[]>([]);


const [type,setType]=useState("Purchase");


const [purity,setPurity]=useState("22K");


const [weight,setWeight]=useState("");


const [loading,setLoading]=useState(false);








useEffect(()=>{


const unsub = onSnapshot(

collection(db,"goldStock"),

(snapshot)=>{


setStock(

snapshot.docs.map(doc=>(

{
id:doc.id,
...doc.data()
}

))

);


}

);



return()=>unsub();


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


}

catch(error){


console.log(error);


}

finally{


setLoading(false);


}



}









const totalGold = stock.reduce(

(sum,item)=>{


if(item.type==="Purchase"){

return sum + Number(item.weight || 0);

}

else{

return sum - Number(item.weight || 0);

}


},

0

);








const totalPurchase = stock.filter(

(item)=>item.type==="Purchase"

).reduce(

(sum,item)=>sum+Number(item.weight||0),

0

);




const totalSale = stock.filter(

(item)=>item.type==="Sale"

).reduce(

(sum,item)=>sum+Number(item.weight||0),

0

);









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
max-w-7xl
mx-auto
"

>







{/* HEADER */}



<div className="
mb-10
">


<p className="
text-xs
uppercase
tracking-[0.3em]
text-[#A6875A]
">

Inventory Management

</p>


<h1

className="
text-4xl
font-serif
mt-3
text-[#19160F]
"

>

Gold Stock Management

</h1>


<p className="
text-gray-500
mt-2
">

Manage gold purchase, sale and purity stock

</p>


</div>









{/* CARDS */}



<div

className="
grid
md:grid-cols-3
gap-6
mb-10
"

>





<div

className="
bg-white
rounded-3xl
p-6
border
border-[#A6875A]/20
shadow-sm
"

>


<Gem

size={35}

className="
text-[#A6875A]
"

/>



<p className="
text-gray-500
mt-5
">

Current Gold Stock

</p>



<h2

className="
text-4xl
font-bold
text-[#A6875A]
mt-2
"

>

{totalGold} gm

</h2>



</div>








<div

className="
bg-white
rounded-3xl
p-6
border
border-[#A6875A]/20
"

>


<TrendingUp

size={35}

className="
text-green-600
"

/>



<p className="
text-gray-500
mt-5
">

Total Purchase

</p>



<h2

className="
text-3xl
font-bold
"

>

+ {totalPurchase} gm

</h2>


</div>









<div

className="
bg-white
rounded-3xl
p-6
border
border-[#A6875A]/20
"

>


<ShoppingBag

size={35}

className="
text-red-500
"

/>



<p className="
text-gray-500
mt-5
">

Total Sale

</p>



<h2

className="
text-3xl
font-bold
"

>

- {totalSale} gm

</h2>



</div>






</div>











{/* ADD STOCK */}



<div

className="
bg-white
rounded-3xl
p-8
border
border-[#A6875A]/20
mb-10
"

>


<h2

className="
text-2xl
font-serif
mb-6
"

>

Add Gold Transaction

</h2>





<div

className="
grid
md:grid-cols-4
gap-5
"

>






<select

value={type}

onChange={(e)=>setType(e.target.value)}

className="
border
rounded-xl
p-3
outline-none
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
rounded-xl
p-3
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

value={weight}

onChange={(e)=>setWeight(e.target.value)}

placeholder="Gold Weight (gm)"

className="
border
rounded-xl
p-3
"

/>









<button

onClick={addStock}

disabled={loading}

className="
bg-gradient-to-r
from-[#D4AF37]
to-[#A6875A]
text-white
rounded-xl
font-semibold
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
"Add Stock"

}



</button>






</div>



</div>














{/* HISTORY */}



<div

className="
bg-white
rounded-3xl
p-8
border
border-[#A6875A]/20
"

>


<h2

className="
text-2xl
font-serif
mb-6
"

>

Stock History

</h2>







{

stock.length===0 ?



<p className="text-gray-500">

No Stock History

</p>



:



<div className="space-y-4">



{

stock.map((item)=>(


<div

key={item.id}

className="
flex
justify-between
items-center
bg-[#F6F3EC]
rounded-2xl
p-5
"

>



<div>


<h3 className="
font-bold
">

{item.type}

</h3>



<p className="
text-sm
text-gray-500
">

{item.purity}

</p>



</div>







<div

className={`

font-bold

px-4
py-2
rounded-full

${

item.type==="Purchase"

?

"bg-green-100 text-green-700"

:

"bg-red-100 text-red-700"

}

`}

>


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



}





</div>









</div>


</main>


);


}