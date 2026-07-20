"use client";

import { useEffect, useState } from "react";


export default function Toast({
message,
show,
}:{
message:string;
show:boolean;
}){


const [active,setActive]=useState(false);



useEffect(()=>{


if(show){

setActive(true);


setTimeout(()=>{

setActive(false);

},2000);


}


},[show]);






if(!active) return null;




return(

<div

className="
fixed
top-24
right-8
bg-[#9b7a3d]
text-white
px-6
py-4
rounded-xl
shadow-2xl
z-[9999]
font-semibold
transition-all
duration-300
animate-pulse
"

>

{message}


</div>


);


}