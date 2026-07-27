"use client";

import {
  useState
} from "react";


import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";



export default function AdminLayout({

children,

}:{

children:React.ReactNode

}){


const [open,setOpen]=useState(false);



return(


<div className="
min-h-screen
bg-[#f8f4ee]
flex
">





<Sidebar

open={open}

setOpen={setOpen}

/>





<div className="
flex-1
md:ml-72
">





<Header

setOpen={setOpen}

/>





<main className="
p-6
min-h-screen
bg-[#f8f4ee]
">


{children}


</main>




</div>




</div>


);

}
