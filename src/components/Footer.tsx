"use client";

import Link from "next/link";


export default function Footer(){


return(


<footer className="bg-[#1b1408] text-white mt-16">



<div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">






{/* Brand */}


<div>


<h2 className="text-3xl font-serif text-[#d4af37]">

SHOTORUPA

</h2>


<h3 className="text-xl font-serif">

JEWELLERS

</h3>



<p className="text-gray-300 mt-4 leading-relaxed">

Premium Gold & Diamond Jewellery.

Elegant designs crafted for your special moments.

</p>


</div>









{/* Quick Links */}


<div>


<h3 className="text-xl font-bold text-[#d4af37] mb-4">

Quick Links

</h3>



<div className="space-y-3">



<Link

href="/"

className="block hover:text-[#d4af37]"

>

Home

</Link>




<Link

href="/products"

className="block hover:text-[#d4af37]"

>

Products

</Link>




<Link

href="/cart"

className="block hover:text-[#d4af37]"

>

Cart

</Link>




<Link

href="/account"

className="block hover:text-[#d4af37]"

>

My Account

</Link>



</div>


</div>









{/* Customer Service */}


<div>


<h3 className="text-xl font-bold text-[#d4af37] mb-4">

Customer Service

</h3>



<div className="space-y-3">



<Link

href="/orders"

className="block hover:text-[#d4af37]"

>

My Orders

</Link>




<Link

href="/wishlist"

className="block hover:text-[#d4af37]"

>

Wishlist

</Link>




<p>

Delivery Information

</p>



<p>

Return Policy

</p>



</div>


</div>









{/* Contact */}


<div>


<h3 className="text-xl font-bold text-[#d4af37] mb-4">

Contact

</h3>




<p className="text-gray-300">

📍 Magura, Bangladesh

</p>




<p className="mt-3">

📞 01828784693

</p>




<a

href="https://wa.me/8801828784693"

target="_blank"

className="block mt-3 text-green-400 hover:text-green-300"

>

💬 WhatsApp

</a>




</div>






</div>









<div className="border-t border-gray-700 text-center py-5 text-gray-400">


© {new Date().getFullYear()} Shotorupa Jewellers. All Rights Reserved.


</div>






</footer>


);


}