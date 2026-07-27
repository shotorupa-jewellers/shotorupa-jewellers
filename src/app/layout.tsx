import type { Metadata } from "next";

import {
  Fraunces,
  Inter
} from "next/font/google";

import "./globals.css";


import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { ProductProvider } from "@/context/ProductContext";
import { OfferProvider } from "@/context/OfferContext";


import Header from "@/components/Header";
import LuxuryCursor from "@/components/LuxuryCursor";






const fraunces = Fraunces({

  subsets:["latin"],

  variable:"--font-fraunces",

  weight:[
    "400",
    "500"
  ],

  display:"swap",

});







const inter = Inter({

  subsets:["latin"],

  variable:"--font-inter",

  weight:[
    "300",
    "400",
    "500"
  ],

  display:"swap",

});








export const metadata:Metadata={


title:"SHOTORUPA JEWELLERS",


description:
"Premium Gold & Diamond Jewellery",


};









export default function RootLayout({

children,

}:Readonly<{

children:React.ReactNode;

}>) {



return(


<html lang="en">



<body


className={`

${inter.variable}

${fraunces.variable}

bg-[#F6F3EC]

text-[#19160F]

antialiased

`}



>


<CartProvider>


<WishlistProvider>


<ProductProvider>


<OfferProvider>





{/* WEBSITE HEADER */}


<Header />







{/* PAGE CONTENT */}


{children}







{/* LUXURY CURSOR */}


<LuxuryCursor />





</OfferProvider>


</ProductProvider>


</WishlistProvider>


</CartProvider>




</body>



</html>


);


}