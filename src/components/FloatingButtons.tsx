"use client";

import {
  MessageCircle
} from "lucide-react";


export default function FloatingButtons(){


return(


<div

className="
fixed
bottom-6
right-6
z-[999]
"

>


{/* WhatsApp Floating */}

<a

href="https://wa.me/8801000000000"

target="_blank"

rel="noopener noreferrer"

className="
relative
w-16
h-16
rounded-full
bg-green-500
text-white
flex
items-center
justify-center
shadow-2xl
hover:scale-110
transition
"

>


{/* Pulse Animation */}

<span

className="
absolute
inset-0
rounded-full
bg-green-500
animate-ping
opacity-40
"

/>



<MessageCircle

size={32}

className="
relative
z-10
"

/>


</a>



</div>


);

}