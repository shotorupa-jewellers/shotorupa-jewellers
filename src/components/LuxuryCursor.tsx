"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function LuxuryCursor(){


const [mouse,setMouse]=useState({
x:0,
y:0
});



useEffect(()=>{


const move=(e:MouseEvent)=>{


setMouse({

x:e.clientX,
y:e.clientY

});


};



window.addEventListener(
"mousemove",
move
);



return()=>{


window.removeEventListener(
"mousemove",
move
);


};


},[]);






return(


<motion.div


animate={{

x:mouse.x-18,
y:mouse.y-18

}}



transition={{

type:"tween",
duration:0.05

}}



className="
fixed
top-0
left-0
z-[99999]
pointer-events-none
hidden
lg:block
"



>



{/* OUTER TRANSPARENT CIRCLE */}


<div


className="
w-[36px]
h-[36px]
rounded-full
border
border-[#D6B77A]
bg-transparent
flex
items-center
justify-center
"

>



{/* INNER BLACK DOT */}


<div


className="
w-[7px]
h-[7px]
rounded-full
bg-black
"

>


</div>



</div>





</motion.div>


)

}