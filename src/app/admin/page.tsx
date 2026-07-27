"use client";


import Link from "next/link";

import {
useEffect,
useState
} from "react";


import {
useProducts
} from "@/context/ProductContext";


import {
db
} from "@/lib/firebase";


import {
collection,
onSnapshot
} from "firebase/firestore";



import {

Package,
ShoppingBag,
UsersRound,
Gem,
Plus,
TrendingUp,
Crown,
ArrowUpRight,
Diamond,
Boxes,
BadgeDollarSign

} from "lucide-react";







export default function AdminPage(){



const {

products=[],
deleteProduct

}=useProducts();





const [orders,setOrders]=useState<any[]>([]);

const [customers,setCustomers]=useState<any[]>([]);

const [goldStock,setGoldStock]=useState(0);

const [cityGold,setCityGold]=useState(0);







/* ORDERS */


useEffect(()=>{


const unsub = onSnapshot(

collection(db,"orders"),

(snapshot)=>{


setOrders(

snapshot.docs.map(doc=>({

id:doc.id,

...doc.data()

}))

);


}


);


return()=>unsub();


},[]);









/* CUSTOMERS + STOCK */


useEffect(()=>{


const customerUnsub = onSnapshot(

collection(db,"customers"),

(snapshot)=>{


setCustomers(

snapshot.docs.map(doc=>({

id:doc.id,

...doc.data()

}))

);


}

);







const goldUnsub = onSnapshot(

collection(db,"goldStock"),

(snapshot)=>{


let total=0;


snapshot.docs.forEach(item=>{


const data=item.data();


total += Number(data.weight || 0);


});


setGoldStock(total);


}


);








const cityUnsub = onSnapshot(

collection(db,"cityGoldStock"),

(snapshot)=>{


let total=0;


snapshot.docs.forEach(item=>{


const data=item.data();


total += Number(data.weight || 0);


});


setCityGold(total);


}


);






return()=>{


customerUnsub();

goldUnsub();

cityUnsub();


};



},[]);










const totalSales = orders.reduce(

(sum,item)=>

sum + Number(item.total || 0),

0

);









const cards=[


{
title:"Total Products",
value:products.length,
icon:Diamond
},



{
title:"Total Orders",
value:orders.length,
icon:ShoppingBag
},



{
title:"Customers",
value:customers.length,
icon:UsersRound
},



{
title:"Gold Stock",
value:`${goldStock} gm`,
icon:Gem
},



{
title:"City Gold",
value:`${cityGold} gm`,
icon:Boxes
},



{
title:"Sales",
value:`৳ ${totalSales.toLocaleString()}`,
icon:BadgeDollarSign
}


];








return(


<main

className="
min-h-screen
bg-[#F6F3EC]
text-[#19160F]
"

>


<div

className="
max-w-7xl
mx-auto
space-y-10
"

>


{/* TITLE */}


<div

className="
flex
justify-between
items-center
"

>


<div>


<h1

className="
font-serif
text-4xl
text-[#A6875A]
"

>

SHOTORUPA DASHBOARD

</h1>


<p

className="
text-gray-500
mt-2
"

>

Luxury Jewellery Management System

</p>


</div>





<div

className="
hidden
md:flex
items-center
gap-2
px-5
py-3
rounded-full
bg-white
border
border-[#A6875A]/30
"

>


<Crown

size={20}

className="
text-[#A6875A]
"

/>


Premium Admin


</div>


</div>








{/* CARDS */}



<div

className="
grid
grid-cols-1
sm:grid-cols-2
xl:grid-cols-6
gap-5
"

>


{

cards.map((card,index)=>{


const Icon=card.icon;


return(


<div

key={index}

className="
bg-white
rounded-3xl
p-6
border
border-[#D4AF37]/30
shadow-sm
hover:shadow-xl
transition
"

>


<div

className="
flex
justify-between
"

>


<div>


<p

className="
text-sm
text-gray-500
"

>

{card.title}

</p>


<h2

className="
text-3xl
font-bold
mt-3
"

>

{card.value}

</h2>


</div>



<div

className="
w-14
h-14
rounded-2xl
bg-[#D4AF37]/10
flex
items-center
justify-center
"

>


<Icon

size={28}

className="
text-[#D4AF37]
"

/>


</div>


</div>





<div

className="
flex
items-center
gap-2
mt-5
text-xs
text-gray-400
"

>


<ArrowUpRight

size={14}

/>


Live Updated


</div>


</div>


)


})


}



</div>
{/* ================= QUICK MANAGEMENT ================= */}


<div

className="
bg-white
rounded-3xl
p-8
border
border-[#D4AF37]/30
shadow-sm
"

>


<h2

className="
font-serif
text-2xl
mb-6
text-[#D4AF37]
tracking-wide
"

>

⚙ Quick Management

</h2>





<div

className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-5
gap-5
"

>





{/* ADD PRODUCT */}


<Link

href="/admin/add-product"

className="
bg-gradient-to-r
from-[#D4AF37]
to-[#A6875A]

text-white

rounded-xl

p-5

text-center

font-semibold

shadow-lg

hover:scale-105

transition

"

>


<Plus

size={32}

className="
mx-auto
mb-3
"

/>


Add Product


</Link>







{/* PRODUCTS */}


<Link

href="/admin/products"

className="
border
border-[#D4AF37]/40

text-[#A6875A]

rounded-xl

p-5

text-center

font-semibold

hover:bg-[#D4AF37]/10

transition

"

>


<Diamond

size={32}

className="
mx-auto
mb-3
text-[#D4AF37]
"

/>


Products


</Link>








{/* ORDERS */}


<Link

href="/admin/orders"

className="
border
border-[#D4AF37]/40

text-[#A6875A]

rounded-xl

p-5

text-center

font-semibold

hover:bg-[#D4AF37]/10

transition

"

>


<ShoppingBag

size={32}

className="
mx-auto
mb-3
text-[#D4AF37]
"

/>


Orders


</Link>








{/* CUSTOMERS */}


<Link

href="/admin/customers"

className="
border
border-[#D4AF37]/40

text-[#A6875A]

rounded-xl

p-5

text-center

font-semibold

hover:bg-[#D4AF37]/10

transition

"

>


<UsersRound

size={32}

className="
mx-auto
mb-3
text-[#D4AF37]
"

/>


Customers


</Link>








{/* CITY GOLD */}


<Link

href="/admin/jewellery/city-gold"

className="
border
border-[#D4AF37]/40

text-[#A6875A]

rounded-xl

p-5

text-center

font-semibold

hover:bg-[#D4AF37]/10

transition

"

>


<Gem

size={32}

className="
mx-auto
mb-3
text-[#D4AF37]
"

/>


City Gold


</Link>





</div>


</div>









{/* ================= RECENT ORDERS ================= */}



<div

className="
bg-white
rounded-3xl
p-8
border
border-[#A6875A]/20
"

>


<div

className="
flex
justify-between
items-center
mb-6
"

>


<h2

className="
font-serif
text-2xl
text-[#A6875A]
"

>

📦 Recent Orders

</h2>



<Link

href="/admin/orders"

className="
text-sm
text-[#D4AF37]
hover:underline
"

>

View All

</Link>


</div>







{

orders.length===0 ?



<p

className="
text-gray-500
"

>

No Orders Found

</p>




:


<div

className="
space-y-4
"

>


{

orders.slice(0,5).map((order)=>(



<div

key={order.id}

className="
bg-[#F6F3EC]
rounded-2xl
p-5
flex
justify-between
items-center
border
border-[#D4AF37]/20
hover:shadow-md
transition
"

>


<div>


<h3

className="
font-bold
text-lg
"

>

{

order.orderId || order.id

}

</h3>



<p

className="
text-gray-500
mt-1
"

>

Customer:

{" "}

{

order.customer?.name || "Guest"

}

</p>



<p

className="
text-sm
text-gray-400
"

>

Phone:

{" "}

{

order.customer?.phone || "N/A"

}

</p>


</div>







<div

className="
text-right
"

>


<h3

className="
font-bold
text-xl
text-[#A6875A]
"

>

৳ {order.total || 0}

</h3>




<span

className="
inline-block
mt-2
px-4
py-1
rounded-full
bg-[#D4AF37]/20
text-[#A6875A]
text-xs
"

>

{

order.orderStatus || "Pending"

}

</span>



</div>





</div>



))


}



</div>



}



</div>
{/* ================= PRODUCT COLLECTION ================= */}



<div

className="
bg-white
rounded-3xl
p-8
border
border-[#A6875A]/20
"

>



<div

className="
flex
justify-between
items-center
mb-6
"

>


<h2

className="
font-serif
text-2xl
text-[#A6875A]
"

>

💎 Product Collection

</h2>



<Link

href="/admin/add-product"

className="
bg-[#D4AF37]
text-white
px-5
py-3
rounded-xl
font-semibold
hover:bg-[#A6875A]
transition
"

>

+ Add Product

</Link>


</div>









{

products.length===0 ?



<p

className="
text-gray-500
"

>

No Product Found

</p>




:



<div

className="
space-y-4
"

>


{


products.map((product:any)=>(



<div

key={product.id}

className="
bg-[#F6F3EC]
rounded-2xl
p-5

flex
flex-col
md:flex-row

justify-between
items-center

border
border-[#D4AF37]/20

hover:shadow-md

transition

"

>







<div

className="
flex
items-center
gap-5
"

>





{

product.image &&


<img

src={product.image}

alt={product.name}

className="
w-20
h-20
rounded-xl
object-cover
border
border-[#D4AF37]/30
"

/>



}




<div>


<h3

className="
font-bold
text-lg
"

>

{product.name}

</h3>




<p

className="
text-[#A6875A]
font-semibold
mt-1
"

>

৳ {product.price}

</p>




<p

className="
text-sm
text-gray-500
mt-1
"

>

{product.category}

{" | "}

{product.weight}

{" gm"}

</p>



</div>



</div>









<div

className="
flex
gap-3
mt-4
md:mt-0
"

>


<Link

href={`/admin/edit-product/${product.id}`}

className="
px-5
py-2

rounded-xl

border
border-[#D4AF37]

text-[#A6875A]

hover:bg-[#D4AF37]

hover:text-white

transition

"

>

Edit

</Link>








<button

onClick={()=>deleteProduct(product.id)}

className="
px-5
py-2

rounded-xl

border
border-red-400

text-red-500

hover:bg-red-500

hover:text-white

transition

"

>

Delete

</button>



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