"use client";

import {useState} from "react";


export default function SettingsPage(){


const [shop,setShop]=useState("Shotorupa Jewellers");


return(


<main className="min-h-screen bg-[#f8f4ee] p-8">


<h1 className="text-4xl font-serif text-[#6b4d1f] mb-8">

Settings

</h1>




<div className="bg-white shadow rounded-xl p-8 max-w-xl">


<label className="font-bold">

Shop Name

</label>


<input

value={shop}

onChange={(e)=>setShop(e.target.value)}

className="w-full border p-3 rounded mt-3"

/>





<button

className="
mt-6
bg-[#9b7a3d]
text-white
px-6
py-3
rounded-xl
"

>

Save Settings

</button>



</div>



</main>


)

}