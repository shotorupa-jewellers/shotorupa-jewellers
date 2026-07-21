"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useOffers } from "@/context/OfferContext";



export default function OffersAdmin(){


const router = useRouter();


const {addOffer, offers, deleteOffer}=useOffers();



const [title,setTitle]=useState("");

const [subtitle,setSubtitle]=useState("");

const [discount,setDiscount]=useState("");

const [description,setDescription]=useState("");

const [image,setImage]=useState("");





function handleImage(e:any){


const file=e.target.files[0];


if(file){


const reader=new FileReader();


reader.onload=()=>{


setImage(reader.result as string);


};


reader.readAsDataURL(file);


}


}






function saveOffer(){



if(!title || !image){

alert("Title and Image required");

return;

}




addOffer({

id:Date.now(),

title,

subtitle,

discount,

description,

image

});




alert("Offer Added Successfully ✅");



setTitle("");

setSubtitle("");

setDiscount("");

setDescription("");

setImage("");



}







return(


<main className="min-h-screen bg-[#f8f4ee] p-8 text-black">



<h1 className="text-4xl font-serif text-[#6b4d1f] mb-10">

Offer Management

</h1>






<div className="bg-white rounded-xl shadow p-8 max-w-xl">





<input

placeholder="Offer Title"

value={title}

onChange={(e)=>setTitle(e.target.value)}

className="w-full border p-3 rounded mb-4"

/>






<input

placeholder="Subtitle"

value={subtitle}

onChange={(e)=>setSubtitle(e.target.value)}

className="w-full border p-3 rounded mb-4"

/>







<input

placeholder="Discount"

value={discount}

onChange={(e)=>setDiscount(e.target.value)}

className="w-full border p-3 rounded mb-4"

/>







<textarea

placeholder="Description"

value={description}

onChange={(e)=>setDescription(e.target.value)}

className="w-full border p-3 rounded mb-4"

/>








<label className="font-semibold">

Offer Image

</label>



<input

type="file"

accept="image/*"

onChange={handleImage}

className="w-full border p-3 rounded mt-2 mb-5"

/>





{

image &&

<img

src={image}

className="w-60 h-40 object-cover rounded mb-5"

/>

}







<button

onClick={saveOffer}

className="w-full bg-[#9b7a3d] text-white py-4 rounded-xl font-bold"

>

Add Offer

</button>




</div>







<div className="bg-white mt-10 rounded-xl shadow p-8">


<h2 className="text-2xl font-bold mb-5">

Current Offers

</h2>



{

offers.map((offer)=>(


<div

key={offer.id}

className="border-b py-4 flex justify-between items-center"

>


<div>


<h3 className="font-bold">

{offer.title}

</h3>


<p>

{offer.discount}

</p>


</div>



<button

onClick={()=>deleteOffer(offer.id)}

className="bg-red-600 text-white px-5 py-2 rounded"

>

Delete

</button>



</div>


))


}



</div>





</main>


);


}
