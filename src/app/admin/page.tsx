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
ShoppingCart,
Users,
Gem,
Plus,
TrendingUp,
Crown,
ArrowUpRight

} from "lucide-react";








export default function AdminPage(){





const {

products=[],
deleteProduct

}=useProducts();





const [orders,setOrders]=useState<any[]>([]);

const [customers,setCustomers]=useState<any[]>([]);

const [goldStock,setGoldStock]=useState(0);









// ORDERS


useEffect(()=>{


const unsubscribe = onSnapshot(

collection(db,"orders"),

(snapshot)=>{


const data=snapshot.docs.map(doc=>(

{
id:doc.id,
...doc.data()

}

));


setOrders(data);



}



);



return()=>unsubscribe();


},[]);











// CUSTOMERS + GOLD STOCK



useEffect(()=>{



const customerUnsub = onSnapshot(

collection(db,"customers"),

(snapshot)=>{


const data=snapshot.docs.map(doc=>(

{
id:doc.id,
...doc.data()

}

));


setCustomers(data);



}



);








const stockUnsub = onSnapshot(

collection(db,"goldStock"),

(snapshot)=>{


let total=0;



snapshot.docs.forEach((item)=>{


const data=item.data();


total += Number(data.weight || 0);



});



setGoldStock(total);



}


);






return()=>{


customerUnsub();

stockUnsub();


};



},[]);













const totalSales = orders.reduce(

(sum,order)=>

sum + Number(order.total || 0),

0

);











const dashboardCards=[


{
title:"Total Products",
value:products.length,
icon:Package
},



{
title:"Total Orders",
value:orders.length,
icon:ShoppingCart
},



{
title:"Customers",
value:customers.length,
icon:Users
},



{
title:"Gold Stock",
value:`${goldStock} gm`,
icon:Gem
},



{
title:"Total Sales",
value:`৳ ${totalSales.toLocaleString()}`,
icon:TrendingUp
}



];













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


<section

className="

max-w-7xl

mx-auto

"


>









{/* HEADER */}



<div

className="

flex

justify-between

items-center

mb-10

"


>


<div>


<h1


className="

text-3xl

lg:text-5xl


font-serif


tracking-wide


text-yellow-400


"

>


SHOTORUPA


DASHBOARD



</h1>



<p

className="

text-gray-400

mt-3

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

gap-3


bg-yellow-500/10


border

border-yellow-500/30


px-5

py-3


rounded-full


"

>


<Crown

className="

text-yellow-400

"

/>


<span

className="

text-yellow-400

"

>

Premium Admin

</span>


</div>



</div>














{/* DASHBOARD CARDS */}



<div

className="

grid

grid-cols-1

sm:grid-cols-2

xl:grid-cols-5

gap-5


mb-10


"


>


{


dashboardCards.map((card,index)=>{


const Icon=card.icon;



return(


<div


key={index}


className="

group


bg-white/5


backdrop-blur-xl


border

border-yellow-600/30


rounded-3xl


p-6


hover:border-yellow-400


hover:-translate-y-1


transition


"


>



<div

className="

flex

justify-between

items-start

"

>


<div>


<p

className="

text-gray-400

text-sm

"

>

{card.title}


</p>



<h2

className="

text-3xl

font-bold

text-yellow-400

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


bg-yellow-500/10


flex

items-center

justify-center


group-hover:bg-yellow-500


transition


"

>


<Icon

size={28}

className="

text-yellow-400

group-hover:text-black

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

className="text-green-400"

/>


Live Updated


</div>





</div>


)



})


}



</div>
// QUICK MANAGEMENT


<div

className="

bg-white/5

backdrop-blur-xl


border

border-yellow-600/30


rounded-3xl


p-6


mb-10


"

>


<h2

className="

text-2xl

font-serif

text-yellow-400


mb-6


"

>

⚙ Quick Management

</h2>





<div

className="

grid

md:grid-cols-4

gap-5


"

>





<Link

href="/admin/add-product"

className="

bg-gradient-to-r

from-yellow-400

to-yellow-600


text-black


font-semibold


rounded-xl


p-5


text-center


hover:scale-105


transition


"

>


<Plus

className="inline mr-2"

/>


Add Product


</Link>







<Link

href="/admin/products"

className="

bg-white/10


border

border-yellow-600/30


rounded-xl


p-5


text-center


hover:bg-yellow-500/20


transition


"

>

💍 Products


</Link>







<Link

href="/admin/orders"

className="

bg-white/10


border

border-yellow-600/30


rounded-xl


p-5


text-center


hover:bg-yellow-500/20


transition


"

>

🛒 Orders


</Link>







<Link

href="/admin/customers"

className="

bg-white/10


border

border-yellow-600/30


rounded-xl


p-5


text-center


hover:bg-yellow-500/20


transition


"

>

👥 Customers


</Link>





</div>



</div>













{/* ORDERS SECTION */}



<div


className="

bg-white/5


backdrop-blur-xl


border

border-yellow-600/30


rounded-3xl


p-6


mb-10


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

text-2xl

font-serif

text-yellow-400

"

>

📦 Customer Orders

</h2>



<Link

href="/admin/orders"

className="

text-sm

text-yellow-400


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

text-gray-400

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


bg-black/40


border

border-yellow-600/20


rounded-2xl


p-5


hover:border-yellow-400


transition


"


>


<div

className="

flex

flex-col

md:flex-row


justify-between


gap-4


"

>





<div>


<h3

className="

font-bold

text-lg

text-yellow-400

"

>

{

order.orderId || order.id

}


</h3>



<p

className="

text-gray-300

mt-2

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

text-gray-400

text-sm

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

md:text-right

"

>


<p

className="

text-xl

font-bold

"

>

৳ {

order.total?.toLocaleString()

}

</p>




<span

className="

inline-block

mt-2

px-4

py-1

rounded-full

text-xs


bg-yellow-500/20

text-yellow-400


"

>

{

order.orderStatus || "Pending"

}


</span>



</div>







</div>



</div>


))


}



</div>


}



</div>
// PRODUCT LIST


<div

className="

bg-white/5


backdrop-blur-xl


border

border-yellow-600/30


rounded-3xl


p-6


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

text-2xl

font-serif

text-yellow-400


"

>

💎 Product Collection

</h2>





<Link

href="/admin/add-product"


className="

bg-gradient-to-r

from-yellow-400

to-yellow-600


text-black


px-5

py-3


rounded-xl


font-semibold


hover:scale-105


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

text-gray-400

"

>

No Product Found

</p>






:


<div

className="

space-y-5

"

>



{


products.map((product:any)=>(


<div


key={product.id}


className="


bg-black/40


border

border-yellow-600/20


rounded-2xl


p-5


flex

flex-col

lg:flex-row


justify-between


gap-5


hover:border-yellow-400


transition


"


>








{/* PRODUCT INFO */}



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

w-24

h-24


rounded-2xl


object-cover


border

border-yellow-600/30


"


/>



}









<div>


<h3

className="

text-xl

font-bold

text-white

"

>

{product.name}

</h3>




<p

className="

text-yellow-400

font-semibold

mt-2

"

>

৳ {

product.price?.toLocaleString()

}

</p>




<p

className="

text-gray-400

text-sm

mt-2

"

>

{

product.category

}

{" | "}

{

product.weight

}

{" | "}

{

product.purity

}


</p>




</div>






</div>









{/* ACTIONS */}



<div

className="

flex

gap-3

items-center

"

>




<Link


href={`/admin/edit-product/${product.id}`}


className="

px-5

py-2


rounded-xl


border

border-yellow-500


text-yellow-400


hover:bg-yellow-500


hover:text-black


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

border-red-500


text-red-400


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








</section>


</main>



);

}