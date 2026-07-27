"use client";


import Link from "next/link";

import {
  useState
} from "react";


import {
  useProducts
} from "@/context/ProductContext";


import {
  Search,
  Plus,
  Edit,
  Trash2,
  Package
} from "lucide-react";





export default function ProductsPage(){



const {

products=[],
deleteProduct

}=useProducts();




const [search,setSearch]=useState("");

const [category,setCategory]=useState("All");






const categories=[

"All",
"Gold",
"Diamond",
"Wedding",
"City Gold"

];








const filteredProducts = products.filter((product:any)=>{


const searchMatch =

product.name
?.toLowerCase()
.includes(
search.toLowerCase()
);



const categoryMatch =

category==="All"

?

true

:

product.category===category;



return searchMatch && categoryMatch;



});









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

max-w-7xl

mx-auto

"

>








{/* HEADER */}



<div

className="

flex

flex-col

md:flex-row


justify-between


gap-5


mb-10


"

>



<div>


<h1

className="

text-4xl

font-serif

text-yellow-400

"

>

Products

</h1>



<p

className="

text-gray-400

mt-2

"

>

Manage jewellery inventory

</p>


</div>







<Link


href="/admin/add-product"


className="

bg-gradient-to-r

from-yellow-400

to-yellow-600


text-black


px-6

py-3


rounded-xl


font-semibold


flex

items-center

gap-2


hover:scale-105


transition


"

>


<Plus size={20}/>

Add Product


</Link>



</div>









{/* FILTER BAR */}



<div

className="

bg-white/5

border

border-yellow-600/30


rounded-2xl


p-5


mb-8


flex

flex-col

lg:flex-row


gap-5


"

>






<div

className="

relative

flex-1

"

>


<Search

size={20}

className="

absolute

left-4

top-3.5

text-yellow-400

"

/>



<input


value={search}


onChange={(e)=>
setSearch(e.target.value)
}


placeholder="Search jewellery..."


className="

w-full


bg-black/40


border

border-yellow-600/30


rounded-xl


py-3


pl-12


text-white


outline-none


focus:border-yellow-400


"


/>


</div>









<select


value={category}


onChange={(e)=>
setCategory(e.target.value)
}


className="

bg-black


border

border-yellow-600/30


rounded-xl


px-5


text-white


"


>


{

categories.map(item=>(


<option

key={item}

value={item}

className="text-black"

>

{item}

</option>


))

}


</select>





</div>









{/* PRODUCTS */}



<div

className="

grid

md:grid-cols-2

xl:grid-cols-3


gap-6


"

>


{


filteredProducts.map((product:any)=>(


<div


key={product.id}


className="


bg-white/5


border

border-yellow-600/30


rounded-3xl


overflow-hidden


hover:border-yellow-400


transition


"


>





{


product.image &&


<img


src={product.image}


alt={product.name}


className="

w-full

h-64


object-cover


"

/>


}









<div

className="

p-5

"

>


<h2

className="

text-xl

font-bold

"

>

{product.name}

</h2>





<p

className="

text-yellow-400

text-xl

font-semibold

mt-3

"

>

৳ {product.price?.toLocaleString()}

</p>







<div

className="

mt-3

text-sm

text-gray-400

space-y-1

"

>


<p>

Category:

{product.category}

</p>


<p>

Weight:

{product.weight}

</p>


<p>

Purity:

{product.purity}

</p>



</div>









<div

className="

flex

justify-between

items-center


mt-5


"

>


<span

className="

flex

items-center

gap-2


text-green-400


text-sm


"

>


<Package size={16}/>


In Stock


</span>




<div

className="

flex

gap-2

"

>


<Link


href={`/admin/edit-product/${product.id}`}


className="

p-3

rounded-xl


bg-yellow-500/10


text-yellow-400


hover:bg-yellow-500


hover:text-black


transition


"

>


<Edit size={18}/>


</Link>





<button


onClick={()=>
deleteProduct(product.id)
}


className="

p-3

rounded-xl


bg-red-500/10


text-red-400


hover:bg-red-500


hover:text-white


transition


"

>


<Trash2 size={18}/>


</button>



</div>



</div>





</div>




</div>



))


}



</div>





</div>

</main>


)


}