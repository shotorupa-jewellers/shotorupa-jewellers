"use client";

import {
  useState
} from "react";


import Sidebar from "@/components/admin/Sidebar";
import AdminHeader from "@/components/admin/Header";



export default function AdminLayout({

children

}:{

children:React.ReactNode;

}){


const [open,setOpen]=useState(false);



return(


<div

className="
min-h-screen
bg-[#F6F3EC]
"


>


{/* ADMIN SIDEBAR */}

<Sidebar

open={open}

setOpen={setOpen}

/>





{/* CONTENT AREA */}


<div

className="
lg:ml-72
min-h-screen
"


>


{/* ADMIN HEADER */}

<AdminHeader

setOpen={setOpen}

/>





{/* ADMIN PAGE */}

<main

className="
p-4
lg:p-8
min-h-screen
bg-[#F6F3EC]
"

>

{children}


</main>



</div>



</div>


);


}