import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";



export function middleware(request: NextRequest) {



const adminCookie = request.cookies.get("admin");

const pathname = request.nextUrl.pathname;





// Admin route protection

if (

pathname.startsWith("/admin")

&&

pathname !== "/admin/login"

) {



if (!adminCookie) {


return NextResponse.redirect(

new URL("/admin/login", request.url)

);


}



}





return NextResponse.next();



}





export const config = {


matcher: [

"/admin/:path*"

]


};