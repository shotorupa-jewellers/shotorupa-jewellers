import Link from "next/link";

import {
  MessageCircle,
  Phone,
  MapPin
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF
} from "react-icons/fa";


export default function LuxuryFooter() {


return (

<footer
className="
bg-gradient-to-b
from-[#2b2119]
to-[#170f0a]
text-[#F6F3EC]
"
>


{/* Gold Divider */}

<div
className="
h-px
bg-gradient-to-r
from-transparent
via-[#CBB088]
to-transparent
"
/>





<div
className="
max-w-[1240px]
mx-auto
px-8
py-20
grid
md:grid-cols-4
gap-12
"
>





{/* ================= BRAND ================= */}


<div className="md:col-span-2">


<h2
className="
font-serif
text-5xl
tracking-[0.18em]
"
>

SHOTORUPA

</h2>



<p
className="
mt-3
text-[#CBB088]
tracking-[0.35em]
text-xs
"
>

JEWELLERS

</p>





<p
className="
mt-8
max-w-md
text-[#ddd3c5]
leading-relaxed
"
>

Crafting timeless jewellery with
pure gold, diamonds and artistry.
Every piece carries a story of
elegance, purity and everlasting beauty.

</p>






{/* SOCIAL ICONS */}


<div
className="
flex
gap-4
mt-8
"
>



{/* Instagram */}

<a
href="#"
className="
w-11
h-11
border
border-[#CBB088]
rounded-full
flex
items-center
justify-center
hover:bg-[#CBB088]
hover:text-[#241C16]
transition
hover:-translate-y-1
"
>

<FaInstagram size={18}/>

</a>






{/* Facebook */}


<a
href="#"
className="
w-11
h-11
border
border-[#CBB088]
rounded-full
flex
items-center
justify-center
hover:bg-[#CBB088]
hover:text-[#241C16]
transition
hover:-translate-y-1
"
>

<FaFacebookF size={17}/>

</a>






{/* WhatsApp */}


<a
href="https://wa.me/8801828784693"
target="_blank"
rel="noopener noreferrer"
className="
w-11
h-11
border
border-[#CBB088]
rounded-full
flex
items-center
justify-center
hover:bg-[#CBB088]
hover:text-[#241C16]
transition
hover:-translate-y-1
"
>

<MessageCircle size={18}/>

</a>



</div>



</div>









{/* ================= COLLECTIONS ================= */}



<div>


<h3
className="
uppercase
tracking-[0.2em]
text-sm
text-[#CBB088]
"
>

Collections

</h3>




<ul
className="
mt-6
space-y-4
text-[#ddd3c5]
text-sm
"
>


<li>

<Link
href="/gold"
className="hover:text-[#CBB088] transition"
>

Gold Jewellery

</Link>

</li>




<li>

<Link
href="/diamond"
className="hover:text-[#CBB088] transition"
>

Diamond Collection

</Link>

</li>





<li>

<Link
href="/bridal"
className="hover:text-[#CBB088] transition"
>

Bridal Jewellery

</Link>

</li>





<li>

<Link
href="/new-arrivals"
className="hover:text-[#CBB088] transition"
>

New Arrivals

</Link>

</li>



</ul>


</div>









{/* ================= CONTACT ================= */}



<div>


<h3
className="
uppercase
tracking-[0.2em]
text-sm
text-[#CBB088]
"
>

Contact

</h3>






<div
className="
mt-6
space-y-5
text-[#ddd3c5]
text-sm
"
>




<p
className="
flex
gap-3
items-center
"
>


<Phone
size={17}
className="text-[#CBB088]"
/>


+880 1828 784693


</p>








<p
className="
flex
gap-3
items-center
"
>


<MessageCircle
size={17}
className="text-[#CBB088]"
/>


WhatsApp Available


</p>








<p
className="
flex
gap-3
items-start
"
>


<MapPin
size={17}
className="text-[#CBB088] mt-1"
/>



<span>

Shotorupa Jewellers

<br/>

Bangladesh

</span>


</p>




</div>



</div>






</div>









{/* ================= COPYRIGHT ================= */}



<div
className="
border-t
border-white/10
py-8
text-center
text-sm
text-[#aaa095]
"
>


© {new Date().getFullYear()} Shotorupa Jewellers.
All Rights Reserved.


</div>





</footer>


)

}