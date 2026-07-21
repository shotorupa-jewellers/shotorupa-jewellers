"use client";


interface StatCardProps {

title: string;

value: string | number;

icon: string;

color?: string;

}



export default function StatCard({

title,

value,

icon,

color = "bg-[#9b7a3d]",

}: StatCardProps){



return(


<div

className="
bg-white
rounded-2xl
shadow-lg
p-6
flex
items-center
justify-between
hover:shadow-2xl
transition
"

>



<div>


<p

className="
text-gray-500
text-sm
font-medium
"

>

{title}

</p>



<h2

className="
text-3xl
font-bold
text-[#6b4d1f]
mt-2
"

>

{value}

</h2>


</div>





<div

className={`
${color}
w-16
h-16
rounded-full
flex
items-center
justify-center
text-3xl
text-white
shadow-lg
`}

>

{icon}


</div>



</div>


);


}